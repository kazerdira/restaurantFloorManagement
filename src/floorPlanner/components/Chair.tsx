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
  totalChairsOnSide: number; // Total chairs on this side
}

export const ChairComponent: React.FC<ChairComponentProps> = ({
  chair,
  table,
  isSelected,
  onSelect,
  onDrag,
  onDragEnd,
  totalChairsOnSide
}) => {
  const chairSize = calculateChairSize(table);
  const spacing = Math.max(8, Math.round(chairSize * 0.3));
  const iconSize = Math.min(chairSize - 2, Math.max(16, Math.round(chairSize * 0.6)));
  const tableWidth = getActualTableWidth(table);
  const tableRotation = (table.rotation || 0) * (Math.PI / 180); // Convert to radians

  const position = (() => {
    // Determine side length based on chair position
    const sideLength = chair.position === 'top' || chair.position === 'bottom' 
      ? tableWidth 
      : table.height;
    
    // Calculate spacing between chairs more accurately
    const availableSpace = sideLength - (chairSize * totalChairsOnSide);
    const gapBetweenChairs = totalChairsOnSide > 1 
      ? availableSpace / (totalChairsOnSide + 1) 
      : availableSpace / 2;
    
    // Calculate the chair's offset along its side
    const offsetAlongSide = gapBetweenChairs + (chair.index * (chairSize + gapBetweenChairs)) + chairSize / 2;
    
    // Calculate position relative to table center (before rotation)
    let relativeX = 0;
    let relativeY = 0;
    
    switch (chair.position) {
      case 'top':
        relativeX = offsetAlongSide - tableWidth / 2;
        relativeY = -(table.height / 2 + spacing + chairSize / 2);
        break;
      case 'bottom':
        relativeX = offsetAlongSide - tableWidth / 2;
        relativeY = table.height / 2 + spacing + chairSize / 2;
        break;
      case 'left':
        relativeX = -(tableWidth / 2 + spacing + chairSize / 2);
        relativeY = offsetAlongSide - table.height / 2;
        break;
      case 'right':
        relativeX = tableWidth / 2 + spacing + chairSize / 2;
        relativeY = offsetAlongSide - table.height / 2;
        break;
    }
    
    // Apply rotation transformation around table center
    const rotatedX = relativeX * Math.cos(tableRotation) - relativeY * Math.sin(tableRotation);
    const rotatedY = relativeX * Math.sin(tableRotation) + relativeY * Math.cos(tableRotation);
    
    // Convert to absolute position
    const tableCenterX = table.x + tableWidth / 2;
    const tableCenterY = table.y + table.height / 2;
    
    return {
      x: tableCenterX + rotatedX - chairSize / 2,
      y: tableCenterY + rotatedY - chairSize / 2
    };
  })();

  // Calculate chair rotation based on position and table rotation
  const getChairRotation = () => {
    let baseRotation = 0;
    switch (chair.position) {
      case 'top':
        baseRotation = 0;
        break;
      case 'right':
        baseRotation = 90;
        break;
      case 'bottom':
        baseRotation = 180;
        break;
      case 'left':
        baseRotation = 270;
        break;
    }
    return baseRotation + (table.rotation || 0);
  };

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
        transform: `rotate(${getChairRotation()}deg)`,
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
