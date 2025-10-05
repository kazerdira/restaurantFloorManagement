import React from 'react';

import type { Chair, Table } from '../types';
import { getActualTableWidth } from '../utils';

export interface TableComponentProps {
  table: Table;
  chairs: Chair[];
  isSelected: boolean;
  onSelect: () => void;
  onDrag: (event: React.MouseEvent, id: string) => void;
  onDragEnd: () => void;
}

export const TableComponent: React.FC<TableComponentProps> = ({
  table,
  chairs,
  isSelected,
  onSelect,
  onDrag,
  onDragEnd
}) => {
  const containerStyle: React.CSSProperties = {
    left: table.x,
    top: table.y,
    width: getActualTableWidth(table),
    height: table.height,
    zIndex: isSelected ? 100 : 50,
    transform: `rotate(${table.rotation || 0}deg)`
  };

  const baseClasses =
    'w-full h-full flex items-center justify-center relative';

  const tableClasses =
    table.shape === 'circle'
      ? `${baseClasses} rounded-full`
      : table.shape === 'hexagon'
      ? `${baseClasses} hexagon-shape`
      : baseClasses;

  const tableChairs = chairs.filter((chair) => chair.tableId === table.id);
  const seatsCount = tableChairs.length;
  const nameMatch = table.name.match(/\d+/);
  const tableLabel = nameMatch ? nameMatch[0] : table.name;

  return (
    <div
      className={`absolute cursor-move transition-all duration-150 ${
        isSelected ? 'ring-2 ring-emerald-500 ring-offset-2' : ''
      }`}
      style={containerStyle}
      onMouseDown={(event) => {
        event.stopPropagation();
        onSelect();
        onDrag(event, table.id);
      }}
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onMouseUp={onDragEnd}
    >
      <div className={tableClasses}>
        {/* 3D Table Effect */}
        <div 
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: 'linear-gradient(145deg, #059669 0%, #047857 50%, #065f46 100%)',
            boxShadow: `
              0 8px 16px rgba(0, 0, 0, 0.3),
              0 4px 8px rgba(0, 0, 0, 0.2),
              inset 0 2px 4px rgba(255, 255, 255, 0.2),
              inset 0 -2px 4px rgba(0, 0, 0, 0.2)
            `
          }}
        />
        
        {/* Wood grain effect overlay */}
        <div 
          className="absolute inset-0 rounded-[inherit] opacity-20"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0, 0, 0, 0.1) 2px,
                rgba(0, 0, 0, 0.1) 4px
              )
            `
          }}
        />
        
        {/* Bevel edge highlight */}
        <div 
          className="absolute inset-0 rounded-[inherit]"
          style={{
            border: '3px solid transparent',
            borderImage: 'linear-gradient(145deg, rgba(255,255,255,0.4), rgba(0,0,0,0.2)) 1',
            pointerEvents: 'none'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-white drop-shadow-lg">
          <span className="text-xs font-bold uppercase tracking-wide">N: {tableLabel}</span>
          <span className="text-xs font-bold uppercase tracking-wide">S: {seatsCount}</span>
        </div>
      </div>
    </div>
  );
};
