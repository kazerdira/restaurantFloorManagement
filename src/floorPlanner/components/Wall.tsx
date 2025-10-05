import React from 'react';
import type { Wall as WallType } from '../types';
import { WALL_LABELS } from '../constants';

interface WallProps {
  wall: WallType;
  isSelected: boolean;
  onSelect: () => void;
  onDragHandle?: (e: React.MouseEvent, handleType: 'start' | 'end') => void;
  onDragStart?: (e: React.MouseEvent) => void;
}

export const WallComponent: React.FC<WallProps> = ({
  wall,
  isSelected,
  onSelect,
  onDragHandle,
  onDragStart
}) => {
  const length = Math.sqrt(
    Math.pow(wall.endX - wall.startX, 2) + Math.pow(wall.endY - wall.startY, 2)
  );
  const angle = Math.atan2(wall.endY - wall.startY, wall.endX - wall.startX) * (180 / Math.PI);

  // Determine cursor based on wall orientation
  const getCursorStyle = () => {
    if (!isSelected) return 'pointer';
    
    // Calculate if wall is more horizontal or vertical
    const dx = Math.abs(wall.endX - wall.startX);
    const dy = Math.abs(wall.endY - wall.startY);
    
    return dx > dy ? 'ew-resize' : 'ns-resize';
  };

  const getWallColor = () => {
    switch (wall.type) {
      case 'wall':
        return 'bg-gray-800';
      case 'door':
        return 'bg-amber-600';
      case 'window':
        return 'bg-blue-500';
    }
  };

  const getWallPattern = () => {
    if (wall.type === 'window') {
      return 'bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400';
    }
    if (wall.type === 'door') {
      // Door gets custom rendering, return empty
      return '';
    }
    return getWallColor();
  };

  // Render door as two angled panels
  const renderDoor = () => {
    const gapSize = length * 0.1; // 10% gap in the middle
    const panelWidth = (length - gapSize) / 2;
    
    return (
      <div className="w-full h-full relative">
        {/* Left door panel */}
        <div
          className="absolute left-0 bg-gradient-to-r from-amber-600 to-amber-700 shadow-md rounded-sm"
          style={{
            width: `${panelWidth}px`,
            height: `${wall.thickness}px`,
            borderTop: '1px solid #fbbf24',
            borderBottom: '1px solid #78350f',
            borderRight: '2px solid #92400e'
          }}
        >
          {/* Door handle/knob */}
          <div 
            className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-sm"
          />
        </div>
        
        {/* Gap in the middle */}
        <div
          className="absolute bg-transparent"
          style={{
            left: `${panelWidth}px`,
            width: `${gapSize}px`,
            height: `${wall.thickness}px`
          }}
        />
        
        {/* Right door panel */}
        <div
          className="absolute right-0 bg-gradient-to-r from-amber-700 to-amber-600 shadow-md rounded-sm"
          style={{
            width: `${panelWidth}px`,
            height: `${wall.thickness}px`,
            borderTop: '1px solid #fbbf24',
            borderBottom: '1px solid #78350f',
            borderLeft: '2px solid #92400e'
          }}
        >
          {/* Door handle/knob */}
          <div 
            className="absolute left-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-sm"
          />
        </div>
      </div>
    );
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onMouseDown={(e) => {
        // Only allow dragging the wall body when selected and not clicking handles
        if (isSelected && onDragStart) {
          e.stopPropagation();
          onDragStart(e);
        }
      }}
      className={`absolute transition-all ${
        isSelected ? 'ring-4 ring-blue-400 ring-opacity-50 hover:ring-6 hover:ring-blue-300' : ''
      }`}
      style={{
        left: `${wall.startX}px`,
        top: `${wall.startY}px`,
        width: `${length}px`,
        height: `${wall.thickness}px`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: 'top left',
        zIndex: 10,
        cursor: isSelected ? 'move' : 'pointer',
        pointerEvents: 'auto'
      }}
    >
      {wall.type === 'door' ? (
        renderDoor()
      ) : (
        <div className={`w-full h-full ${getWallPattern()} shadow-lg hover:opacity-90 transition-opacity rounded-sm`}>
          {isSelected && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30">
              {WALL_LABELS[wall.type]} - {Math.round(length)}px
            </div>
          )}
        </div>
      )}
      
      {/* Label for door */}
      {wall.type === 'door' && isSelected && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30">
          {WALL_LABELS[wall.type]} - {Math.round(length)}px
        </div>
      )}
      
      {/* End point handles */}
      {isSelected && (
        <>
          <div 
            className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white hover:bg-blue-600 hover:scale-125 transition-all shadow-xl z-30"
            style={{ cursor: getCursorStyle() }}
            onMouseDown={(e) => {
              e.stopPropagation();
              onDragHandle?.(e, 'start');
            }}
            title="Drag to resize"
          />
          <div 
            className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white hover:bg-blue-600 hover:scale-125 transition-all shadow-xl z-30"
            style={{ cursor: getCursorStyle() }}
            onMouseDown={(e) => {
              e.stopPropagation();
              onDragHandle?.(e, 'end');
            }}
            title="Drag to resize"
          />
        </>
      )}
    </div>
  );
};
