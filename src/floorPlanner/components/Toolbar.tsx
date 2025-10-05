import React, { useEffect, useRef, useState } from 'react';
import { Armchair, ChevronRight, Eye, EyeOff, Minus, Plus, RotateCcw, Square, Trash2 } from 'lucide-react';

import type { Chair, ChairPosition, Table, TableSize, FloorObject, Wall, FixedElement } from '../types';
import { SIZE_LABELS, OBJECT_ICONS, OBJECT_LABELS, WALL_LABELS, FIXED_ELEMENT_LABELS } from '../constants';

interface ToolbarProps {
  showGrid: boolean;
  selectedTable: Table | null;
  selectedObject: FloorObject | null;
  selectedWall: Wall | null;
  selectedFixedElement: FixedElement | null;
  selectedTableChairs: Chair[];
  tableCount: number;
  chairCount: number;
  objectCount: number;
  wallCount: number;
  fixedElementCount: number;
  selectedElementType: string | null;
  onToggleGrid: () => void;
  onAddChair: (position: ChairPosition) => void;
  onRemoveChair: (position: ChairPosition) => void;
  onChangeTableSize: (size: TableSize) => void;
  onTableNameChange: (name: string) => void;
  onCustomTableSize: (width: number, height: number) => void;
  onObjectNameChange: (name: string) => void;
  onObjectResize: (width: number, height: number) => void;
  onRemoveObject: () => void;
  onRemoveWall: () => void;
  onRemoveFixedElement: () => void;
  onChangeWallThickness?: (thickness: number) => void;
  onConvertWallType?: (type: 'wall' | 'door' | 'window') => void;
  onFixedElementNameChange?: (name: string) => void;
  onFixedElementResize?: (width: number, height: number) => void;
  onChairSizeChange?: (position: ChairPosition, size: number) => void;
  onResetChairSizes?: () => void;
}

const sizeLabels = SIZE_LABELS;
const chairPositions: ChairPosition[] = ['top', 'right', 'bottom', 'left'];
const sizeOptions: TableSize[] = ['small', 'medium', 'large'];

