import React from 'react';
import { Armchair } from 'lucide-react';

import type { Chair, Table } from '../types';
import { calculateChairSize, getActualTableWidth } from '../utils';

export interface ChairComponentProps {
  chair: Chair;
  table: Table;
  isSelected: boolean;
  onSelect: () => void;
  onDrag: (event: React.MouseEvent, id: string) => void;
  onDragEnd: () => void;
}

export const ChairComponent: React.FC<ChairComponentProps> = ({
  chair,
  table,
  isSelected,
  onSelect,
  onDrag,
  onDragEnd
}) => {
  const chairSize = calculateChairSize(table);
  const spacing = Math.max(8, Math.round(chairSize * 0.3));
  const iconSize = Math.min(chairSize - 2, Math.max(16, Math.round(chairSize * 0.6)));
  const tableWidth = getActualTableWidth(table);
  const tableCenterX = table.x + tableWidth / 2;
  const tableCenterY = table.y + table.height / 2;

  const position = (() => {
    switch (chair.position) {
      case 'top':
        return { x: tableCenterX - chairSize / 2, y: table.y - chairSize - spacing };
      case 'bottom':
        return { x: tableCenterX - chairSize / 2, y: table.y + table.height + spacing };
      case 'left':
        return { x: table.x - chairSize - spacing, y: tableCenterY - chairSize / 2 };
      case 'right':
        return { x: table.x + tableWidth + spacing, y: tableCenterY - chairSize / 2 };
      default:
        return { x: chair.x || 0, y: chair.y || 0 };
    }
  })();

  return (
    <div
      className={`absolute cursor-move transition-all duration-150 ${
        isSelected ? 'ring-2 ring-amber-500 ring-offset-2' : ''
      }`}
      style={{
        left: position.x,
        top: position.y,
        width: chairSize,
        height: chairSize,
        zIndex: isSelected ? 100 : 50
      }}
      onMouseDown={(event) => {
        event.stopPropagation();
        onSelect();
        onDrag(event, chair.id);
      }}
      onMouseUp={onDragEnd}
    >
      <div className="w-full h-full bg-amber-600 rounded-sm border-2 border-amber-700 flex items-center justify-center shadow-md">
        <Armchair size={iconSize} strokeWidth={3} className="text-amber-100" />
      </div>
    </div>
  );
};
