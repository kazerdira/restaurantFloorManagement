import React, { useState } from 'react';
import type { FixedElement as FixedElementType } from '../types';
import { FIXED_ELEMENT_ICONS, FIXED_ELEMENT_COLORS } from '../constants';

interface FixedElementProps {
  element: FixedElementType;
  isSelected: boolean;
  onSelect: () => void;
  onDragStart: (e: React.MouseEvent) => void;
}

export const FixedElementComponent: React.FC<FixedElementProps> = ({
  element,
  isSelected,
  onSelect,
  onDragStart
}) => {
  const Icon = FIXED_ELEMENT_ICONS[element.type];
  const colors = FIXED_ELEMENT_COLORS[element.type];
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
      className={`absolute cursor-move select-none ${!isDragging ? 'transition-all duration-75' : ''} ${colors.bg} ${colors.border} border-4 rounded-lg shadow-xl flex items-center justify-center ${
        isSelected ? 'ring-4 ring-blue-400 ring-opacity-50 scale-105' : 'hover:scale-102'
      }`}
      style={{
        left: `${element.x}px`,
        top: `${element.y}px`,
        width: `${element.width}px`,
        height: `${element.height}px`,
        transform: `rotate(${element.rotation}deg)`,
        transformOrigin: 'center',
        willChange: isDragging ? 'transform' : 'auto',
        zIndex: 20
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="flex flex-col items-center justify-center gap-2 pointer-events-none">
        <Icon className={`w-10 h-10 ${colors.text}`} strokeWidth={2.5} />
        <span className={`text-sm font-bold ${colors.text} uppercase tracking-wide`}>
          {element.name}
        </span>
      </div>
      
      {/* Selection indicators */}
      {isSelected && (
        <>
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
        </>
      )}
    </div>
  );
};
