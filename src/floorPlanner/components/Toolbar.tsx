import React, { useEffect, useRef, useState } from 'react';
import { Armchair, Box, ChevronRight, Eye, EyeOff, Minus, Plus, RotateCcw, Square, Trash2 } from 'lucide-react';

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
  on3DPreview?: () => void;
  onObjectRotate?: (rotation: number) => void;
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
  on3DPreview,
  onObjectRotate,
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
    <div className="rfp-bg-white rfp-border-b rfp-border-gray-200 rfp-shadow-sm min-h-[72px]">
      <div className="rfp-px-4 rfp-py-3 rfp-flex rfp-items-center rfp-justify-between min-h-[72px]">
        {/* Left Section - Controls */}
        <div className="rfp-flex rfp-items-center rfp-gap-3 rfp-flex-wrap">
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
            {showGrid ? <Eye className="rfp-w-4 rfp-h-4" /> : <EyeOff className="rfp-w-4 rfp-h-4" />}
            <span>Grid</span>
          </button>

          {selectedTable && (
            <>
              <div className="w-px rfp-h-8 rfp-bg-gray-300" />

              {/* Chair Management Dropdown */}
              <div ref={chairMenuRef} className="rfp-relative">
                <button
                  onClick={() => {
                    setIsChairMenuOpen(!isChairMenuOpen);
                    setIsSizeMenuOpen(false);
                  }}
                  className="rfp-px-3 rfp-py-2 rfp-rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold"
                >
                  <Armchair className="rfp-w-4 rfp-h-4" />
                  <span>Manage Chairs</span>
                  <span className="rfp-ml-1 px-1.5 py-0.5 bg-white/20 rfp-rounded rfp-text-xs">
                    {selectedTableChairs.length}
                  </span>
                </button>
                
                {isChairMenuOpen && (
                  <div className="rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-w-72 rfp-bg-white rfp-border rfp-border-gray-200 rfp-rounded-xl shadow-2xl z-50 rfp-overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 rfp-px-4 rfp-py-3 rfp-text-white">
                      <div className="rfp-flex rfp-items-center rfp-justify-between">
                        <div className="rfp-flex rfp-items-center rfp-gap-2">
                          <Armchair className="rfp-w-4 rfp-h-4" />
                          <span className="rfp-font-semibold rfp-text-sm">Chair Positions</span>
                        </div>
                        <span className="rfp-text-xs bg-white/20 rfp-px-2 rfp-py-1 rfp-rounded">
                          Total: {selectedTableChairs.length}
                        </span>
                      </div>
                    </div>
                    
                    <div className="rfp-p-3 rfp-space-y-2">
                      {chairPositions.map((position) => {
                        const chairsOnSide = selectedTableChairs.filter(c => c.position === position).length;
                        const chairSample = selectedTableChairs.find(c => c.position === position);
                        const currentSize = chairSample?.size || 40; // Default fallback
                        
                        return (
                          <div
                            key={position}
                            className="rfp-bg-gray-50 rfp-rounded-lg rfp-px-3 rfp-py-2 rfp-border rfp-border-gray-200 hover:border-amber-300 rfp-transition-all rfp-space-y-2"
                          >
                            <div className="rfp-flex rfp-items-center rfp-justify-between">
                              <div className="rfp-flex rfp-items-center rfp-gap-3">
                                <div className="rfp-w-8 rfp-h-8 bg-gradient-to-br from-gray-600 to-gray-700 rfp-rounded-md rfp-flex rfp-items-center rfp-justify-center rfp-text-white rfp-text-xs rfp-font-bold rfp-uppercase">
                                  {position[0]}
                                </div>
                                <div>
                                  <div className="rfp-text-sm rfp-font-medium rfp-text-gray-800 rfp-capitalize">{position}</div>
                                  <div className="rfp-text-xs rfp-text-gray-500">{chairsOnSide} chair{chairsOnSide !== 1 ? 's' : ''}</div>
                                </div>
                              </div>
                              <div className="rfp-flex rfp-items-center rfp-gap-1">
                                <button
                                  onClick={() => onRemoveChair(position)}
                                  disabled={chairsOnSide === 0}
                                  className="rfp-w-7 rfp-h-7 rfp-rounded-md rfp-bg-red-50 rfp-text-red-600 hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed rfp-transition-all rfp-flex rfp-items-center rfp-justify-center"
                                  title="Remove chair"
                                >
                                  <Minus className="rfp-w-4 rfp-h-4" />
                                </button>
                                <button
                                  onClick={() => onAddChair(position)}
                                  className="rfp-w-7 rfp-h-7 rfp-rounded-md rfp-bg-green-50 rfp-text-green-600 hover:bg-green-100 rfp-transition-all rfp-flex rfp-items-center rfp-justify-center"
                                  title="Add chair"
                                >
                                  <Plus className="rfp-w-4 rfp-h-4" />
                                </button>
                              </div>
                            </div>
                            
                            {/* Size Slider */}
                            {chairsOnSide > 0 && (
                              <div className="rfp-pt-2 rfp-border-t rfp-border-gray-200">
                                <div className="rfp-flex rfp-items-center rfp-justify-between rfp-mb-1">
                                  <span className="rfp-text-xs rfp-font-medium rfp-text-gray-600">Chair Size</span>
                                  <span className="rfp-text-xs rfp-font-bold text-amber-600">{currentSize}px</span>
                                </div>
                                <input
                                  type="range"
                                  min="20"
                                  max="60"
                                  value={currentSize}
                                  onChange={(e) => onChairSizeChange?.(position, parseInt(e.target.value))}
                                  className="rfp-w-full rfp-h-2 bg-gradient-to-r from-amber-200 to-amber-400 rfp-rounded-full appearance-none rfp-cursor-pointer slider-thumb"
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
                        className="rfp-w-full rfp-mt-3 rfp-px-3 rfp-py-2 bg-gradient-to-r from-gray-500 to-gray-600 rfp-text-white rfp-rounded-lg hover:from-gray-600 hover:to-gray-700 rfp-transition-all rfp-flex rfp-items-center rfp-justify-center rfp-gap-2 rfp-text-sm rfp-font-medium"
                      >
                        <RotateCcw className="rfp-w-4 rfp-h-4" />
                        <span>Reset All Sizes</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Table Size Dropdown */}
              <div ref={sizeMenuRef} className="rfp-relative">
                <button
                  onClick={() => {
                    setIsSizeMenuOpen(!isSizeMenuOpen);
                    setIsChairMenuOpen(false);
                  }}
                  className="rfp-px-3 rfp-py-2 rfp-rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold"
                >
                  <Square className="rfp-w-4 rfp-h-4" />
                  <span>Size: {sizeLabels[selectedTable.size]}</span>
                </button>
                
                {isSizeMenuOpen && (
                  <div className="rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-w-64 rfp-bg-white rfp-border rfp-border-gray-200 rfp-rounded-xl shadow-2xl z-50 rfp-overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rfp-px-4 rfp-py-2 rfp-text-white">
                      <span className="rfp-font-semibold rfp-text-sm">Table Size</span>
                    </div>
                    
                    {/* Size Buttons */}
                    <div className="rfp-p-3 rfp-space-y-2">
                      <div className="rfp-flex rfp-gap-2">
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
                        <div className="rfp-flex rfp-items-center rfp-gap-2">
                          <span className="rfp-text-sm rfp-font-semibold">Pro Mode</span>
                          <span className="rfp-text-xs bg-white/20 px-1.5 py-0.5 rfp-rounded">Custom</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${showProSlider ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {/* Pro Sliders - Smooth Reveal */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        showProSlider ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="rfp-pt-2 rfp-space-y-3 rfp-border-t rfp-border-gray-200">
                          {/* Width Slider */}
                          <div className="rfp-space-y-1">
                            <div className="rfp-flex rfp-items-center rfp-justify-between">
                              <label className="rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide">
                                Width
                              </label>
                              <span className="rfp-text-xs font-mono rfp-bg-purple-100 rfp-text-purple-700 rfp-px-2 py-0.5 rfp-rounded">
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
                              className="rfp-w-full rfp-h-2 rfp-bg-purple-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb"
                              style={{
                                background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${((customWidth - 40) / 160) * 100}%, rgb(233, 213, 255) ${((customWidth - 40) / 160) * 100}%, rgb(233, 213, 255) 100%)`
                              }}
                            />
                          </div>
                          
                          {/* Height Slider */}
                          <div className="rfp-space-y-1">
                            <div className="rfp-flex rfp-items-center rfp-justify-between">
                              <label className="rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide">
                                Height
                              </label>
                              <span className="rfp-text-xs font-mono rfp-bg-purple-100 rfp-text-purple-700 rfp-px-2 py-0.5 rfp-rounded">
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
                              className="rfp-w-full rfp-h-2 rfp-bg-purple-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb"
                              style={{
                                background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${((customHeight - 40) / 160) * 100}%, rgb(233, 213, 255) ${((customHeight - 40) / 160) * 100}%, rgb(233, 213, 255) 100%)`
                              }}
                            />
                          </div>
                          
                          {/* Info Text */}
                          <p className="rfp-text-xs rfp-text-gray-500 italic rfp-pt-1">
                            Drag sliders for precise sizing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Table Name Input */}
              <div className="rfp-flex rfp-items-center rfp-gap-2 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-px-3 rfp-py-2">
                <span className="rfp-text-xs rfp-font-semibold rfp-uppercase rfp-tracking-wide rfp-text-gray-500">Name:</span>
                <input
                  type="text"
                  value={selectedTable.name}
                  onChange={(event) => onTableNameChange(event.target.value)}
                  className="rfp-bg-transparent rfp-text-sm rfp-text-gray-800 rfp-font-medium focus:outline-none rfp-w-32"
                  placeholder="Table name"
                />
              </div>
            </>
          )}
          
          {/* Object Controls */}
          {selectedObject && (
            <>
              <div className="w-px rfp-h-8 rfp-bg-gray-300" />

              {/* Object Size Control */}
              <div ref={objectSizeMenuRef} className="rfp-relative">
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
                    return <Icon className="rfp-w-4 rfp-h-4" />;
                  })()}
                  <span>Resize {OBJECT_LABELS[selectedObject.type]}</span>
                </button>
                
                {isObjectSizeMenuOpen && (
                  <div className="rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-w-64 rfp-bg-white rfp-border rfp-border-gray-200 rfp-rounded-xl shadow-2xl z-50 rfp-overflow-hidden">
                    <div className={`${
                      selectedObject.type === 'bar' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      selectedObject.type === 'kitchen' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                      'bg-gradient-to-r from-cyan-500 to-cyan-600'
                    } px-4 py-2 text-white`}>
                      <span className="rfp-font-semibold rfp-text-sm">Custom Size</span>
                    </div>
                    
                    <div className="rfp-p-3 rfp-space-y-3">
                      {/* Width Slider */}
                      <div className="rfp-space-y-1">
                        <div className="rfp-flex rfp-items-center rfp-justify-between">
                          <label className="rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide">
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
                          className="rfp-w-full rfp-h-2 rfp-bg-gray-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb"
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
                      <div className="rfp-space-y-1">
                        <div className="rfp-flex rfp-items-center rfp-justify-between">
                          <label className="rfp-text-xs rfp-font-semibold rfp-text-gray-600 rfp-uppercase rfp-tracking-wide">
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
                          className="rfp-w-full rfp-h-2 rfp-bg-gray-200 rfp-rounded-lg appearance-none rfp-cursor-pointer slider-thumb"
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
                      <p className="rfp-text-xs rfp-text-gray-500 italic rfp-pt-1">
                        Drag sliders to resize the object
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Rotate Object Button */}
              <button
                onClick={() => {
                  const newRotation = ((selectedObject.rotation || 0) + 90) % 360;
                  onObjectRotate?.(newRotation);
                }}
                className={`px-3 py-2 rounded-lg ${
                  selectedObject.type === 'bar' ? 'bg-gradient-to-r from-purple-600 to-purple-700' :
                  selectedObject.type === 'kitchen' ? 'bg-gradient-to-r from-orange-600 to-orange-700' :
                  'bg-gradient-to-r from-cyan-600 to-cyan-700'
                } text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`}
                title="Rotate 90°"
              >
                <RotateCcw className="rfp-w-4 rfp-h-4" />
                <span>Rotate</span>
              </button>

              {/* Delete Object Button */}
              <button
                onClick={onRemoveObject}
                className="rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-red-500 hover:bg-red-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold"
                title="Delete Object"
              >
                <Trash2 className="rfp-w-4 rfp-h-4" />
                <span>Delete</span>
              </button>

              {/* Object Name Input */}
              <div className="rfp-flex rfp-items-center rfp-gap-2 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-px-3 rfp-py-2">
                <span className="rfp-text-xs rfp-font-semibold rfp-uppercase rfp-tracking-wide rfp-text-gray-500">Name:</span>
                <input
                  type="text"
                  value={selectedObject.name}
                  onChange={(event) => onObjectNameChange(event.target.value)}
                  className="rfp-bg-transparent rfp-text-sm rfp-text-gray-800 rfp-font-medium focus:outline-none rfp-w-32"
                  placeholder="Object name"
                />
              </div>
            </>
          )}

          {/* Wall Controls */}
          {selectedWall && (
            <>
              <div className="w-px rfp-h-8 rfp-bg-gray-300" />

              {/* Wall Type Converter */}
              {onConvertWallType && (
                <div className="rfp-flex rfp-items-center rfp-gap-1 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-p-1">
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
                <div className="rfp-flex rfp-items-center rfp-gap-2">
                  <span className="rfp-text-xs rfp-font-semibold rfp-text-gray-600">Thickness:</span>
                  <select
                    value={selectedWall.thickness}
                    onChange={(e) => onChangeWallThickness(Number(e.target.value))}
                    className="rfp-px-2 rfp-py-1 rfp-text-sm rfp-border rfp-border-gray-300 rfp-rounded rfp-bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={4}>Thin (4px)</option>
                    <option value={8}>Normal (8px)</option>
                    <option value={12}>Thick (12px)</option>
                    <option value={16}>Very Thick (16px)</option>
                  </select>
                </div>
              )}

              {/* Wall Info */}
              <div className="rfp-flex rfp-items-center rfp-gap-2 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-px-3 rfp-py-2">
                <span className="rfp-text-xs rfp-font-semibold rfp-uppercase rfp-tracking-wide rfp-text-gray-500">
                  {WALL_LABELS[selectedWall.type]}
                </span>
                <span className="rfp-text-sm rfp-text-gray-600">
                  {Math.round(Math.sqrt(
                    Math.pow(selectedWall.endX - selectedWall.startX, 2) + 
                    Math.pow(selectedWall.endY - selectedWall.startY, 2)
                  ))}px
                </span>
              </div>

              {/* Delete Wall Button */}
              <button
                onClick={onRemoveWall}
                className="rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-red-500 hover:bg-red-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold"
                title="Delete Wall"
              >
                <Trash2 className="rfp-w-4 rfp-h-4" />
                <span>Delete</span>
              </button>
            </>
          )}

          {/* Fixed Element Controls */}
          {selectedFixedElement && (
            <>
              <div className="w-px rfp-h-8 rfp-bg-gray-300" />

              {/* Fixed Element Info */}
              <div className="rfp-flex rfp-items-center rfp-gap-2 rfp-bg-gray-50 rfp-border rfp-border-gray-300 rfp-rounded-lg rfp-px-3 rfp-py-2">
                <span className="rfp-text-xs rfp-font-semibold rfp-uppercase rfp-tracking-wide rfp-text-gray-500">
                  {FIXED_ELEMENT_LABELS[selectedFixedElement.type]}
                </span>
              </div>

              {/* Fixed Element Resize Controls */}
              {onFixedElementResize && (
                <div ref={fixedElementSizeMenuRef} className="rfp-relative">
                  <button
                    onClick={() => setIsFixedElementSizeMenuOpen(!isFixedElementSizeMenuOpen)}
                    className="rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-gray-600 hover:bg-gray-700 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold"
                  >
                    <Square className="rfp-w-4 rfp-h-4" />
                    <span>Resize</span>
                  </button>
                  
                  {isFixedElementSizeMenuOpen && (
                    <div className="rfp-absolute top-full rfp-left-0 rfp-mt-2 rfp-bg-white rfp-rounded-xl shadow-2xl rfp-border rfp-border-gray-200 rfp-p-4 z-50 min-w-[320px]">
                      <div className="rfp-space-y-4">
                        {/* Width Slider */}
                        <div>
                          <div className="rfp-flex rfp-justify-between rfp-items-center rfp-mb-2">
                            <label className="rfp-text-sm rfp-font-semibold rfp-text-gray-700">Width</label>
                            <span className="rfp-text-sm rfp-font-bold rfp-text-blue-600">{fixedElementWidth}px</span>
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
                            className="rfp-w-full rfp-h-2 bg-gradient-to-r from-blue-200 to-blue-500 rfp-rounded-lg appearance-none rfp-cursor-pointer slider"
                          />
                          <div className="rfp-flex rfp-justify-between rfp-text-xs rfp-text-gray-500 rfp-mt-1">
                            <span>30px</span>
                            <span>200px</span>
                          </div>
                        </div>

                        {/* Height Slider */}
                        <div>
                          <div className="rfp-flex rfp-justify-between rfp-items-center rfp-mb-2">
                            <label className="rfp-text-sm rfp-font-semibold rfp-text-gray-700">Height</label>
                            <span className="rfp-text-sm rfp-font-bold rfp-text-blue-600">{fixedElementHeight}px</span>
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
                            className="rfp-w-full rfp-h-2 bg-gradient-to-r from-green-200 to-green-500 rfp-rounded-lg appearance-none rfp-cursor-pointer slider"
                          />
                          <div className="rfp-flex rfp-justify-between rfp-text-xs rfp-text-gray-500 rfp-mt-1">
                            <span>30px</span>
                            <span>200px</span>
                          </div>
                        </div>

                        {/* Current Size Display */}
                        <div className="rfp-pt-3 rfp-border-t rfp-border-gray-200">
                          <div className="rfp-text-center">
                            <span className="rfp-text-xs rfp-text-gray-600">Current Size: </span>
                            <span className="rfp-text-sm rfp-font-bold rfp-text-gray-800">{fixedElementWidth} × {fixedElementHeight}px</span>
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
                className="rfp-px-3 rfp-py-2 rfp-rounded-lg rfp-bg-red-500 hover:bg-red-600 rfp-text-white rfp-shadow-md hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-text-sm rfp-font-semibold"
                title="Delete Element"
              >
                <Trash2 className="rfp-w-4 rfp-h-4" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>

        {/* Right Section - Stats */}
        <div className="rfp-flex rfp-items-center rfp-gap-3 rfp-flex-wrap">
          {/* 3D Button */}
          <button
            onClick={on3DPreview}
            className="rfp-px-4 rfp-py-2 bg-gradient-to-r from-purple-600 to-blue-600 rfp-text-white rfp-rounded-lg hover:shadow-lg rfp-transition-all rfp-flex rfp-items-center rfp-gap-2 rfp-font-semibold rfp-text-sm"
          >
            <Box className="rfp-w-4 rfp-h-4" />
            3D
          </button>
          
          <div className="rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 bg-emerald-50 rfp-rounded rfp-text-xs">
            <div className="rfp-w-2 rfp-h-2 bg-emerald-600 rfp-rounded-full" />
            <span className="rfp-font-medium text-emerald-800">Tables: {tableCount}</span>
          </div>
          <div className="rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 bg-amber-50 rfp-rounded rfp-text-xs">
            <div className="rfp-w-2 rfp-h-2 bg-amber-600 rfp-rounded-full" />
            <span className="rfp-font-medium text-amber-800">Chairs: {chairCount}</span>
          </div>
          <div className="rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 rfp-bg-purple-50 rfp-rounded rfp-text-xs">
            <div className="rfp-w-2 rfp-h-2 rfp-bg-purple-600 rfp-rounded-full" />
            <span className="rfp-font-medium rfp-text-purple-800">Objects: {objectCount}</span>
          </div>
          {selectedElementType && (
            <div className="rfp-flex rfp-items-center gap-1.5 rfp-px-2 rfp-py-1 rfp-bg-blue-50 rfp-rounded rfp-text-xs">
              <div className="w-1.5 h-1.5 rfp-bg-blue-600 rfp-rounded-full rfp-animate-pulse" />
              <span className="rfp-font-medium rfp-text-blue-800 rfp-capitalize">Selected: {selectedElementType}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

