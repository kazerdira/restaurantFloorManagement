import React, { useState, useRef, useCallback, useEffect } from 'react';

import { ChairComponent } from './floorPlanner/components/Chair';
import { TableComponent } from './floorPlanner/components/Table';
import { FloorObjectComponent } from './floorPlanner/components/FloorObject';
import { WallComponent } from './floorPlanner/components/Wall';
import { FixedElementComponent } from './floorPlanner/components/FixedElement';
import { Sidebar } from './floorPlanner/components/Sidebar';
import { Toolbar } from './floorPlanner/components/Toolbar';
import {
  hexagonStyle,
  GRID_SIZE,
  OBJECT_LABELS
} from './floorPlanner/constants';
import { generateId, resolveTableDimensions, snapToAxis } from './floorPlanner/utils';
import type {
  Chair,
  ChairPosition,
  FixedElement,
  FixedElementType,
  Floor,
  FloorObject,
  ObjectType,
  SelectedElement,
  Table,
  TableSize,
  Wall,
  WallType
} from './floorPlanner/types';

const RestaurantFloorPlanner: React.FC = () => {
  const [floors, setFloors] = useState<Floor[]>([
    { 
      id: 'floor-1', 
      name: 'Ground Floor', 
      isActive: true, 
      tables: [], 
      chairs: [], 
      objects: [],
      walls: [],
      fixedElements: []
    }
  ]);
  const [currentFloor, setCurrentFloor] = useState<string>('floor-1');
  const [selectedElement, setSelectedElement] = useState<SelectedElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const zoom = 1; // Fixed zoom level
  const [showGrid, setShowGrid] = useState<boolean>(true);
  
  // Wall drawing state
  const [isDrawingWall, setIsDrawingWall] = useState<boolean>(false);
  const [wallType, setWallType] = useState<WallType | null>(null);
  const [wallStartPoint, setWallStartPoint] = useState<{ x: number; y: number } | null>(null);
  const [tempWallEndPoint, setTempWallEndPoint] = useState<{ x: number; y: number } | null>(null);
  
  // Wall resizing state
  const [isResizingWall, setIsResizingWall] = useState<boolean>(false);
  const [resizingWallHandle, setResizingWallHandle] = useState<'start' | 'end' | null>(null);
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragElementRef = useRef<{ id: string; type: string } | null>(null);
  const rafRef = useRef<number | null>(null);

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

  const addObject = (type: ObjectType) => {
    const floor = getCurrentFloor();
    if (!floor) return;

    const newObject: FloorObject = {
      id: generateId(),
      name: `${OBJECT_LABELS[type]} ${floor.objects.length + 1}`,
      type,
      x: 300 + floor.objects.length * 30,
      y: 300 + floor.objects.length * 30,
      width: 120,
      height: 80,
      rotation: 0
    };
    
    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { ...floor, objects: [...floor.objects, newObject] }
        : floor
    ));
    setSelectedElement({ type: 'object', id: newObject.id });
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
    } else if (selectedElement.type === 'object') {
      setFloors(prev => prev.map(floor => 
        floor.id === currentFloor 
          ? { 
              ...floor, 
              objects: floor.objects.filter(o => o.id !== selectedElement.id)
            }
          : floor
      ));
    } else if (selectedElement.type === 'wall') {
      setFloors(prev => prev.map(floor => 
        floor.id === currentFloor 
          ? { 
              ...floor, 
              walls: floor.walls.filter(w => w.id !== selectedElement.id)
            }
          : floor
      ));
    } else if (selectedElement.type === 'fixedElement') {
      setFloors(prev => prev.map(floor => 
        floor.id === currentFloor 
          ? { 
              ...floor, 
              fixedElements: floor.fixedElements.filter(fe => fe.id !== selectedElement.id)
            }
          : floor
      ));
    }
    
    setSelectedElement(null);
  };

  const changeWallThickness = (thickness: number) => {
    if (!selectedElement || selectedElement.type !== 'wall') return;
    
    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { 
            ...floor, 
            walls: floor.walls.map(wall => 
              wall.id === selectedElement.id 
                ? { ...wall, thickness }
                : wall
            )
          }
        : floor
    ));
  };

  const convertWallType = (type: WallType) => {
    if (!selectedElement || selectedElement.type !== 'wall') return;
    
    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { 
            ...floor, 
            walls: floor.walls.map(wall => 
              wall.id === selectedElement.id 
                ? { ...wall, type }
                : wall
            )
          }
        : floor
    ));
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

  const handleCustomTableSize = (width: number, height: number) => {
    updateSelectedTable(table => ({
      ...table,
      width,
      height,
      // Set size to a custom indicator or keep current
      size: 'medium' as TableSize // Keep a valid size for the interface
    }));
  };

  const handleObjectNameChange = (name: string) => {
    if (!selectedElement || selectedElement.type !== 'object') return;
    
    setFloors(prev => prev.map(floor =>
      floor.id === currentFloor
        ? {
            ...floor,
            objects: floor.objects.map(obj =>
              obj.id === selectedElement.id ? { ...obj, name } : obj
            )
          }
        : floor
    ));
  };

  const handleObjectResize = (width: number, height: number) => {
    if (!selectedElement || selectedElement.type !== 'object') return;
    
    setFloors(prev => prev.map(floor =>
      floor.id === currentFloor
        ? {
            ...floor,
            objects: floor.objects.map(obj =>
              obj.id === selectedElement.id ? { ...obj, width, height } : obj
            )
          }
        : floor
    ));
  };

  const handleTableNameChange = (name: string) => {
    updateSelectedTable(table => ({ ...table, name }));
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    
    // Don't do anything if we're resizing
    if (isResizingWall) return;
    
    // If we're in wall drawing mode
    if (isDrawingWall && wallType) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = Math.round(((e.clientX - rect.left) / zoom) / GRID_SIZE) * GRID_SIZE;
      const y = Math.round(((e.clientY - rect.top) / zoom) / GRID_SIZE) * GRID_SIZE;
      
      if (!wallStartPoint) {
        // First click - set start point
        setWallStartPoint({ x, y });
      } else {
        // Second click - create the wall with snapped coordinates
        const floor = getCurrentFloor();
        if (!floor) return;
        
        // Apply snap to axis for the final wall
        const snappedEnd = snapToAxis(wallStartPoint, { x, y });
        
        const newWall: Wall = {
          id: generateId(),
          type: wallType,
          startX: wallStartPoint.x,
          startY: wallStartPoint.y,
          endX: snappedEnd.x,
          endY: snappedEnd.y,
          thickness: 8
        };
        
        setFloors(prev => prev.map(floor => 
          floor.id === currentFloor 
            ? { ...floor, walls: [...floor.walls, newWall] }
            : floor
        ));
        
        // Reset wall drawing state
        setWallStartPoint(null);
        setTempWallEndPoint(null);
        setIsDrawingWall(false);
        setWallType(null);
      }
      return;
    }
    
    setSelectedElement(null);
  };

  const handleElementSelect = (type: 'table' | 'chair' | 'object' | 'wall' | 'fixedElement', id: string) => {
    setSelectedElement({ type, id });
  };

  const handleDragStart = (e: React.MouseEvent, id: string) => {
    if (!canvasRef.current) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;
    
    const floor = getCurrentFloor();
    if (!floor) return;
    
    // Find the element (table, object, or fixedElement) being dragged
    const table = floor.tables.find(t => t.id === id);
    const object = floor.objects.find(o => o.id === id);
    const fixedElement = floor.fixedElements.find(fe => fe.id === id);
    const element = table || object || fixedElement;
    
    if (element) {
      setDragOffset({
        x: x - element.x,
        y: y - element.y
      });
    }
    
    // Determine the type based on what was found
    const type = table ? 'table' : object ? 'object' : fixedElement ? 'fixedElement' : 'table';
    dragElementRef.current = { id, type };
    setIsDragging(true);
  };

  const handleDrag = useCallback((e: MouseEvent) => {
    if ((!isDragging && !isResizingWall) || !dragElementRef.current || !canvasRef.current) return;
    
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    // Use requestAnimationFrame for smooth updates
    rafRef.current = requestAnimationFrame(() => {
      if (!canvasRef.current) return;
      
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const x = (e.clientX - canvasRect.left) / zoom;
      const y = (e.clientY - canvasRect.top) / zoom;
      
      const snappedX = Math.round(x / GRID_SIZE) * GRID_SIZE;
      const snappedY = Math.round(y / GRID_SIZE) * GRID_SIZE;
      
      if (isResizingWall && dragElementRef.current?.type === 'wall') {
        // Handle wall resizing
        setFloors(prev => prev.map(floor => 
          floor.id === currentFloor 
            ? { 
                ...floor, 
                walls: floor.walls.map(wall => 
                  wall.id === dragElementRef.current?.id 
                    ? resizingWallHandle === 'start'
                      ? { ...wall, startX: snappedX, startY: snappedY }
                      : { ...wall, endX: snappedX, endY: snappedY }
                    : wall
                )
              }
            : floor
        ));
      } else if (dragElementRef.current?.type === 'table') {
        const adjustedX = x - dragOffset.x;
        const adjustedY = y - dragOffset.y;
        const tableSnappedX = Math.round(adjustedX / GRID_SIZE) * GRID_SIZE;
        const tableSnappedY = Math.round(adjustedY / GRID_SIZE) * GRID_SIZE;
        
        setFloors(prev => prev.map(floor => 
          floor.id === currentFloor 
            ? { 
                ...floor, 
                tables: floor.tables.map(table => 
                  table.id === dragElementRef.current?.id 
                    ? { ...table, x: tableSnappedX, y: tableSnappedY }
                    : table
                )
              }
            : floor
        ));
      } else if (dragElementRef.current?.type === 'object') {
        const adjustedX = x - dragOffset.x;
        const adjustedY = y - dragOffset.y;
        const objectSnappedX = Math.round(adjustedX / GRID_SIZE) * GRID_SIZE;
        const objectSnappedY = Math.round(adjustedY / GRID_SIZE) * GRID_SIZE;
        
        setFloors(prev => prev.map(floor => 
          floor.id === currentFloor 
            ? { 
                ...floor, 
                objects: floor.objects.map(object => 
                  object.id === dragElementRef.current?.id 
                    ? { ...object, x: objectSnappedX, y: objectSnappedY }
                    : object
                )
              }
            : floor
        ));
      } else if (dragElementRef.current?.type === 'fixedElement') {
        const adjustedX = x - dragOffset.x;
        const adjustedY = y - dragOffset.y;
        const elementSnappedX = Math.round(adjustedX / GRID_SIZE) * GRID_SIZE;
        const elementSnappedY = Math.round(adjustedY / GRID_SIZE) * GRID_SIZE;
        
        setFloors(prev => prev.map(floor => 
          floor.id === currentFloor 
            ? { 
                ...floor, 
                fixedElements: floor.fixedElements.map(element => 
                  element.id === dragElementRef.current?.id 
                    ? { ...element, x: elementSnappedX, y: elementSnappedY }
                    : element
                )
              }
            : floor
        ));
      }
    });
  }, [isDragging, isResizingWall, resizingWallHandle, dragOffset, currentFloor, zoom]);

  const handleDragEnd = () => {
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsDragging(false);
    dragElementRef.current = null;
    
    // Reset wall resizing state
    setIsResizingWall(false);
    setResizingWallHandle(null);
  };

  const handleWallHandleDrag = (e: React.MouseEvent, wallId: string, handleType: 'start' | 'end') => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsResizingWall(true);
    setResizingWallHandle(handleType);
    dragElementRef.current = { id: wallId, type: 'wall' };
  };

  const addFloor = () => {
    const newFloor: Floor = {
      id: generateId(),
      name: `Floor ${floors.length + 1}`,
      isActive: false,
      tables: [],
      chairs: [],
      objects: [],
      walls: [],
      fixedElements: []
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

  const startWallDrawing = (type: WallType) => {
    setIsDrawingWall(true);
    setWallType(type);
    setWallStartPoint(null);
    setTempWallEndPoint(null);
    setSelectedElement(null);
  };

  const addFixedElement = (type: FixedElementType) => {
    const floor = getCurrentFloor();
    if (!floor) return;

    const newElement: FixedElement = {
      id: generateId(),
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} ${floor.fixedElements.length + 1}`,
      type,
      x: 400 + floor.fixedElements.length * 30,
      y: 400 + floor.fixedElements.length * 30,
      width: 60,
      height: 60,
      rotation: 0
    };
    
    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { ...floor, fixedElements: [...floor.fixedElements, newElement] }
        : floor
    ));
    setSelectedElement({ type: 'fixedElement', id: newElement.id });
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
        ],
        objects: [],
        walls: [],
        fixedElements: []
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
    
    if (isDragging || isResizingWall) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizingWall, handleDrag]);

  // Handle mouse move for wall drawing preview
  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (isDrawingWall && wallStartPoint && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = Math.round(((e.clientX - rect.left) / zoom) / GRID_SIZE) * GRID_SIZE;
      const y = Math.round(((e.clientY - rect.top) / zoom) / GRID_SIZE) * GRID_SIZE;
      
      // Apply snap to axis
      const snappedPoint = snapToAxis(wallStartPoint, { x, y });
      setTempWallEndPoint(snappedPoint);
    }
  };

  // Handle ESC key to cancel wall drawing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawingWall) {
        setIsDrawingWall(false);
        setWallType(null);
        setWallStartPoint(null);
        setTempWallEndPoint(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isDrawingWall]);

  const currentFloorData = getCurrentFloor();
  const selectedTable = currentFloorData?.tables.find(t => selectedElement?.type === 'table' && t.id === selectedElement.id);
  const selectedObject = currentFloorData?.objects.find(o => selectedElement?.type === 'object' && o.id === selectedElement.id);
  const selectedWall = currentFloorData?.walls.find(w => selectedElement?.type === 'wall' && w.id === selectedElement.id);
  const selectedFixedElement = currentFloorData?.fixedElements.find(fe => selectedElement?.type === 'fixedElement' && fe.id === selectedElement.id);
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
        onAddObject={addObject}
        onStartWallDrawing={startWallDrawing}
        onAddFixedElement={addFixedElement}
        onRotateTable={rotateTable}
        onDuplicateTable={duplicateTable}
        onRemoveTable={removeElement}
        onSave={saveFloorPlan}
        onLoad={loadFloorPlan}
        selectedTable={selectedTable ?? null}
        selectedTableChairs={selectedTableChairs}
      />

      <div className="flex-1 flex flex-col">
        {/* Wall Drawing Mode Banner */}
        {isDrawingWall && wallType && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 flex items-center justify-between shadow-lg z-50">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg">
                  Drawing {wallType === 'wall' ? 'Wall' : wallType === 'door' ? 'Door' : 'Window'}
                </div>
                <div className="text-sm text-blue-100">
                  {!wallStartPoint ? 'Click to set start point' : 'Click to set end point'}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setIsDrawingWall(false);
                setWallType(null);
                setWallStartPoint(null);
                setTempWallEndPoint(null);
              }}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors"
            >
              Cancel (ESC)
            </button>
          </div>
        )}

        {/* Wall Resizing Mode Banner */}
        {isResizingWall && (
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 flex items-center justify-between shadow-lg z-50">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg animate-pulse">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg">
                  Resizing Wall
                </div>
                <div className="text-sm text-purple-100">
                  Drag the handle to adjust the {resizingWallHandle} point
                </div>
              </div>
            </div>
            <div className="text-sm px-4 py-2 bg-white/10 rounded-lg">
              Release to finish
            </div>
          </div>
        )}
        
        <Toolbar
          showGrid={showGrid}
          selectedTable={selectedTable ?? null}
          selectedObject={selectedObject ?? null}
          selectedWall={selectedWall ?? null}
          selectedFixedElement={selectedFixedElement ?? null}
          selectedTableChairs={selectedTableChairs}
          tableCount={currentFloorData?.tables.length ?? 0}
          chairCount={currentFloorData?.chairs.length ?? 0}
          objectCount={currentFloorData?.objects.length ?? 0}
          wallCount={currentFloorData?.walls.length ?? 0}
          fixedElementCount={currentFloorData?.fixedElements.length ?? 0}
          selectedElementType={selectedElement?.type ?? null}
          onToggleGrid={toggleGrid}
          onAddChair={addChair}
          onRemoveChair={removeChair}
          onChangeTableSize={handleTableSizeChange}
          onCustomTableSize={handleCustomTableSize}
          onTableNameChange={handleTableNameChange}
          onObjectNameChange={handleObjectNameChange}
          onObjectResize={handleObjectResize}
          onRemoveObject={removeElement}
          onRemoveWall={removeElement}
          onRemoveFixedElement={removeElement}
          onChangeWallThickness={changeWallThickness}
          onConvertWallType={convertWallType}
        />

        <div className="flex-1 overflow-hidden bg-gray-100 relative">
          <div
            ref={canvasRef}
            className={`w-full h-full relative ${
              isDrawingWall ? 'cursor-crosshair' : 
              isResizingWall ? 'cursor-grabbing' : 
              'cursor-default'
            }`}
            style={{ 
              transform: `scale(${zoom})`,
              transformOrigin: 'top left',
              background: showGrid 
                ? `radial-gradient(circle, #d1d5db 1px, transparent 1px)` 
                : 'white',
              backgroundSize: `${GRID_SIZE * zoom}px ${GRID_SIZE * zoom}px`
            }}
            onClick={handleCanvasClick}
            onMouseMove={handleCanvasMouseMove}
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

            {/* Render floor objects */}
            {currentFloorData?.objects.map(object => (
              <FloorObjectComponent
                key={object.id}
                object={object}
                isSelected={selectedElement?.type === 'object' && selectedElement.id === object.id}
                onSelect={() => handleElementSelect('object', object.id)}
                onDragStart={(e) => handleDragStart(e, object.id)}
              />
            ))}

            {/* Render walls */}
            {currentFloorData?.walls.map(wall => (
              <WallComponent
                key={wall.id}
                wall={wall}
                isSelected={selectedElement?.type === 'wall' && selectedElement.id === wall.id}
                onSelect={() => handleElementSelect('wall', wall.id)}
                onDragHandle={(e, handleType) => handleWallHandleDrag(e, wall.id, handleType)}
              />
            ))}

            {/* Render temporary wall preview while drawing */}
            {isDrawingWall && wallStartPoint && tempWallEndPoint && wallType && (
              <WallComponent
                wall={{
                  id: 'temp-wall',
                  type: wallType,
                  startX: wallStartPoint.x,
                  startY: wallStartPoint.y,
                  endX: tempWallEndPoint.x,
                  endY: tempWallEndPoint.y,
                  thickness: 8
                }}
                isSelected={false}
                onSelect={() => {}}
              />
            )}

            {/* Render fixed elements */}
            {currentFloorData?.fixedElements.map(element => (
              <FixedElementComponent
                key={element.id}
                element={element}
                isSelected={selectedElement?.type === 'fixedElement' && selectedElement.id === element.id}
                onSelect={() => handleElementSelect('fixedElement', element.id)}
                onDragStart={(e) => handleDragStart(e, element.id)}
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