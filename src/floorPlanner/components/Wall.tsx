import React from 'react';
import type { Wall as WallType } from '../types';
import { WALL_LABELS } from '../constants';

interface WallProps {
  wall: WallType;
  isSelected: boolean;
  onSelect: () => void;
  onDragHandle?: (e: React.MouseEvent, handleType: 'start' | 'end') => void;
}

export const WallComponent: React.FC<WallProps> = ({
  wall,
  isSelected,
  onSelect,
  onDragHandle
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
      return 'bg-gradient-to-r from-amber-500 to-amber-700';
    }
    return getWallColor();
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      className={`absolute transition-all ${
        isSelected ? 'ring-4 ring-blue-400 ring-opacity-50' : ''
      }`}
      style={{
        left: `${wall.startX}px`,
        top: `${wall.startY}px`,
        width: `${length}px`,
        height: `${wall.thickness}px`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: 'top left',
        zIndex: 10,
        cursor: isSelected ? 'default' : 'pointer',
        pointerEvents: 'auto'
      }}
    >
      <div className={`w-full h-full ${getWallPattern()} shadow-lg hover:opacity-90 transition-opacity rounded-sm`}>
        {isSelected && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30">
            {WALL_LABELS[wall.type]} - {Math.round(length)}px
          </div>
        )}
      </div>
      
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
