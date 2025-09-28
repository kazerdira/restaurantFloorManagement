import type { ChairPosition, Table, TableShape, TableSize } from './types';
import { TABLE_SIZES } from './constants';

export const generateId = (): string => Math.random().toString(36).slice(2, 11);

export const calculateChairSize = (table: Table): number => {
  const actualWidth = table.shape === 'rectangle' ? table.width * 1.5 : table.width;
  const limitingDimension = Math.min(actualWidth, table.height);
  const scaled = Math.round(limitingDimension * 0.35);
  return Math.max(18, Math.min(48, scaled));
};

export const getActualTableWidth = (table: Table): number =>
  table.shape === 'rectangle' ? table.width * 1.5 : table.width;

export const resolveTableDimensions = (
  shape: TableShape,
  size: TableSize
): { width: number; height: number } => {
  const { width, height } = TABLE_SIZES[size];
  return {
    width: shape === 'rectangle' ? width * 1.5 : width,
    height
  };
};

export const getNextChairPosition = (
  occupied: Set<ChairPosition>
): ChairPosition | null => {
  const candidates: ChairPosition[] = ['top', 'bottom', 'left', 'right'];
  return candidates.find((position) => !occupied.has(position)) ?? null;
};
