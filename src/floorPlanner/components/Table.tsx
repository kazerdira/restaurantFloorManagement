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
    'w-full h-full bg-emerald-600 border-2 border-emerald-700 flex items-center justify-center relative shadow-lg';

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
        <div className="flex flex-col items-center justify-center gap-1 text-emerald-50">
          <span className="text-xs font-semibold uppercase tracking-wide">N: {tableLabel}</span>
          <span className="text-xs font-semibold uppercase tracking-wide">S: {seatsCount}</span>
        </div>
      </div>
    </div>
  );
};
