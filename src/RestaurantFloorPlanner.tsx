import React, { useState, useRef, useCallback, useEffect } from 'react';

import { ChairComponent } from './floorPlanner/components/Chair';
import { TableComponent } from './floorPlanner/components/Table';
import { Sidebar } from './floorPlanner/components/Sidebar';
import { Toolbar } from './floorPlanner/components/Toolbar';
import {
  hexagonStyle,
  GRID_SIZE
} from './floorPlanner/constants';
import { generateId, resolveTableDimensions } from './floorPlanner/utils';
import type {
  Chair,
  ChairPosition,
  Floor,
  SelectedElement,
  Table,
  TableSize
} from './floorPlanner/types';

const RestaurantFloorPlanner: React.FC = () => {
  const [floors, setFloors] = useState<Floor[]>([
    { id: 'floor-1', name: 'Ground Floor', isActive: true, tables: [], chairs: [] }
  ]);
  const [currentFloor, setCurrentFloor] = useState<string>('floor-1');
  const [selectedElement, setSelectedElement] = useState<SelectedElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const zoom = 1; // Fixed zoom level
  const [showGrid, setShowGrid] = useState<boolean>(true);
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragElementRef = useRef<{ id: string; type: string } | null>(null);

  const getCurrentFloor = (): Floor | undefined => floors.find(floor => floor.id === currentFloor);

  const addTable = (shape: Table['shape'], size: TableSize = 'medium') => {
    const floor = getCurrentFloor();
    if (!floor) return;

    const { width, height } = resolveTableDimensions(shape, size);
    const newTable: Table = {
      id: generateId(),
      name: `Table ${floor.tables.length + 1}`,
      shape,
      size,
      x: 200 + floor.tables.length * 20,
      y: 200 + floor.tables.length * 20,
      width,
      height,
      rotation: 0
    };
    
    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { ...floor, tables: [...floor.tables, newTable] }
        : floor
    ));
    setSelectedElement({ type: 'table', id: newTable.id });
  };

  const addChair = (position: ChairPosition) => {
    if (!selectedElement || selectedElement.type !== 'table') return;
    
    const floor = getCurrentFloor();
    if (!floor) return;
    
    // Get existing chairs on this side
    const existingChairsOnSide = floor.chairs.filter(chair => 
      chair.tableId === selectedElement.id && chair.position === position
    );
    
    // Calculate the next index
    const nextIndex = existingChairsOnSide.length;
    
    const newChair: Chair = {
      id: generateId(),
      tableId: selectedElement.id,
      position,
      index: nextIndex,
      x: 0,
      y: 0
    };
    
    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { ...floor, chairs: [...floor.chairs, newChair] }
        : floor
    ));
  };

  const removeChair = (position: ChairPosition) => {
    if (!selectedElement || selectedElement.type !== 'table') return;
    
    const floor = getCurrentFloor();
    if (!floor) return;
    
    // Find chairs on this side
    const chairsOnSide = floor.chairs.filter(chair => 
      chair.tableId === selectedElement.id && chair.position === position
    );
    
    if (chairsOnSide.length === 0) return;
    
    // Remove the last chair (highest index)
    const chairToRemove = chairsOnSide.reduce((prev, current) => 
      current.index > prev.index ? current : prev
    );
    
    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { 
            ...floor, 
            chairs: floor.chairs.filter(chair => chair.id !== chairToRemove.id)
          }
        : floor
    ));
  };

  const removeElement = () => {
    if (!selectedElement) return;
    
    if (selectedElement.type === 'table') {
      setFloors(prev => prev.map(floor => 
        floor.id === currentFloor 
          ? { 
              ...floor, 
              tables: floor.tables.filter(t => t.id !== selectedElement.id),
              chairs: floor.chairs.filter(c => c.tableId !== selectedElement.id)
            }
          : floor
      ));
    }
    
    setSelectedElement(null);
  };

  const rotateTable = () => {
    if (!selectedElement || selectedElement.type !== 'table') return;
    
    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { 
            ...floor, 
            tables: floor.tables.map(table => 
              table.id === selectedElement.id 
                ? { ...table, rotation: (table.rotation || 0) + 45 }
                : table
            )
          }
        : floor
    ));
  };

  const duplicateTable = () => {
    if (!selectedElement || selectedElement.type !== 'table') return;
    
    const floor = getCurrentFloor();
    if (!floor) return;
    
    const originalTable = floor.tables.find(t => t.id === selectedElement.id);
    if (!originalTable) return;
    
    const newTable: Table = {
      ...originalTable,
      id: generateId(),
      name: `${originalTable.name} Copy`,
      x: originalTable.x + 50,
      y: originalTable.y + 50
    };
    
    const originalChairs = floor.chairs.filter(c => c.tableId === originalTable.id);
    const newChairs: Chair[] = originalChairs.map(chair => ({
      ...chair,
      id: generateId(),
      tableId: newTable.id
    }));
    
    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { 
            ...floor, 
            tables: [...floor.tables, newTable],
            chairs: [...floor.chairs, ...newChairs]
          }
        : floor
    ));
    
    setSelectedElement({ type: 'table', id: newTable.id });
  };

  const updateSelectedTable = useCallback((updater: (table: Table) => Table) => {
    if (!selectedElement || selectedElement.type !== 'table') return;

    setFloors(prev => prev.map(floor =>
      floor.id === currentFloor
        ? {
            ...floor,
            tables: floor.tables.map(table =>
              table.id === selectedElement.id ? updater(table) : table
            )
          }
        : floor
    ));
  }, [selectedElement, currentFloor]);

  const handleTableSizeChange = (size: Table['size']) => {
    updateSelectedTable(table => {
      const { width, height } = resolveTableDimensions(table.shape, size);
      return { ...table, size, width, height };
    });
  };

  const handleTableNameChange = (name: string) => {
    updateSelectedTable(table => ({ ...table, name }));
  };

  const handleCanvasClick = () => {
    setSelectedElement(null);
  };

  const handleElementSelect = (type: 'table' | 'chair', id: string) => {
    setSelectedElement({ type, id });
  };

  const handleDragStart = (e: React.MouseEvent, id: string) => {
    if (!canvasRef.current) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;
    
    const element = getCurrentFloor()?.tables.find(t => t.id === id);
    if (element) {
      setDragOffset({
        x: x - element.x,
        y: y - element.y
      });
    }
    
    dragElementRef.current = { id, type: selectedElement?.type || 'table' };
    setIsDragging(true);
  };

  const handleDrag = useCallback((e: MouseEvent) => {
    if (!isDragging || !dragElementRef.current || !canvasRef.current) return;
    
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - canvasRect.left) / zoom - dragOffset.x;
    const y = (e.clientY - canvasRect.top) / zoom - dragOffset.y;
    
    const snappedX = Math.round(x / GRID_SIZE) * GRID_SIZE;
    const snappedY = Math.round(y / GRID_SIZE) * GRID_SIZE;
    
    if (dragElementRef.current.type === 'table') {
      setFloors(prev => prev.map(floor => 
        floor.id === currentFloor 
          ? { 
              ...floor, 
              tables: floor.tables.map(table => 
                table.id === dragElementRef.current?.id 
                  ? { ...table, x: snappedX, y: snappedY }
                  : table
              )
            }
          : floor
      ));
    }
  }, [isDragging, dragOffset, currentFloor, zoom]);

  const handleDragEnd = () => {
    setIsDragging(false);
    dragElementRef.current = null;
  };

  const addFloor = () => {
    const newFloor: Floor = {
      id: generateId(),
      name: `Floor ${floors.length + 1}`,
      isActive: false,
      tables: [],
      chairs: []
    };
    setFloors(prev => [...prev, newFloor]);
    switchFloor(newFloor.id);
  };

  const removeFloor = () => {
    if (floors.length <= 1) return;
    
    const newFloors = floors.filter(f => f.id !== currentFloor);
    setFloors(newFloors);
    setCurrentFloor(newFloors[0].id);
  };

  const switchFloor = (floorId: string) => {
    setFloors(prev => prev.map(floor => ({
      ...floor,
      isActive: floor.id === floorId
    })));
    setCurrentFloor(floorId);
    setSelectedElement(null);
  };

  const renameFloor = (floorId: string, newName: string) => {
    setFloors(prev => prev.map(floor =>
      floor.id === floorId
        ? { ...floor, name: newName }
        : floor
    ));
  };

  const saveFloorPlan = () => {
    const floorPlanData = {
      floors: floors,
      timestamp: new Date().toISOString()
    };
    
    console.log('Saving floor plan:', floorPlanData);
    alert('Floor plan saved! (Check console for data)');
  };

  const loadFloorPlan = () => {
    // Simulate loading - in real app this would be from your backend API
    const sampleData: Floor[] = [
      {
        id: 'floor-sample',
        name: 'Sample Floor',
        isActive: true,
        tables: [
          {
            id: 'table-1',
            name: 'Table 1',
            shape: 'circle',
            size: 'medium',
            x: 200,
            y: 200,
            width: 120,
            height: 120,
            rotation: 0
          }
        ],
        chairs: [
          {
            id: 'chair-1',
            tableId: 'table-1',
            position: 'top',
            index: 0,
            x: 0,
            y: 0
          }
        ]
      }
    ];
    
    setFloors(sampleData);
    setCurrentFloor('floor-sample');
    setSelectedElement(null);
    alert('Sample floor plan loaded!');
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleDrag(e);
    const handleMouseUp = () => handleDragEnd();
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleDrag]);

  const currentFloorData = getCurrentFloor();
  const selectedTable = currentFloorData?.tables.find(t => selectedElement?.type === 'table' && t.id === selectedElement.id);
  const selectedTableChairs = selectedTable
    ? (currentFloorData?.chairs.filter(c => c.tableId === selectedTable.id) ?? [])
    : [];
  const toggleGrid = useCallback(() => setShowGrid((prev) => !prev), []);

  return (
    <div className="flex h-screen bg-gray-50">
      <style dangerouslySetInnerHTML={{ __html: hexagonStyle }} />
      
      <Sidebar
        floors={floors}
        currentFloor={currentFloorData}
        onAddFloor={addFloor}
        onRemoveFloor={removeFloor}
        onSwitchFloor={switchFloor}
        onRenameFloor={renameFloor}
        onAddTable={addTable}
        onRotateTable={rotateTable}
        onDuplicateTable={duplicateTable}
        onRemoveTable={removeElement}
        onSave={saveFloorPlan}
        onLoad={loadFloorPlan}
        selectedTable={selectedTable ?? null}
        selectedTableChairs={selectedTableChairs}
      />

      <div className="flex-1 flex flex-col">
        <Toolbar
          showGrid={showGrid}
          selectedTable={selectedTable ?? null}
          selectedTableChairs={selectedTableChairs}
          tableCount={currentFloorData?.tables.length ?? 0}
          chairCount={currentFloorData?.chairs.length ?? 0}
          selectedElementType={selectedElement?.type ?? null}
          onToggleGrid={toggleGrid}
          onAddChair={addChair}
          onRemoveChair={removeChair}
          onChangeTableSize={handleTableSizeChange}
          onTableNameChange={handleTableNameChange}
        />

        <div className="flex-1 overflow-hidden bg-gray-100 relative">
          <div
            ref={canvasRef}
            className="w-full h-full relative cursor-crosshair"
            style={{ 
              transform: `scale(${zoom})`,
              transformOrigin: 'top left',
              background: showGrid 
                ? `radial-gradient(circle, #d1d5db 1px, transparent 1px)` 
                : 'white',
              backgroundSize: `${GRID_SIZE * zoom}px ${GRID_SIZE * zoom}px`
            }}
            onClick={handleCanvasClick}
          >
            {currentFloorData?.tables.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🏪</div>
                  <div className="text-xl font-medium mb-2">Welcome to Your Restaurant Designer</div>
                  <div className="text-lg">Click "Add Tables" in the sidebar to start designing your floor plan</div>
                  <div className="mt-4 space-y-1 text-sm">
                    <div>• Drag tables to move them around</div>
                    <div>• Click tables to select and edit properties</div>
                    <div>• Add chairs from the top toolbar or the table properties panel</div>
                    <div>• Use multiple floors for complex layouts</div>
                  </div>
                </div>
              </div>
            )}

            {currentFloorData?.tables.map(table => (
              <TableComponent
                key={table.id}
                table={table}
                isSelected={selectedElement?.type === 'table' && selectedElement.id === table.id}
                chairs={currentFloorData.chairs.filter(chair => chair.tableId === table.id)}
                onSelect={() => handleElementSelect('table', table.id)}
                onDrag={handleDragStart}
                onDragEnd={handleDragEnd}
              />
            ))}

            {/* Render all chairs separately for better positioning */}
            {currentFloorData?.chairs.map(chair => {
              const chairTable = currentFloorData.tables.find(t => t.id === chair.tableId);
              if (!chairTable) return null;
              
              // Count total chairs on this side for proper spacing
              const totalChairsOnSide = currentFloorData.chairs.filter(
                c => c.tableId === chair.tableId && c.position === chair.position
              ).length;
              
              return (
                <ChairComponent
                  key={chair.id}
                  chair={chair}
                  table={chairTable}
                  totalChairsOnSide={totalChairsOnSide}
                  isSelected={false}
                  onSelect={() => {}}
                  onDrag={() => {}}
                  onDragEnd={() => {}}
                />
              );
            })}

            {selectedElement && selectedElement.type === 'table' && selectedTable && (
              <div
                className="absolute border-2 border-blue-500 border-dashed rounded pointer-events-none"
                style={{
                  left: selectedTable.x - 10,
                  top: selectedTable.y - 10,
                  width: (selectedTable.shape === 'rectangle' ? selectedTable.width * 1.5 : selectedTable.width) + 20,
                  height: selectedTable.height + 20,
                  transform: `rotate(${selectedTable.rotation || 0}deg)`
                }}
              />
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 border-t border-gray-200 p-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Floor: {currentFloorData?.name}</span>
                </div>
                {isDragging && (
                  <div className="flex items-center gap-2 text-blue-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Dragging...</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-gray-500">
                  Zoom: {Math.round(zoom * 100)}% | Grid: {showGrid ? 'On' : 'Off'}
                </div>
                {selectedElement && (
                  <div className="text-blue-600 font-medium">
                    {selectedElement.type === 'table' && selectedTable
                      ? `${selectedTable.name} (${selectedTable.shape})`
                      : 'Element Selected'
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFloorPlanner;