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
        <div className="rfp-w-full rfp-h-full rfp-relative">
          {/* Circular pillar with 3D effect */}
          <div className="rfp-absolute inset-2 bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 rfp-rounded-full shadow-2xl">
            <div className="rfp-absolute rfp-inset-0 rfp-rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20" />
            {/* Shadow effect */}
            <div className="rfp-absolute rfp-inset-0 rfp-rounded-full shadow-inner" style={{ boxShadow: 'inset -4px -4px 12px rgba(0,0,0,0.5), inset 4px 4px 12px rgba(255,255,255,0.2)' }} />
          </div>
          {/* Center highlight */}
          <div className="rfp-absolute rfp-inset-0 rfp-flex rfp-items-center rfp-justify-center">
            <div className="w-1/3 h-1/3 bg-white/10 rfp-rounded-full blur-sm" />
          </div>
        </div>
      );
    }
    
    if (element.type === 'column') {
      return (
        <div className="rfp-w-full rfp-h-full rfp-relative">
          {/* Square column with depth */}
          <div className="rfp-absolute inset-2 bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800 rfp-rounded-lg shadow-2xl">
            {/* Top face (3D effect) */}
            <div className="rfp-absolute rfp-inset-0 rfp-rounded-lg bg-gradient-to-br from-white/20 via-transparent to-black/30" />
            {/* Edge highlights */}
            <div className="rfp-absolute rfp-top-0 rfp-left-0 rfp-right-0 rfp-h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-lg" />
            <div className="rfp-absolute rfp-top-0 rfp-bottom-0 rfp-left-0 rfp-w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-l-lg" />
            {/* Inner shadow */}
            <div className="rfp-absolute rfp-inset-0 rfp-rounded-lg" style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }} />
          </div>
          {/* Decorative lines */}
          <div className="rfp-absolute rfp-inset-0 rfp-flex rfp-items-center rfp-justify-center rfp-pointer-events-none">
            <div className="w-0.5 h-2/3 bg-white/20" />
          </div>
        </div>
      );
    }
    
    if (element.type === 'stairs') {
      return (
        <div className="rfp-w-full rfp-h-full rfp-relative bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rfp-rounded-lg rfp-shadow-xl rfp-overflow-hidden">
          {/* Steps */}
          {[0, 1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className="rfp-absolute rfp-left-0 rfp-right-0 bg-gradient-to-r from-amber-400 to-amber-500 rfp-border-t border-amber-600"
              style={{
                top: `${step * 16.66}%`,
                height: '16.66%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              {/* Step highlight */}
              <div className="rfp-absolute rfp-inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2" />
              {/* Step edge shadow */}
              <div className="rfp-absolute rfp-bottom-0 rfp-left-0 rfp-right-0 h-px bg-black/30" />
            </div>
          ))}
          {/* Arrow indicator */}
          <div className="rfp-absolute rfp-inset-0 rfp-flex rfp-items-center rfp-justify-center rfp-pointer-events-none">
            <div className="bg-white/80 rfp-rounded-full rfp-p-2 rfp-shadow-lg">
              <svg className="rfp-w-6 rfp-h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="rfp-absolute -bottom-8 left-1/2 transform -translate-x-1/2 rfp-bg-gray-900 rfp-text-white rfp-text-xs rfp-px-2 rfp-py-1 rfp-rounded whitespace-nowrap rfp-shadow-lg z-30">
          {element.name}
        </div>
      )}
      
      {/* Selection indicators */}
      {isSelected && (
        <>
          <div className="rfp-absolute -top-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" />
          <div className="rfp-absolute -top-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" />
          <div className="rfp-absolute -bottom-1 -left-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" />
          <div className="rfp-absolute -bottom-1 -right-1 rfp-w-3 rfp-h-3 rfp-bg-blue-500 rfp-rounded-full rfp-border-2 border-white" />
        </>
      )}
    </div>
  );
};
