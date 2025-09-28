import type { LucideIcon } from 'lucide-react';

export type TableShape = 'square' | 'circle' | 'rectangle' | 'hexagon';
export type TableSize = 'small' | 'medium' | 'large';
export type ChairPosition = 'top' | 'bottom' | 'left' | 'right';

export interface Chair {
  id: string;
  tableId: string;
  position: ChairPosition;
  x: number;
  y: number;
}

export interface Table {
  id: string;
  name: string;
  shape: TableShape;
  size: TableSize;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

export interface Floor {
  id: string;
  name: string;
  isActive: boolean;
  tables: Table[];
  chairs: Chair[];
}

export interface SelectedElement {
  type: 'table' | 'chair';
  id: string;
}

export type TableShapeIconMap = Record<TableShape, LucideIcon>;
