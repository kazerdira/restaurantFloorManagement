import type { LucideIcon } from 'lucide-react';

export type TableShape = 'square' | 'circle' | 'rectangle' | 'hexagon';
export type TableSize = 'small' | 'medium' | 'large';
export type ChairPosition = 'top' | 'bottom' | 'left' | 'right';
export type ObjectType = 'bar' | 'kitchen' | 'toilet';

export interface Chair {
  id: string;
  tableId: string;
  position: ChairPosition;
  index: number; // Position index on the side (0, 1, 2, etc.)
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

export interface FloorObject {
  id: string;
  name: string;
  type: ObjectType;
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
  objects: FloorObject[];
}

export interface SelectedElement {
  type: 'table' | 'chair' | 'object';
  id: string;
}

export type TableShapeIconMap = Record<TableShape, LucideIcon>;
export type ObjectIconMap = Record<ObjectType, LucideIcon>;
