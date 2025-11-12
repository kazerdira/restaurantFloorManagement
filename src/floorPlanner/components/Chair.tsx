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
  // Use custom size if provided, otherwise calculate default and increase by 30%
  const baseChairSize = calculateChairSize(table);
  const chairSize = chair.size ?? Math.round(baseChairSize * 1.3);
  const spacing = Math.max(10, Math.round(chairSize * 0.25));
  const iconSize = Math.min(chairSize - 4, Math.max(20, Math.round(chairSize * 0.65)));
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
        isSelected ? 'ring-4 ring-amber-400 ring-offset-2' : ''
      }`}
      style={{
        left: position.x,
        top: position.y,
        width: chairSize,
        height: chairSize,
        transform: `rotate(${getChairRotation()}deg)`,
        zIndex: isSelected ? 100 : 50,
        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))'
      }}
      onMouseDown={(event) => {
        event.stopPropagation();
        onSelect();
        onDrag(event, chair.id);
      }}
      onMouseUp={onDragEnd}
    >
      <div className="rfp-w-full rfp-h-full bg-gradient-to-br from-amber-500 to-amber-700 rfp-rounded-lg rfp-border-4 border-amber-800 rfp-flex rfp-items-center rfp-justify-center rfp-shadow-xl hover:shadow-2xl hover:scale-105 rfp-transition-all">
        <Armchair size={iconSize} strokeWidth={3.5} className="text-amber-50" />
      </div>
    </div>
  );
};
