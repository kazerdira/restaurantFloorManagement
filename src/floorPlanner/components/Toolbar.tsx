import React, { useEffect, useRef, useState } from 'react';
import { Armchair, Eye, EyeOff, Minus, Plus, Square, Trash2 } from 'lucide-react';

import type { ChairPosition, Table, TableSize } from '../types';
import { SIZE_LABELS } from '../constants';

interface ToolbarProps {
  zoom: number;
  showGrid: boolean;
  canQuickAddChair: boolean;
  nextAvailableChairLabel: string;
  selectedTable: Table | null;
  occupiedChairPositions: Set<ChairPosition>;
  tableCount: number;
  chairCount: number;
  selectedElementType: string | null;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onToggleGrid: () => void;
  onQuickAddChair: () => void;
  onRemoveChair: (position: ChairPosition) => void;
  onChangeTableSize: (size: TableSize) => void;
  onTableNameChange: (name: string) => void;
}

const sizeLabels = SIZE_LABELS;
const deleteOptions: ChairPosition[] = ['left', 'right', 'bottom', 'top'];
const sizeOptions: TableSize[] = ['small', 'medium', 'large'];

export const Toolbar: React.FC<ToolbarProps> = ({
  zoom,
  showGrid,
  canQuickAddChair,
  nextAvailableChairLabel,
  selectedTable,
  occupiedChairPositions,
  onZoomIn,
  onZoomOut,
  onToggleGrid,
  onQuickAddChair,
  onRemoveChair,
  onChangeTableSize,
  onTableNameChange,
  tableCount,
  chairCount,
  selectedElementType
}) => {
  const deleteMenuRef = useRef<HTMLDivElement | null>(null);
  const sizeMenuRef = useRef<HTMLDivElement | null>(null);
  const [isDeleteMenuOpen, setIsDeleteMenuOpen] = useState(false);
  const [isSizeMenuOpen, setIsSizeMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (deleteMenuRef.current && !deleteMenuRef.current.contains(event.target as Node)) {
        setIsDeleteMenuOpen(false);
      }
      if (sizeMenuRef.current && !sizeMenuRef.current.contains(event.target as Node)) {
        setIsSizeMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!selectedTable) {
      setIsDeleteMenuOpen(false);
      setIsSizeMenuOpen(false);
    }
  }, [selectedTable]);

  return (
    <div className="bg-white border-b border-gray-200 p-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onZoomOut}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="Zoom Out"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-sm text-gray-600 w-16 text-center font-medium">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={onZoomIn}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="Zoom In"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="w-px h-6 bg-gray-200" />

        <button
          onClick={onToggleGrid}
          className={`p-2 rounded-lg transition-colors flex items-center gap-2 ${
            showGrid ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
          }`}
          title={showGrid ? 'Hide Grid' : 'Show Grid'}
        >
          {showGrid ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          <span className="text-sm font-medium">Grid</span>
        </button>

        <button
          onClick={onQuickAddChair}
          disabled={!canQuickAddChair}
          className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
            canQuickAddChair
              ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-sm'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          title={
            canQuickAddChair
              ? `Add chair on ${nextAvailableChairLabel}`
              : 'Select a table with a free side to add a chair'
          }
        >
          <Armchair className="w-3.5 h-3.5" />
          <span>{canQuickAddChair ? `Add Chair (${nextAvailableChairLabel})` : 'Add Chair'}</span>
        </button>

        <div ref={deleteMenuRef} className="relative">
          <button
            onClick={() => {
              if (!selectedTable) return;
              setIsDeleteMenuOpen((prev) => !prev);
              setIsSizeMenuOpen(false);
            }}
            disabled={!selectedTable}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              selectedTable
                ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            title="Remove a chair by side"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Delete Chair</span>
          </button>
          {isDeleteMenuOpen && selectedTable && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex flex-col gap-1 z-50">
              {deleteOptions.map((position) => {
                const hasChair = occupiedChairPositions.has(position);
                return (
                  <button
                    key={position}
                    onClick={() => {
                      if (!hasChair) return;
                      onRemoveChair(position);
                      setIsDeleteMenuOpen(false);
                    }}
                    disabled={!hasChair}
                    className={`flex items-center justify-between gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                      hasChair
                        ? 'text-red-600 hover:bg-red-50'
                        : 'text-gray-400 cursor-not-allowed bg-gray-50'
                    }`}
                  >
                    <span className="capitalize">{position}</span>
                    {hasChair ? <Trash2 className="w-3 h-3" /> : <span className="text-[10px]">Empty</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div ref={sizeMenuRef} className="relative">
          <button
            onClick={() => {
              if (!selectedTable) return;
              setIsSizeMenuOpen((prev) => !prev);
              setIsDeleteMenuOpen(false);
            }}
            disabled={!selectedTable}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              selectedTable
                ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            title="Change table size"
          >
            <Square className="w-3.5 h-3.5" />
            <span>Size: {selectedTable ? sizeLabels[selectedTable.size] : '--'}</span>
          </button>
          {isSizeMenuOpen && selectedTable && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex flex-col gap-1 z-50">
              {sizeOptions.map((sizeOption) => {
                const isActive = selectedTable.size === sizeOption;
                return (
                  <button
                    key={sizeOption}
                    onClick={() => {
                      onChangeTableSize(sizeOption);
                      setIsSizeMenuOpen(false);
                    }}
                    className={`flex items-center justify-between gap-2 px-3 py-1.5 text-[11px] font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-gray-600 hover:bg-emerald-50'
                    }`}
                  >
                    <span>{sizeLabels[sizeOption]}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {selectedTable && (
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-2.5 py-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">Name</span>
            <input
              type="text"
              value={selectedTable.name}
              onChange={(event) => onTableNameChange(event.target.value)}
              className="bg-transparent text-xs text-gray-700 focus:outline-none focus:ring-0"
              placeholder="Table name"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-600 rounded" />
          <span>Tables: {tableCount}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-amber-600 rounded" />
          <span>Chairs: {chairCount}</span>
        </div>
        {selectedElementType && (
          <div className="flex items-center gap-2 text-blue-600 font-medium">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span>Selected: {selectedElementType}</span>
          </div>
        )}
      </div>
    </div>
  );
};
