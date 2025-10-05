import React, { useState } from 'react';
import type { FixedElement as FixedElementType } from '../types';

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

  const renderContent = () => {
    if (element.type === 'pillar') {
      return (
        <div className="w-full h-full relative">
          {/* Circular pillar with 3D effect */}
          <div className="absolute inset-2 bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 rounded-full shadow-2xl">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
            {/* Shadow effect */}
            <div className="absolute inset-0 rounded-full shadow-inner" style={{ boxShadow: 'inset -4px -4px 12px rgba(0,0,0,0.5), inset 4px 4px 12px rgba(255,255,255,0.2)' }} />
          </div>
          {/* Center highlight */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/3 h-1/3 bg-white/10 rounded-full blur-sm" />
          </div>
        </div>
      );
    }
    
    if (element.type === 'column') {
      return (
        <div className="w-full h-full relative">
          {/* Square column with depth */}
          <div className="absolute inset-2 bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800 rounded-lg shadow-2xl">
            {/* Top face (3D effect) */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-transparent to-black/30" />
            {/* Edge highlights */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-lg" />
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-l-lg" />
            {/* Inner shadow */}
            <div className="absolute inset-0 rounded-lg" style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }} />
          </div>
          {/* Decorative lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-0.5 h-2/3 bg-white/20" />
          </div>
        </div>
      );
    }
    
    if (element.type === 'stairs') {
      return (
        <div className="w-full h-full relative bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rounded-lg shadow-xl overflow-hidden">
          {/* Steps */}
          {[0, 1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className="absolute left-0 right-0 bg-gradient-to-r from-amber-400 to-amber-500 border-t border-amber-600"
              style={{
                top: `${step * 16.66}%`,
                height: '16.66%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              {/* Step highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2" />
              {/* Step edge shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-black/30" />
            </div>
          ))}
          {/* Arrow indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/80 rounded-full p-2 shadow-lg">
              <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div
      className={`absolute cursor-move select-none ${!isDragging ? 'transition-all duration-75' : ''} rounded-lg ${
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
      {renderContent()}
      
      {/* Label */}
      {isSelected && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30">
          {element.name}
        </div>
      )}
      
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
