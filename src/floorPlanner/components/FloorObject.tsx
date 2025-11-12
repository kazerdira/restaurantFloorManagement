import React, { useState } from 'react';
import type { FloorObject as FloorObjectType } from '../types';
import { OBJECT_ICONS, OBJECT_COLORS } from '../constants';

interface FloorObjectProps {
  object: FloorObjectType;
  isSelected: boolean;
  onSelect: () => void;
  onDragStart: (e: React.MouseEvent) => void;
}

export const FloorObjectComponent: React.FC<FloorObjectProps> = ({
  object,
  isSelected,
  onSelect,
  onDragStart
}) => {
  const Icon = OBJECT_ICONS[object.type];
  const colors = OBJECT_COLORS[object.type];
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    onDragStart(e);
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className={`absolute cursor-move select-none ${!isDragging ? 'transition-all duration-75' : ''} ${colors.bg} ${colors.border} border-2 rounded-lg shadow-lg flex items-center justify-center ${
        isSelected ? 'ring-4 ring-blue-400 ring-opacity-50 scale-105' : 'hover:scale-102'
      }`}
      style={{
        left: `${object.x}px`,
        top: `${object.y}px`,
        width: `${object.width}px`,
        height: `${object.height}px`,
        transform: `rotate(${object.rotation}deg)`,
        transformOrigin: 'center',
        willChange: isDragging ? 'transform' : 'auto'
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="rfp-flex rfp-flex-col rfp-items-center rfp-justify-center rfp-gap-2 rfp-pointer-events-none">
        <Icon className={`w-8 h-8 ${colors.text}`} strokeWidth={2} />
        <span className={`text-sm font-bold ${colors.text} uppercase tracking-wide`}>
          {object.name}
        </span>
      </div>
      
      {/* Resize handles when selected */}
      {isSelected && (
        <>
          {/* Corner resize handles */}
          <div className="rfp-absolute -top-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-nw-resize" />
          <div className="rfp-absolute -top-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-ne-resize" />
          <div className="rfp-absolute -bottom-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-sw-resize" />
          <div className="rfp-absolute -bottom-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white cursor-se-resize" />
        </>
      )}
    </div>
  );
};
