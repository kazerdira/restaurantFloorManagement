import React, { useEffect, useRef, useState } from 'react';
import { Armchair, Eye, EyeOff, Minus, Plus, Square } from 'lucide-react';

import type { Chair, ChairPosition, Table, TableSize } from '../types';
import { SIZE_LABELS } from '../constants';

interface ToolbarProps {
  showGrid: boolean;
  selectedTable: Table | null;
  selectedTableChairs: Chair[];
  tableCount: number;
  chairCount: number;
  selectedElementType: string | null;
  onToggleGrid: () => void;
  onAddChair: (position: ChairPosition) => void;
  onRemoveChair: (position: ChairPosition) => void;
  onChangeTableSize: (size: TableSize) => void;
  onTableNameChange: (name: string) => void;
}

const sizeLabels = SIZE_LABELS;
const chairPositions: ChairPosition[] = ['top', 'right', 'bottom', 'left'];
const sizeOptions: TableSize[] = ['small', 'medium', 'large'];

export const Toolbar: React.FC<ToolbarProps> = ({
  showGrid,
  selectedTable,
  selectedTableChairs,
  onToggleGrid,
  onAddChair,
  onRemoveChair,
  onChangeTableSize,
  onTableNameChange,
  tableCount,
  chairCount,
  selectedElementType
}) => {
  const chairMenuRef = useRef<HTMLDivElement | null>(null);
  const sizeMenuRef = useRef<HTMLDivElement | null>(null);
  const [isChairMenuOpen, setIsChairMenuOpen] = useState(false);
  const [isSizeMenuOpen, setIsSizeMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chairMenuRef.current && !chairMenuRef.current.contains(event.target as Node)) {
        setIsChairMenuOpen(false);
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
      setIsChairMenuOpen(false);
      setIsSizeMenuOpen(false);
    }
  }, [selectedTable]);

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Left Section - Controls */}
        <div className="flex items-center gap-3">
          {/* Grid Toggle */}
          <button
            onClick={onToggleGrid}
            className={`px-3 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium ${
              showGrid 
                ? 'bg-blue-500 text-white shadow-md hover:bg-blue-600' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={showGrid ? 'Hide Grid' : 'Show Grid'}
          >
            {showGrid ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            <span>Grid</span>
          </button>

          {selectedTable && (
            <>
              <div className="w-px h-8 bg-gray-300" />

              {/* Chair Management Dropdown */}
              <div ref={chairMenuRef} className="relative">
                <button
                  onClick={() => {
                    setIsChairMenuOpen(!isChairMenuOpen);
                    setIsSizeMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold"
                >
                  <Armchair className="w-4 h-4" />
                  <span>Manage Chairs</span>
                  <span className="ml-1 px-1.5 py-0.5 bg-white/20 rounded text-xs">
                    {selectedTableChairs.length}
                  </span>
                </button>
                
                {isChairMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Armchair className="w-4 h-4" />
                          <span className="font-semibold text-sm">Chair Positions</span>
                        </div>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">
                          Total: {selectedTableChairs.length}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-3 space-y-2">
                      {chairPositions.map((position) => {
                        const chairsOnSide = selectedTableChairs.filter(c => c.position === position).length;
                        return (
                          <div
                            key={position}
                            className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 hover:border-amber-300 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-md flex items-center justify-center text-white text-xs font-bold uppercase">
                                {position[0]}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-800 capitalize">{position}</div>
                                <div className="text-xs text-gray-500">{chairsOnSide} chair{chairsOnSide !== 1 ? 's' : ''}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => onRemoveChair(position)}
                                disabled={chairsOnSide === 0}
                                className="w-7 h-7 rounded-md bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                                title="Remove chair"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => onAddChair(position)}
                                className="w-7 h-7 rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-all flex items-center justify-center"
                                title="Add chair"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Table Size Dropdown */}
              <div ref={sizeMenuRef} className="relative">
                <button
                  onClick={() => {
                    setIsSizeMenuOpen(!isSizeMenuOpen);
                    setIsChairMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold"
                >
                  <Square className="w-4 h-4" />
                  <span>Size: {sizeLabels[selectedTable.size]}</span>
                </button>
                
                {isSizeMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-white">
                      <span className="font-semibold text-sm">Table Size</span>
                    </div>
                    <div className="p-2 space-y-1">
                      {sizeOptions.map((sizeOption) => {
                        const isActive = selectedTable.size === sizeOption;
                        return (
                          <button
                            key={sizeOption}
                            onClick={() => {
                              onChangeTableSize(sizeOption);
                              setIsSizeMenuOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                              isActive
                                ? 'bg-emerald-500 text-white shadow-sm'
                                : 'text-gray-700 hover:bg-emerald-50'
                            }`}
                          >
                            {sizeLabels[sizeOption]}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Table Name Input */}
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Name:</span>
                <input
                  type="text"
                  value={selectedTable.name}
                  onChange={(event) => onTableNameChange(event.target.value)}
                  className="bg-transparent text-sm text-gray-800 font-medium focus:outline-none w-32"
                  placeholder="Table name"
                />
              </div>
            </>
          )}
        </div>

        {/* Right Section - Stats */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg">
            <div className="w-3 h-3 bg-emerald-600 rounded-full" />
            <span className="text-sm font-medium text-emerald-800">Tables: {tableCount}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-lg">
            <div className="w-3 h-3 bg-amber-600 rounded-full" />
            <span className="text-sm font-medium text-amber-800">Chairs: {chairCount}</span>
          </div>
          {selectedElementType && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-800 capitalize">Selected: {selectedElementType}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