export const Toolbar: React.FC<ToolbarProps> = ({
  showGrid,
  selectedTable,
  selectedObject,
  selectedWall,
  selectedFixedElement,
  selectedTableChairs,
  onToggleGrid,
  onAddChair,
  onRemoveChair,
  onChangeTableSize,
  onTableNameChange,
  onCustomTableSize,
  onObjectNameChange,
  onObjectResize,
  onRemoveObject,
  onRemoveWall,
  onRemoveFixedElement,
  onChangeWallThickness,
  onConvertWallType,
  onFixedElementNameChange,
  onFixedElementResize,
  onChairSizeChange,
  onResetChairSizes,
  tableCount,
  chairCount,
  objectCount,
  wallCount,
  fixedElementCount,
  selectedElementType
}) => {
  const chairMenuRef = useRef<HTMLDivElement | null>(null);
  const sizeMenuRef = useRef<HTMLDivElement | null>(null);
  const objectSizeMenuRef = useRef<HTMLDivElement | null>(null);
  const fixedElementSizeMenuRef = useRef<HTMLDivElement | null>(null);
  const [isChairMenuOpen, setIsChairMenuOpen] = useState(false);
  const [isSizeMenuOpen, setIsSizeMenuOpen] = useState(false);
  const [isObjectSizeMenuOpen, setIsObjectSizeMenuOpen] = useState(false);
  const [isFixedElementSizeMenuOpen, setIsFixedElementSizeMenuOpen] = useState(false);
  const [showProSlider, setShowProSlider] = useState(false);
  const [customWidth, setCustomWidth] = useState(90);
  const [customHeight, setCustomHeight] = useState(90);
  const [objectWidth, setObjectWidth] = useState(120);
  const [objectHeight, setObjectHeight] = useState(80);
  const [fixedElementWidth, setFixedElementWidth] = useState(60);
  const [fixedElementHeight, setFixedElementHeight] = useState(60);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chairMenuRef.current && !chairMenuRef.current.contains(event.target as Node)) {
        setIsChairMenuOpen(false);
      }
      if (sizeMenuRef.current && !sizeMenuRef.current.contains(event.target as Node)) {
        setIsSizeMenuOpen(false);
      }
      if (objectSizeMenuRef.current && !objectSizeMenuRef.current.contains(event.target as Node)) {
        setIsObjectSizeMenuOpen(false);
      }
      if (fixedElementSizeMenuRef.current && !fixedElementSizeMenuRef.current.contains(event.target as Node)) {
        setIsFixedElementSizeMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!selectedTable) {
      setIsChairMenuOpen(false);
      setIsSizeMenuOpen(false);
      setShowProSlider(false);
    } else {
      // Update custom sliders when table changes
      setCustomWidth(selectedTable.width);
      setCustomHeight(selectedTable.height);
    }
    
    if (!selectedObject) {
      setIsObjectSizeMenuOpen(false);
    } else {
      // Update object sliders when object changes
      setObjectWidth(selectedObject.width);
      setObjectHeight(selectedObject.height);
    }
    
    if (!selectedFixedElement) {
      setIsFixedElementSizeMenuOpen(false);
    } else {
      // Update fixed element sliders when element changes
      setFixedElementWidth(selectedFixedElement.width);
      setFixedElementHeight(selectedFixedElement.height);
    }
  }, [selectedTable, selectedObject, selectedFixedElement]);

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm min-h-[72px]">
      <div className="px-4 py-3 flex items-center justify-between min-h-[72px]">
        {/* Left Section - Controls */}
        <div className="flex items-center gap-3 flex-wrap">
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
                        const chairSample = selectedTableChairs.find(c => c.position === position);
                        const currentSize = chairSample?.size || 40; // Default fallback
                        
                        return (
                          <div
                            key={position}
                            className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 hover:border-amber-300 transition-all space-y-2"
                          >
                            <div className="flex items-center justify-between">
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
                            
                            {/* Size Slider */}
                            {chairsOnSide > 0 && (
                              <div className="pt-2 border-t border-gray-200">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs font-medium text-gray-600">Chair Size</span>
                                  <span className="text-xs font-bold text-amber-600">{currentSize}px</span>
                                </div>
                                <input
                                  type="range"
                                  min="20"
                                  max="60"
                                  value={currentSize}
                                  onChange={(e) => onChairSizeChange?.(position, parseInt(e.target.value))}
                                  className="w-full h-2 bg-gradient-to-r from-amber-200 to-amber-400 rounded-full appearance-none cursor-pointer slider-thumb"
                                  style={{
                                    background: `linear-gradient(to right, rgb(251, 191, 36) 0%, rgb(251, 191, 36) ${((currentSize - 20) / 40) * 100}%, rgb(253, 230, 138) ${((currentSize - 20) / 40) * 100}%, rgb(253, 230, 138) 100%)`
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                      
                      {/* Reset Button */}
                      <button
                        onClick={() => onResetChairSizes?.()}
                        className="w-full mt-3 px-3 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Reset All Sizes</span>
                      </button>
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
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-white">
                      <span className="font-semibold text-sm">Table Size</span>
                    </div>
                    
                    {/* Size Buttons */}
                    <div className="p-3 space-y-2">
                      <div className="flex gap-2">
                        {sizeOptions.map((sizeOption) => {
                          const isActive = selectedTable.size === sizeOption;
                          return (
                            <button
                              key={sizeOption}
                              onClick={() => {
                                onChangeTableSize(sizeOption);
                                setShowProSlider(false);
                              }}
                              className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                                isActive && !showProSlider
                                  ? 'bg-emerald-500 text-white shadow-sm'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {sizeLabels[sizeOption]}
                            </button>
                          );
                        })}
                      </div>
                      
                      {/* Pro Mode Toggle */}
                      <button
                        onClick={() => setShowProSlider(!showProSlider)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${
                          showProSlider
                            ? 'bg-purple-500 text-white shadow-sm'
                            : 'bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 hover:from-purple-200 hover:to-purple-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">Pro Mode</span>
                          <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">Custom</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${showProSlider ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {/* Pro Sliders - Smooth Reveal */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        showProSlider ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-2 space-y-3 border-t border-gray-200">
                          {/* Width Slider */}
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                Width
                              </label>
                              <span className="text-xs font-mono bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                                {customWidth}px
                              </span>
                            </div>
                            <input
                              type="range"
                              min="40"
                              max="200"
                              step="5"
                              value={customWidth}
                              onChange={(e) => {
                                const newWidth = parseInt(e.target.value);
                                setCustomWidth(newWidth);
                                onCustomTableSize(newWidth, customHeight);
                              }}
                              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                              style={{
                                background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${((customWidth - 40) / 160) * 100}%, rgb(233, 213, 255) ${((customWidth - 40) / 160) * 100}%, rgb(233, 213, 255) 100%)`
                              }}
                            />
                          </div>
                          
                          {/* Height Slider */}
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                Height
                              </label>
                              <span className="text-xs font-mono bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                                {customHeight}px
                              </span>
                            </div>
                            <input
                              type="range"
                              min="40"
                              max="200"
                              step="5"
                              value={customHeight}
                              onChange={(e) => {
                                const newHeight = parseInt(e.target.value);
                                setCustomHeight(newHeight);
                                onCustomTableSize(customWidth, newHeight);
                              }}
                              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                              style={{
                                background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${((customHeight - 40) / 160) * 100}%, rgb(233, 213, 255) ${((customHeight - 40) / 160) * 100}%, rgb(233, 213, 255) 100%)`
                              }}
                            />
                          </div>
                          
                          {/* Info Text */}
                          <p className="text-xs text-gray-500 italic pt-1">
                            Drag sliders for precise sizing
                          </p>
                        </div>
                      </div>
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
          
          {/* Object Controls */}
          {selectedObject && (
            <>
              <div className="w-px h-8 bg-gray-300" />

              {/* Object Size Control */}
              <div ref={objectSizeMenuRef} className="relative">
                <button
                  onClick={() => setIsObjectSizeMenuOpen(!isObjectSizeMenuOpen)}
                  className={`px-3 py-2 rounded-lg ${
                    selectedObject.type === 'bar' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                    selectedObject.type === 'kitchen' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                    'bg-gradient-to-r from-cyan-500 to-cyan-600'
                  } text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`}
                >
                  {(() => {
                    const Icon = OBJECT_ICONS[selectedObject.type];
                    return <Icon className="w-4 h-4" />;
                  })()}
                  <span>Resize {OBJECT_LABELS[selectedObject.type]}</span>
                </button>
                
                {isObjectSizeMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                    <div className={`${
                      selectedObject.type === 'bar' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      selectedObject.type === 'kitchen' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                      'bg-gradient-to-r from-cyan-500 to-cyan-600'
                    } px-4 py-2 text-white`}>
                      <span className="font-semibold text-sm">Custom Size</span>
                    </div>
                    
                    <div className="p-3 space-y-3">
                      {/* Width Slider */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                            Width
                          </label>
                          <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                            selectedObject.type === 'bar' ? 'bg-purple-100 text-purple-700' :
                            selectedObject.type === 'kitchen' ? 'bg-orange-100 text-orange-700' :
                            'bg-cyan-100 text-cyan-700'
                          }`}>
                            {objectWidth}px
                          </span>
                        </div>
                        <input
                          type="range"
                          min="60"
                          max="1000"
                          step="10"
                          value={objectWidth}
                          onChange={(e) => {
                            const newWidth = parseInt(e.target.value);
                            setObjectWidth(newWidth);
                            onObjectResize(newWidth, objectHeight);
                          }}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                          style={{
                            background: `linear-gradient(to right, ${
                              selectedObject.type === 'bar' ? 'rgb(168, 85, 247)' :
                              selectedObject.type === 'kitchen' ? 'rgb(249, 115, 22)' :
                              'rgb(6, 182, 212)'
                            } 0%, ${
                              selectedObject.type === 'bar' ? 'rgb(168, 85, 247)' :
                              selectedObject.type === 'kitchen' ? 'rgb(249, 115, 22)' :
                              'rgb(6, 182, 212)'
                            } ${((objectWidth - 60) / 940) * 100}%, rgb(229, 231, 235) ${((objectWidth - 60) / 940) * 100}%, rgb(229, 231, 235) 100%)`
                          }}
                        />
                      </div>
                      
                      {/* Height Slider */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                            Height
                          </label>
                          <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                            selectedObject.type === 'bar' ? 'bg-purple-100 text-purple-700' :
                            selectedObject.type === 'kitchen' ? 'bg-orange-100 text-orange-700' :
                            'bg-cyan-100 text-cyan-700'
                          }`}>
                            {objectHeight}px
                          </span>
                        </div>
                        <input
                          type="range"
                          min="60"
                          max="1000"
                          step="10"
                          value={objectHeight}
                          onChange={(e) => {
                            const newHeight = parseInt(e.target.value);
                            setObjectHeight(newHeight);
                            onObjectResize(objectWidth, newHeight);
                          }}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                          style={{
                            background: `linear-gradient(to right, ${
                              selectedObject.type === 'bar' ? 'rgb(168, 85, 247)' :
                              selectedObject.type === 'kitchen' ? 'rgb(249, 115, 22)' :
                              'rgb(6, 182, 212)'
                            } 0%, ${
                              selectedObject.type === 'bar' ? 'rgb(168, 85, 247)' :
                              selectedObject.type === 'kitchen' ? 'rgb(249, 115, 22)' :
                              'rgb(6, 182, 212)'
                            } ${((objectHeight - 60) / 940) * 100}%, rgb(229, 231, 235) ${((objectHeight - 60) / 940) * 100}%, rgb(229, 231, 235) 100%)`
                          }}
                        />
                      </div>
                      
                      {/* Info Text */}
                      <p className="text-xs text-gray-500 italic pt-1">
                        Drag sliders to resize the object
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Delete Object Button */}
              <button
                onClick={onRemoveObject}
                className="px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold"
                title="Delete Object"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>

              {/* Object Name Input */}
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Name:</span>
                <input
                  type="text"
                  value={selectedObject.name}
                  onChange={(event) => onObjectNameChange(event.target.value)}
                  className="bg-transparent text-sm text-gray-800 font-medium focus:outline-none w-32"
                  placeholder="Object name"
                />
              </div>
            </>
          )}

          {/* Wall Controls */}
          {selectedWall && (
            <>
              <div className="w-px h-8 bg-gray-300" />

              {/* Wall Type Converter */}
              {onConvertWallType && (
                <div className="flex items-center gap-1 bg-gray-50 border border-gray-300 rounded-lg p-1">
                  <button
                    onClick={() => onConvertWallType('wall')}
                    className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                      selectedWall.type === 'wall'
                        ? 'bg-gray-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    title="Convert to Wall"
                  >
                    Wall
                  </button>
                  <button
                    onClick={() => onConvertWallType('door')}
                    className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                      selectedWall.type === 'door'
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    title="Convert to Door"
                  >
                    Door
                  </button>
                  <button
                    onClick={() => onConvertWallType('window')}
                    className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                      selectedWall.type === 'window'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    title="Convert to Window"
                  >
                    Window
                  </button>
                </div>
              )}

              {/* Wall Thickness Selector */}
              {onChangeWallThickness && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-600">Thickness:</span>
                  <select
                    value={selectedWall.thickness}
                    onChange={(e) => onChangeWallThickness(Number(e.target.value))}
                    className="px-2 py-1 text-sm border border-gray-300 rounded bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={4}>Thin (4px)</option>
                    <option value={8}>Normal (8px)</option>
                    <option value={12}>Thick (12px)</option>
                    <option value={16}>Very Thick (16px)</option>
                  </select>
                </div>
              )}

              {/* Wall Info */}
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {WALL_LABELS[selectedWall.type]}
                </span>
                <span className="text-sm text-gray-600">
                  {Math.round(Math.sqrt(
                    Math.pow(selectedWall.endX - selectedWall.startX, 2) + 
                    Math.pow(selectedWall.endY - selectedWall.startY, 2)
                  ))}px
                </span>
              </div>

              {/* Delete Wall Button */}
              <button
                onClick={onRemoveWall}
                className="px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold"
                title="Delete Wall"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </>
          )}

          {/* Fixed Element Controls */}
          {selectedFixedElement && (
            <>
              <div className="w-px h-8 bg-gray-300" />

              {/* Fixed Element Info */}
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {FIXED_ELEMENT_LABELS[selectedFixedElement.type]}
                </span>
              </div>

              {/* Fixed Element Resize Controls */}
              {onFixedElementResize && (
                <div ref={fixedElementSizeMenuRef} className="relative">
                  <button
                    onClick={() => setIsFixedElementSizeMenuOpen(!isFixedElementSizeMenuOpen)}
                    className="px-3 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold"
                  >
                    <Square className="w-4 h-4" />
                    <span>Resize</span>
                  </button>
                  
                  {isFixedElementSizeMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50 min-w-[320px]">
                      <div className="space-y-4">
                        {/* Width Slider */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-gray-700">Width</label>
                            <span className="text-sm font-bold text-blue-600">{fixedElementWidth}px</span>
                          </div>
                          <input
                            type="range"
                            min="30"
                            max="200"
                            value={fixedElementWidth}
                            onChange={(e) => {
                              const newWidth = parseInt(e.target.value);
                              setFixedElementWidth(newWidth);
                              onFixedElementResize(newWidth, fixedElementHeight);
                            }}
                            className="w-full h-2 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>30px</span>
                            <span>200px</span>
                          </div>
                        </div>

                        {/* Height Slider */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-gray-700">Height</label>
                            <span className="text-sm font-bold text-blue-600">{fixedElementHeight}px</span>
                          </div>
                          <input
                            type="range"
                            min="30"
                            max="200"
                            value={fixedElementHeight}
                            onChange={(e) => {
                              const newHeight = parseInt(e.target.value);
                              setFixedElementHeight(newHeight);
                              onFixedElementResize(fixedElementWidth, newHeight);
                            }}
                            className="w-full h-2 bg-gradient-to-r from-green-200 to-green-500 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>30px</span>
                            <span>200px</span>
                          </div>
                        </div>

                        {/* Current Size Display */}
                        <div className="pt-3 border-t border-gray-200">
                          <div className="text-center">
                            <span className="text-xs text-gray-600">Current Size: </span>
                            <span className="text-sm font-bold text-gray-800">{fixedElementWidth} × {fixedElementHeight}px</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Delete Fixed Element Button */}
              <button
                onClick={onRemoveFixedElement}
                className="px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold"
                title="Delete Element"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>

        {/* Right Section - Stats */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded text-xs">
            <div className="w-2 h-2 bg-emerald-600 rounded-full" />
            <span className="font-medium text-emerald-800">Tables: {tableCount}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-amber-50 rounded text-xs">
            <div className="w-2 h-2 bg-amber-600 rounded-full" />
            <span className="font-medium text-amber-800">Chairs: {chairCount}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-purple-50 rounded text-xs">
            <div className="w-2 h-2 bg-purple-600 rounded-full" />
            <span className="font-medium text-purple-800">Objects: {objectCount}</span>
          </div>
          {selectedElementType && (
            <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 rounded text-xs">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
              <span className="font-medium text-blue-800 capitalize">Selected: {selectedElementType}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

