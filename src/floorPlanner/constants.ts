import { Circle, Square } from 'lucide-react';
import type { ChairPosition, TableShapeIconMap, TableSize, TableShape } from './types';

export const hexagonStyle = `
  .hexagon-shape {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`;

export const GRID_SIZE = 20;

export const TABLE_SIZES: Record<TableSize, { width: number; height: number }> = {
  small: { width: 50, height: 50 },
  medium: { width: 90, height: 90 },
  large: { width: 130, height: 130 }
};

export const TABLE_SHAPES: TableShapeIconMap = {
  square: Square,
  circle: Circle,
  rectangle: Square,
  hexagon: Square
};

export const SIZE_LABELS: Record<TableSize, string> = {
  small: 'Small',
  medium: 'Medium',
  large: 'Big'
};

export const CHAIR_POSITIONS: ChairPosition[] = ['top', 'bottom', 'left', 'right'];

export const TABLE_SHAPE_LABELS: Record<TableShape, string> = {
  square: 'Square',
  circle: 'Circle',
  rectangle: 'Rectangle',
  hexagon: 'Hexagon'
};
