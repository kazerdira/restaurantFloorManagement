import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Plus, 
  Minus, 
  Save, 
  Upload, 
  Trash2, 
  Eye, 
  EyeOff,
  Square,
  Circle,
  RotateCw,
  Layers,
  Armchair,
  Move,
  Home,
  DoorOpen,
  Maximize2,
  Stairs,
  Wine,
  Grid3x3,
  Lock,
  Unlock
} from 'lucide-react';

const GRID_SIZE = 20;
const MIN_WALL_LENGTH = 40;

// Enhanced type definitions
type ElementType = 'table' | 'chair' | 'wall' | 'door' | 'window' | 'bar' | 'stairs';
type WallOrientation = 'horizontal' | 'vertical';
type DoorType = 'single' | 'double' | 'sliding';
type StairsDirection = 'up' | 'down' | 'left' | 'right';

interface ArchitecturalElement {
  id: string;
  type: 'wall' | 'door' | 'window' | 'bar' | 'stairs';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
  orientation?: WallOrientation;
  doorType?: DoorType;
  stairsDirection?: StairsDirection;
  isOpen?: boolean;
}

interface Wall extends ArchitecturalElement {
  type: 'wall';
  orientation: WallOrientation;
}

interface Door extends ArchitecturalElement {
  type: 'door';
  doorType: DoorType;
  isOpen: boolean;
}

interface Window extends ArchitecturalElement {
  type: 'window';
}

interface Bar extends ArchitecturalElement {
  type: 'bar';
}

interface Stairs extends ArchitecturalElement {
  type: 'stairs';
  stairsDirection: StairsDirection;
}

interface Chair {
  id: string;
  tableId: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  x: number;
  y: number;
}

interface Table {
  id: string;
  name: string;
  shape: 'square' | 'circle' | 'rectangle' | 'hexagon';
  size: 'small' | 'medium' | 'large';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

interface Floor {
  id: string;
  name: string;
  isActive: boolean;
  tables: Table[];
  chairs: Chair[];
  architecturalElements: ArchitecturalElement[];
}

interface SelectedElement {
  type: ElementType;
  id: string;
}

// Tool modes for different editing states
type ToolMode = 'select' | 'wall' | 'door' | 'window' | 'bar' | 'stairs' | 'table';

const hexagonStyle = `
  .hexagon-shape {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`;

const TABLE_SIZES = {
  small: { width: 50, height: 50 },
  medium: { width: 90, height: 90 },
  large: { width: 130, height: 130 }
};

const generateId = (): string => Math.random().toString(36).substr(2, 9);

// Architectural Element Components
const WallComponent: React.FC<{
  wall: Wall;
  isSelected: boolean;
  onSelect: () => void;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onDragEnd: () => void;
}> = ({ wall, isSelected, onSelect, onDrag, onDragEnd }) => {
  return (
    <div
      className={`absolute cursor-move transition-all duration-150 ${
        isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''
      }`}
      style={{
        left: wall.x,
        top: wall.y,
        width: wall.orientation === 'horizontal' ? wall.width : 8,
        height: wall.orientation === 'vertical' ? wall.height : 8,
        backgroundColor: '#374151',
        zIndex: 10
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        onSelect();
        onDrag(e, wall.id);
      }}
      onMouseUp={onDragEnd}
    />
  );
};

const DoorComponent: React.FC<{
  door: Door;
  isSelected: boolean;
  onSelect: () => void;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onDragEnd: () => void;
}> = ({ door, isSelected, onSelect, onDrag, onDragEnd }) => {
  const doorWidth = door.doorType === 'double' ? 120 : 80;
  const doorHeight = 8;
  
  return (
    <div
      className={`absolute cursor-move transition-all duration-150 ${
        isSelected ? 'ring-2 ring-amber-500 ring-offset-2' : ''
      }`}
      style={{
        left: door.x,
        top: door.y,
        width: doorWidth,
        height: doorHeight,
        transform: `rotate(${door.rotation || 0}deg)`,
        transformOrigin: 'center',
        zIndex: 15
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        onSelect();
        onDrag(e, door.id);
      }}
      onMouseUp={onDragEnd}
    >
      <div 
        className="w-full h-full relative"
        style={{
          background: door.isOpen 
            ? 'linear-gradient(90deg, #92400e 0%, #fbbf24 50%, #92400e 100%)' 
            : '#92400e',
          border: '2px solid #451a03'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <DoorOpen size={20} className="text-amber-100" />
        </div>
        {door.doorType === 'double' && (
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-900" />
        )}
      </div>
    </div>
  );
};

const WindowComponent: React.FC<{
  window: Window;
  isSelected: boolean;
  onSelect: () => void;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onDragEnd: () => void;
}> = ({ window, isSelected, onSelect, onDrag, onDragEnd }) => {
  return (
    <div
      className={`absolute cursor-move transition-all duration-150 ${
        isSelected ? 'ring-2 ring-cyan-500 ring-offset-2' : ''
      }`}
      style={{
        left: window.x,
        top: window.y,
        width: window.width || 60,
        height: 8,
        transform: `rotate(${window.rotation || 0}deg)`,
        transformOrigin: 'center',
        zIndex: 15
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        onSelect();
        onDrag(e, window.id);
      }}
      onMouseUp={onDragEnd}
    >
      <div 
        className="w-full h-full relative flex"
        style={{
          background: 'linear-gradient(90deg, #0891b2, #67e8f9, #0891b2)',
          border: '2px solid #164e63'
        }}
      >
        <div className="flex-1 border-r border-cyan-800" />
        <div className="flex-1" />
      </div>
    </div>
  );
};

const BarComponent: React.FC<{
  bar: Bar;
  isSelected: boolean;
  onSelect: () => void;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onDragEnd: () => void;
}> = ({ bar, isSelected, onSelect, onDrag, onDragEnd }) => {
  return (
    <div
      className={`absolute cursor-move transition-all duration-150 ${
        isSelected ? 'ring-2 ring-purple-500 ring-offset-2' : ''
      }`}
      style={{
        left: bar.x,
        top: bar.y,
        width: bar.width || 180,
        height: bar.height || 60,
        transform: `rotate(${bar.rotation || 0}deg)`,
        transformOrigin: 'center',
        zIndex: 20
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        onSelect();
        onDrag(e, bar.id);
      }}
      onMouseUp={onDragEnd}
    >
      <div 
        className="w-full h-full relative rounded-lg"
        style={{
          background: 'linear-gradient(135deg, #581c87, #7c3aed)',
          border: '3px solid #2e1065'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Wine size={24} className="text-purple-200" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-purple-900 rounded-b-lg" />
      </div>
    </div>
  );
};

const StairsComponent: React.FC<{
  stairs: Stairs;
  isSelected: boolean;
  onSelect: () => void;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onDragEnd: () => void;
}> = ({ stairs, isSelected, onSelect, onDrag, onDragEnd }) => {
  const getStairsRotation = () => {
    switch(stairs.stairsDirection) {
      case 'up': return 0;
      case 'right': return 90;
      case 'down': return 180;
      case 'left': return 270;
      default: return 0;
    }
  };

  return (
    <div
      className={`absolute cursor-move transition-all duration-150 ${
        isSelected ? 'ring-2 ring-orange-500 ring-offset-2' : ''
      }`}
      style={{
        left: stairs.x,
        top: stairs.y,
        width: stairs.width || 100,
        height: stairs.height || 140,
        transform: `rotate(${getStairsRotation()}deg)`,
        transformOrigin: 'center',
        zIndex: 25
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        onSelect();
        onDrag(e, stairs.id);
      }}
      onMouseUp={onDragEnd}
    >
      <div className="w-full h-full relative">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full border-2 border-orange-700"
            style={{
              top: `${i * 16.67}%`,
              height: '16.67%',
              background: i % 2 === 0 ? '#ea580c' : '#dc2626',
              opacity: 1 - (i * 0.1)
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <Stairs size={32} className="text-white drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

const calculateChairSize = (table: Table) => {
  const actualWidth = table.shape === 'rectangle' ? table.width * 1.5 : table.width;
  const limitingDimension = Math.min(actualWidth, table.height);
  const scaled = Math.round(limitingDimension * 0.35);
  return Math.max(18, Math.min(48, scaled));
};

const ChairComponent: React.FC<{
  chair: Chair;
  table: Table;
  isSelected: boolean;
  onSelect: () => void;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onDragEnd: () => void;
}> = ({ chair, table, isSelected, onSelect, onDrag, onDragEnd }) => {
  const chairSize = calculateChairSize(table);
  const spacing = Math.max(8, Math.round(chairSize * 0.3));
  const iconSize = Math.min(
    chairSize - 2,
    Math.max(16, Math.round(chairSize * 0.6))
  );

  const getChairPosition = () => {
    const actualTableWidth = table.shape === 'rectangle' ? table.width * 1.5 : table.width;
    const tableCenterX = table.x + actualTableWidth / 2;
    const tableCenterY = table.y + table.height / 2;
    
    switch (chair.position) {
      case 'top':
        return { x: tableCenterX - chairSize / 2, y: table.y - chairSize - spacing };
      case 'bottom':
        return { x: tableCenterX - chairSize / 2, y: table.y + table.height + spacing };
      case 'left':
        return { x: table.x - chairSize - spacing, y: tableCenterY - chairSize / 2 };
      case 'right':
        return { x: table.x + actualTableWidth + spacing, y: tableCenterY - chairSize / 2 };
      default:
        return { x: chair.x || 0, y: chair.y || 0 };
    }
  };

  const position = getChairPosition();

  return (
    <div
      className={`absolute cursor-move transition-all duration-150 ${
        isSelected ? 'ring-2 ring-amber-500 ring-offset-2' : ''
      }`}
      style={{
        left: position.x,
        top: position.y,
        width: chairSize,
        height: chairSize,
        zIndex: isSelected ? 100 : 50
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        onSelect();
        onDrag(e, chair.id);
      }}
      onMouseUp={onDragEnd}
    >
      <div className="w-full h-full bg-amber-600 rounded-sm border-2 border-amber-700 flex items-center justify-center shadow-md">
        <Armchair size={iconSize} strokeWidth={3} className="text-amber-100" />
      </div>
    </div>
  );
};

const TableComponent: React.FC<{
  table: Table;
  isSelected: boolean;
  chairs: Chair[];
  onSelect: () => void;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onDragEnd: () => void;
}> = ({
  table,
  isSelected,
  chairs,
  onSelect,
  onDrag,
  onDragEnd,
}) => {
  const getTableClasses = () => {
    let baseClasses = "w-full h-full bg-emerald-600 border-2 border-emerald-700 flex items-center justify-center relative shadow-lg";
    
    if (table.shape === 'circle') {
      baseClasses += " rounded-full";
    } else if (table.shape === 'hexagon') {
      baseClasses += " hexagon-shape";
    }
    
    return baseClasses;
  };

  const getContainerStyle = (): React.CSSProperties => {
    return {
      left: table.x,
      top: table.y,
      width: table.shape === 'rectangle' ? table.width * 1.5 : table.width,
      height: table.height,
      zIndex: isSelected ? 100 : 50,
      transform: `rotate(${table.rotation || 0}deg)`
    };
  };

  const tableChairs = chairs.filter(chair => chair.tableId === table.id);
  const seatsCount = tableChairs.length;
  const nameMatch = table.name.match(/\d+/);
  const tableLabel = nameMatch ? nameMatch[0] : table.name;

  return (
    <div
      className={`absolute cursor-move transition-all duration-150 ${
        isSelected ? 'ring-2 ring-emerald-500 ring-offset-2' : ''
      }`}
      style={getContainerStyle()}
      onMouseDown={(e) => {
        e.stopPropagation();
        onSelect();
        onDrag(e, table.id);
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onMouseUp={onDragEnd}
    >
      <div className={getTableClasses()}>
        <div className="flex flex-col items-center justify-center gap-1 text-emerald-50">
          <span className="text-xs font-semibold uppercase tracking-wide">N: {tableLabel}</span>
          <span className="text-xs font-semibold uppercase tracking-wide">S: {seatsCount}</span>
        </div>
      </div>
    </div>
  );
};

const RestaurantFloorPlanner: React.FC = () => {
  const [floors, setFloors] = useState<Floor[]>([
    { id: 'floor-1', name: 'Ground Floor', isActive: true, tables: [], chairs: [], architecturalElements: [] }
  ]);
  const [currentFloor, setCurrentFloor] = useState<string>('floor-1');
  const [selectedElement, setSelectedElement] = useState<SelectedElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [toolMode, setToolMode] = useState<ToolMode>('select');
  const [isDrawingWall, setIsDrawingWall] = useState<boolean>(false);
  const [wallStart, setWallStart] = useState<{ x: number; y: number } | null>(null);
  const [wallPreview, setWallPreview] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [snapToGrid, setSnapToGrid] = useState<boolean>(true);
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragElementRef = useRef<{ id: string; type: string } | null>(null);

  const getCurrentFloor = (): Floor | undefined => floors.find(floor => floor.id === currentFloor);

  const snapToGridValue = (value: number): number => {
    return snapToGrid ? Math.round(value / GRID_SIZE) * GRID_SIZE : value;
  };

  const addArchitecturalElement = (type: ArchitecturalElement['type'], x: number, y: number) => {
    const floor = getCurrentFloor();
    if (!floor) return;

    let newElement: ArchitecturalElement;
    const id = generateId();

    switch(type) {
      case 'door':
        newElement = {
          id,
          type: 'door',
          x: snapToGridValue(x),
          y: snapToGridValue(y),
          width: 80,
          height: 8,
          doorType: 'single',
          isOpen: false,
          rotation: 0
        } as Door;
        break;
      case 'window':
        newElement = {
          id,
          type: 'window',
          x: snapToGridValue(x),
          y: snapToGridValue(y),
          width: 60,
          height: 8,
          rotation: 0
        } as Window;
        break;
      case 'bar':
        newElement = {
          id,
          type: 'bar',
          x: snapToGridValue(x),
          y: snapToGridValue(y),
          width: 180,
          height: 60,
          rotation: 0
        } as Bar;
        break;
      case 'stairs':
        newElement = {
          id,
          type: 'stairs',
          x: snapToGridValue(x),
          y: snapToGridValue(y),
          width: 100,
          height: 140,
          stairsDirection: 'up'
        } as Stairs;
        break;
      default:
        return;
    }

    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { ...floor, architecturalElements: [...floor.architecturalElements, newElement] }
        : floor
    ));
    setSelectedElement({ type: newElement.type, id: newElement.id });
    setToolMode('select');
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;

    if (toolMode === 'wall' && !isDrawingWall) {
      setIsDrawingWall(true);
      setWallStart({ x: snapToGridValue(x), y: snapToGridValue(y) });
    } else if (toolMode === 'wall' && isDrawingWall && wallStart) {
      const endX = snapToGridValue(x);
      const endY = snapToGridValue(y);
      
      const width = Math.abs(endX - wallStart.x);
      const height = Math.abs(endY - wallStart.y);
      
      if (width > MIN_WALL_LENGTH || height > MIN_WALL_LENGTH) {
        const floor = getCurrentFloor();
        if (!floor) return;

        const orientation: WallOrientation = width > height ? 'horizontal' : 'vertical';
        const newWall: Wall = {
          id: generateId(),
          type: 'wall',
          x: Math.min(wallStart.x, endX),
          y: Math.min(wallStart.y, endY),
          width: orientation === 'horizontal' ? width : 8,
          height: orientation === 'vertical' ? height : 8,
          orientation
        };

        setFloors(prev => prev.map(floor => 
          floor.id === currentFloor 
            ? { ...floor, architecturalElements: [...floor.architecturalElements, newWall] }
            : floor
        ));
      }
      
      setIsDrawingWall(false);
      setWallStart(null);
      setWallPreview(null);
    } else if (toolMode === 'door' || toolMode === 'window' || toolMode === 'bar' || toolMode === 'stairs') {
      addArchitecturalElement(toolMode, x, y);
    } else if (toolMode === 'select') {
      setSelectedElement(null);
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;

    if (isDrawingWall && wallStart) {
      const endX = snapToGridValue(x);
      const endY = snapToGridValue(y);
      
      setWallPreview({
        x: Math.min(wallStart.x, endX),
        y: Math.min(wallStart.y, endY),
        width: Math.abs(endX - wallStart.x),
        height: Math.abs(endY - wallStart.y)
      });
    }
  };

  const addTable = (shape: 'square' | 'circle' | 'rectangle' | 'hexagon', size: 'small' | 'medium' | 'large' = 'medium') => {
    const floor = getCurrentFloor();
    if (!floor) return;
    
    const { width, height } = TABLE_SIZES[size];
    const newTable: Table = {
      id: generateId(),
      name: `Table ${floor.tables.length + 1}`,
      shape,
      size,
      x: 200 + floor.tables.length * 20,
      y: 200 + floor.tables.length * 20,
      width: shape === 'rectangle' ? width * 1.5 : width,
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

  const addChair = (position: Chair['position']) => {
    if (!selectedElement || selectedElement.type !== 'table') return;
    
    const floor = getCurrentFloor();
    if (!floor) return;
    
    const existingChair = floor.chairs.find(chair => 
      chair.tableId === selectedElement.id && chair.position === position
    );
    
    if (existingChair) return;
    
    const newChair: Chair = {
      id: generateId(),
      tableId: selectedElement.id,
      position,
      x: 0,
      y: 0
    };
    
    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { ...floor, chairs: [...floor.chairs, newChair] }
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
    } else if (['wall', 'door', 'window', 'bar', 'stairs'].includes(selectedElement.type)) {
      setFloors(prev => prev.map(floor => 
        floor.id === currentFloor 
          ? { 
              ...floor, 
              architecturalElements: floor.architecturalElements.filter(e => e.id !== selectedElement.id)
            }
          : floor
      ));
    }
    
    setSelectedElement(null);
  };

  const rotateElement = () => {
    if (!selectedElement) return;
    
    if (selectedElement.type === 'table') {
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
    } else if (['door', 'window', 'bar'].includes(selectedElement.type)) {
      setFloors(prev => prev.map(floor => 
        floor.id === currentFloor 
          ? { 
              ...floor, 
              architecturalElements: floor.architecturalElements.map(el => 
                el.id === selectedElement.id 
                  ? { ...el, rotation: ((el.rotation || 0) + 90) % 360 }
                  : el
              )
            }
          : floor
      ));
    } else if (selectedElement.type === 'stairs') {
      const directions: StairsDirection[] = ['up', 'right', 'down', 'left'];
      setFloors(prev => prev.map(floor => 
        floor.id === currentFloor 
          ? { 
              ...floor, 
              architecturalElements: floor.architecturalElements.map(el => {
                if (el.id === selectedElement.id && el.type === 'stairs') {
                  const currentIndex = directions.indexOf(el.stairsDirection!);
                  const nextIndex = (currentIndex + 1) % directions.length;
                  return { ...el, stairsDirection: directions[nextIndex] };
                }
                return el;
              })
            }
          : floor
      ));
    }
  };

  const handleElementSelect = (type: ElementType, id: string) => {
    setSelectedElement({ type, id });
    setToolMode('select');
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

    let element: any = floor.tables.find(t => t.id === id);
    if (!element) {
      element = floor.architecturalElements.find(e => e.id === id);
    }
    
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
    
    const snappedX = snapToGridValue(x);
    const snappedY = snapToGridValue(y);
    
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
    } else if (['wall', 'door', 'window', 'bar', 'stairs'].includes(dragElementRef.current.type)) {
      setFloors(prev => prev.map(floor => 
        floor.id === currentFloor 
          ? { 
              ...floor, 
              architecturalElements: floor.architecturalElements.map(el => 
                el.id === dragElementRef.current?.id 
                  ? { ...el, x: snappedX, y: snappedY }
                  : el
              )
            }
          : floor
      ));
    }
  }, [isDragging, dragOffset, currentFloor, zoom, snapToGrid]);

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
      chairs: [],
      architecturalElements: []
    };
    setFloors(prev => [...prev, newFloor]);
    switchFloor(newFloor.id);
  };

  const switchFloor = (floorId: string) => {
    setFloors(prev => prev.map(floor => ({
      ...floor,
      isActive: floor.id === floorId
    })));
    setCurrentFloor(floorId);
    setSelectedElement(null);
  };

  const saveFloorPlan = () => {
    const floorPlanData = {
      floors: floors,
      timestamp: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(floorPlanData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `restaurant-floor-plan-${Date.now()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const loadFloorPlan = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        try {
          const data = JSON.parse(event.target.result);
          if (data.floors && Array.isArray(data.floors)) {
            setFloors(data.floors);
            setCurrentFloor(data.floors[0]?.id || 'floor-1');
            setSelectedElement(null);
          }
        } catch (error) {
          alert('Invalid floor plan file');
        }
      };
      reader.readAsText(file);
    };
    input.click();
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
  const selectedArchElement = currentFloorData?.architecturalElements.find(e => e.id === selectedElement?.id);

  return (
    <div className="flex h-screen bg-gray-50">
      <style dangerouslySetInnerHTML={{ __html: hexagonStyle }} />
      
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg border-r border-gray-200 flex flex-col overflow-y-auto">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h1 className="text-xl font-bold">Restaurant Designer Pro</h1>
          <p className="text-blue-100 text-sm">Architectural Floor Planner</p>
        </div>

        {/* Tool Mode Selector */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Design Mode</h3>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setToolMode('select')}
              className={`p-2 rounded-lg transition-all flex flex-col items-center gap-1 ${
                toolMode === 'select' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Move className="w-4 h-4" />
              <span className="text-[10px] font-medium">Select</span>
            </button>
            <button
              onClick={() => setToolMode('wall')}
              className={`p-2 rounded-lg transition-all flex flex-col items-center gap-1 ${
                toolMode === 'wall' 
                  ? 'bg-gray-800 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Square className="w-4 h-4" />
              <span className="text-[10px] font-medium">Wall</span>
            </button>
            <button
              onClick={() => setToolMode('door')}
              className={`p-2 rounded-lg transition-all flex flex-col items-center gap-1 ${
                toolMode === 'door' 
                  ? 'bg-amber-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <DoorOpen className="w-4 h-4" />
              <span className="text-[10px] font-medium">Door</span>
            </button>
            <button
              onClick={() => setToolMode('window')}
              className={`p-2 rounded-lg transition-all flex flex-col items-center gap-1 ${
                toolMode === 'window' 
                  ? 'bg-cyan-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Maximize2 className="w-4 h-4" />
              <span className="text-[10px] font-medium">Window</span>
            </button>
            <button
              onClick={() => setToolMode('bar')}
              className={`p-2 rounded-lg transition-all flex flex-col items-center gap-1 ${
                toolMode === 'bar' 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Wine className="w-4 h-4" />
              <span className="text-[10px] font-medium">Bar</span>
            </button>
            <button
              onClick={() => setToolMode('stairs')}
              className={`p-2 rounded-lg transition-all flex flex-col items-center gap-1 ${
                toolMode === 'stairs' 
                  ? 'bg-orange-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Stairs className="w-4 h-4" />
              <span className="text-[10px] font-medium">Stairs</span>
            </button>
          </div>
          {toolMode === 'wall' && (
            <p className="mt-2 text-xs text-gray-500">Click and drag to draw walls</p>
          )}
          {['door', 'window', 'bar', 'stairs'].includes(toolMode) && (
            <p className="mt-2 text-xs text-gray-500">Click to place {toolMode}</p>
          )}
        </div>

        {/* Floor Management */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Floors ({floors.length})
            </h2>
            <button
              onClick={addFloor}
              className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              title="Add New Floor"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {floors.map(floor => (
              <button
                key={floor.id}
                onClick={() => switchFloor(floor.id)}
                className={`w-full p-2.5 text-left rounded-lg transition-all flex items-center justify-between ${
                  floor.isActive 
                    ? 'bg-blue-100 text-blue-800 border border-blue-200 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div>
                  <div className="font-medium text-sm">{floor.name}</div>
                  <div className="text-[10px] text-gray-500">
                    {floor.tables.length} tables • {floor.architecturalElements.length} elements
                  </div>
                </div>
                {floor.isActive && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
              </button>
            ))}
          </div>
        </div>

        {/* Add Tables */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Add Tables</h3>
          <div className="grid grid-cols-2 gap-2">
            {(['square', 'circle', 'rectangle', 'hexagon'] as const).map(shape => (
              <button
                key={shape}
                onClick={() => {
                  setToolMode('select');
                  addTable(shape);
                }}
                className="p-2.5 border-2 border-gray-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-all flex flex-col items-center gap-1 hover:shadow-md"
              >
                {shape === 'square' && <Square className="w-5 h-5 text-emerald-600" />}
                {shape === 'circle' && <Circle className="w-5 h-5 text-emerald-600" />}
                {shape === 'rectangle' && <Square className="w-5 h-3 text-emerald-600" />}
                {shape === 'hexagon' && <Square className="w-5 h-5 text-emerald-600 transform rotate-45" />}
                <span className="text-[10px] text-gray-700 capitalize font-medium">{shape}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Element Properties */}
        {selectedElement && (selectedTable || selectedArchElement) && (
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-800">
                {selectedTable ? 'Table' : selectedArchElement?.type} Properties
              </h3>
              <div className="flex gap-1">
                <button
                  onClick={rotateElement}
                  className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                  title="Rotate"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={removeElement}
                  className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            
            {selectedTable && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-gray-400">Name</div>
                    <div className="font-semibold text-gray-800">{selectedTable.name}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-gray-400">Shape</div>
                    <div className="font-semibold text-gray-800 capitalize">{selectedTable.shape}</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {(['top', 'bottom', 'left', 'right'] as const).map(pos => (
                    <button
                      key={pos}
                      onClick={() => addChair(pos)}
                      className="flex-1 p-1.5 bg-amber-100 text-amber-700 rounded text-[10px] font-medium hover:bg-amber-200 transition-colors"
                    >
                      +{pos[0].toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {selectedArchElement && (
              <div className="space-y-2">
                <div className="text-xs">
                  <div className="text-[10px] uppercase tracking-wide text-gray-400">Type</div>
                  <div className="font-semibold text-gray-800 capitalize">{selectedArchElement.type}</div>
                </div>
                {selectedArchElement.type === 'door' && (
                  <div className="text-xs">
                    <div className="text-[10px] uppercase tracking-wide text-gray-400">Style</div>
                    <div className="font-semibold text-gray-800 capitalize">
                      {(selectedArchElement as Door).doorType}
                    </div>
                  </div>
                )}
                {selectedArchElement.type === 'stairs' && (
                  <div className="text-xs">
                    <div className="text-[10px] uppercase tracking-wide text-gray-400">Direction</div>
                    <div className="font-semibold text-gray-800 capitalize">
                      {(selectedArchElement as Stairs).stairsDirection}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="p-4 mt-auto">
          <div className="bg-gray-50 p-3 rounded-lg mb-3">
            <h4 className="text-xs font-semibold text-gray-700 mb-2">Floor Statistics</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-600">Tables</div>
                <div className="font-bold text-lg text-emerald-600">{currentFloorData?.tables.length || 0}</div>
              </div>
              <div>
                <div className="text-gray-600">Elements</div>
                <div className="font-bold text-lg text-purple-600">{currentFloorData?.architecturalElements.length || 0}</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={saveFloorPlan}
              className="flex-1 bg-green-600 text-white py-2.5 px-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={loadFloorPlan}
              className="flex-1 bg-blue-600 text-white py-2.5 px-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Upload className="w-4 h-4" />
              Load
            </button>
          </div>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 p-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm text-gray-600 w-16 text-center font-medium">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom(Math.min(2, zoom + 0.1))}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <div className="w-px h-6 bg-gray-200"></div>
            
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`p-2 rounded-lg transition-colors flex items-center gap-2 ${
                showGrid ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
              <span className="text-sm">Grid</span>
            </button>
            
            <button
              onClick={() => setSnapToGrid(!snapToGrid)}
              className={`p-2 rounded-lg transition-colors flex items-center gap-2 ${
                snapToGrid ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {snapToGrid ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
              <span className="text-sm">Snap</span>
            </button>
          </div>
          
          <div className="text-sm text-gray-600">
            Mode: <span className="font-semibold capitalize">{toolMode}</span>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 overflow-hidden bg-gray-100 relative">
          <div
            ref={canvasRef}
            className="w-full h-full relative"
            style={{ 
              transform: `scale(${zoom})`,
              transformOrigin: 'top left',
              background: showGrid 
                ? `radial-gradient(circle, #d1d5db 1px, transparent 1px)` 
                : 'white',
              backgroundSize: `${GRID_SIZE * zoom}px ${GRID_SIZE * zoom}px`,
              cursor: toolMode === 'select' ? 'default' : 'crosshair'
            }}
            onClick={handleCanvasClick}
            onMouseMove={handleCanvasMouseMove}
          >
            {/* Render architectural elements first (they should be behind tables) */}
            {currentFloorData?.architecturalElements.map(element => {
              switch(element.type) {
                case 'wall':
                  return (
                    <WallComponent
                      key={element.id}
                      wall={element as Wall}
                      isSelected={selectedElement?.id === element.id}
                      onSelect={() => handleElementSelect('wall', element.id)}
                      onDrag={handleDragStart}
                      onDragEnd={handleDragEnd}
                    />
                  );
                case 'door':
                  return (
                    <DoorComponent
                      key={element.id}
                      door={element as Door}
                      isSelected={selectedElement?.id === element.id}
                      onSelect={() => handleElementSelect('door', element.id)}
                      onDrag={handleDragStart}
                      onDragEnd={handleDragEnd}
                    />
                  );
                case 'window':
                  return (
                    <WindowComponent
                      key={element.id}
                      window={element as Window}
                      isSelected={selectedElement?.id === element.id}
                      onSelect={() => handleElementSelect('window', element.id)}
                      onDrag={handleDragStart}
                      onDragEnd={handleDragEnd}
                    />
                  );
                case 'bar':
                  return (
                    <BarComponent
                      key={element.id}
                      bar={element as Bar}
                      isSelected={selectedElement?.id === element.id}
                      onSelect={() => handleElementSelect('bar', element.id)}
                      onDrag={handleDragStart}
                      onDragEnd={handleDragEnd}
                    />
                  );
                case 'stairs':
                  return (
                    <StairsComponent
                      key={element.id}
                      stairs={element as Stairs}
                      isSelected={selectedElement?.id === element.id}
                      onSelect={() => handleElementSelect('stairs', element.id)}
                      onDrag={handleDragStart}
                      onDragEnd={handleDragEnd}
                    />
                  );
                default:
                  return null;
              }
            })}

            {/* Wall preview when drawing */}
            {isDrawingWall && wallPreview && (
              <div
                className="absolute pointer-events-none"
                style={{
                  left: wallPreview.x,
                  top: wallPreview.y,
                  width: wallPreview.width > wallPreview.height ? wallPreview.width : 8,
                  height: wallPreview.height > wallPreview.width ? wallPreview.height : 8,
                  backgroundColor: 'rgba(55, 65, 81, 0.5)',
                  border: '2px dashed #374151'
                }}
              />
            )}

            {/* Render tables */}
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

            {/* Render chairs */}
            {currentFloorData?.chairs.map(chair => {
              const chairTable = currentFloorData.tables.find(t => t.id === chair.tableId);
              if (!chairTable) return null;
              return (
                <ChairComponent
                  key={chair.id}
                  chair={chair}
                  table={chairTable}
                  isSelected={false}
                  onSelect={() => {}}
                  onDrag={() => {}}
                  onDragEnd={() => {}}
                />
              );
            })}

            {/* Empty state */}
            {currentFloorData?.tables.length === 0 && currentFloorData?.architecturalElements.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🏗️</div>
                  <div className="text-xl font-medium mb-2">Start Designing Your Restaurant</div>
                  <div className="text-base">Use the tools in the sidebar to add walls, doors, tables, and more</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFloorPlanner;

**********

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Plus, 
  Minus, 
  Save, 
  Upload, 
  Trash2, 
  Eye, 
  EyeOff,
  Square,
  Circle,
  RotateCw,
  Layers,
  Armchair
} from 'lucide-react';

// Add hexagon CSS style
const hexagonStyle = `
  .hexagon-shape {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`;

const GRID_SIZE = 20;

interface TableShape {
  square: typeof Square;
  circle: typeof Circle;
  rectangle: typeof Square;
  hexagon: typeof Square;
}

const TABLE_SHAPES: TableShape = {
  square: Square,
  circle: Circle,
  rectangle: Square,
  hexagon: Square
};

const TABLE_SIZES = {
  small: { width: 50, height: 50 },
  medium: { width: 90, height: 90 },
  large: { width: 130, height: 130 }
};

type ChairPosition = 'top' | 'bottom' | 'left' | 'right';

interface Chair {
  id: string;
  tableId: string;
  position: ChairPosition;
  x: number;
  y: number;
}

interface Table {
  id: string;
  name: string;
  shape: 'square' | 'circle' | 'rectangle' | 'hexagon';
  size: 'small' | 'medium' | 'large';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

const calculateChairSize = (table: Table) => {
  const actualWidth = table.shape === 'rectangle' ? table.width * 1.5 : table.width;
  const limitingDimension = Math.min(actualWidth, table.height);
  const scaled = Math.round(limitingDimension * 0.35);
  return Math.max(18, Math.min(48, scaled));
};

interface Floor {
  id: string;
  name: string;
  isActive: boolean;
  tables: Table[];
  chairs: Chair[];
}

interface SelectedElement {
  type: 'table' | 'chair';
  id: string;
}

const generateId = (): string => Math.random().toString(36).substr(2, 9);

interface ChairComponentProps {
  chair: Chair;
  table: Table;
  isSelected: boolean;
  onSelect: () => void;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onDragEnd: () => void;
}

const ChairComponent: React.FC<ChairComponentProps> = ({ chair, table, isSelected, onSelect, onDrag, onDragEnd }) => {
  const chairSize = calculateChairSize(table);
  const spacing = Math.max(8, Math.round(chairSize * 0.3));
  const iconSize = Math.min(
    chairSize - 2,
    Math.max(16, Math.round(chairSize * 0.6))
  );

  const getChairPosition = () => {
    const actualTableWidth = table.shape === 'rectangle' ? table.width * 1.5 : table.width;
    const tableCenterX = table.x + actualTableWidth / 2;
    const tableCenterY = table.y + table.height / 2;
    
    switch (chair.position) {
      case 'top':
        return { x: tableCenterX - chairSize / 2, y: table.y - chairSize - spacing };
      case 'bottom':
        return { x: tableCenterX - chairSize / 2, y: table.y + table.height + spacing };
      case 'left':
        return { x: table.x - chairSize - spacing, y: tableCenterY - chairSize / 2 };
      case 'right':
        return { x: table.x + actualTableWidth + spacing, y: tableCenterY - chairSize / 2 };
      default:
        return { x: chair.x || 0, y: chair.y || 0 };
    }
  };

  const position = getChairPosition();

  return (
    <div
      className={`absolute cursor-move transition-all duration-150 ${
        isSelected ? 'ring-2 ring-amber-500 ring-offset-2' : ''
      }`}
      style={{
        left: position.x,
        top: position.y,
        width: chairSize,
        height: chairSize,
        zIndex: isSelected ? 100 : 50
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        onSelect();
        onDrag(e, chair.id);
      }}
      onMouseUp={onDragEnd}
    >
      <div className="w-full h-full bg-amber-600 rounded-sm border-2 border-amber-700 flex items-center justify-center shadow-md">
        <Armchair size={iconSize} strokeWidth={3} className="text-amber-100" />
      </div>
    </div>
  );
};

interface TableComponentProps {
  table: Table;
  isSelected: boolean;
  chairs: Chair[];
  onSelect: () => void;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onDragEnd: () => void;
}

const TableComponent: React.FC<TableComponentProps> = ({
  table,
  isSelected,
  chairs,
  onSelect,
  onDrag,
  onDragEnd,
}) => {
  const getTableClasses = () => {
    let baseClasses = "w-full h-full bg-emerald-600 border-2 border-emerald-700 flex items-center justify-center relative shadow-lg";
    
    if (table.shape === 'circle') {
      baseClasses += " rounded-full";
    } else if (table.shape === 'hexagon') {
      baseClasses += " hexagon-shape";
    }
    
    return baseClasses;
  };

  const getContainerStyle = (): React.CSSProperties => {
    let containerStyle: React.CSSProperties = {
      left: table.x,
      top: table.y,
      width: table.shape === 'rectangle' ? table.width * 1.5 : table.width,
      height: table.height,
      zIndex: isSelected ? 100 : 50,
      transform: `rotate(${table.rotation || 0}deg)`
    };
    
    return containerStyle;
  };

  const tableChairs = chairs.filter(chair => chair.tableId === table.id);
  const seatsCount = tableChairs.length;
  const nameMatch = table.name.match(/\d+/);
  const tableLabel = nameMatch ? nameMatch[0] : table.name;

  return (
    <div
      className={`absolute cursor-move transition-all duration-150 ${
        isSelected ? 'ring-2 ring-emerald-500 ring-offset-2' : ''
      }`}
      style={getContainerStyle()}
      onMouseDown={(e) => {
        e.stopPropagation();
        onSelect();
        onDrag(e, table.id);
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onMouseUp={onDragEnd}
    >
      <div className={getTableClasses()}>
        <div className="flex flex-col items-center justify-center gap-1 text-emerald-50">
          <span className="text-xs font-semibold uppercase tracking-wide">N: {tableLabel}</span>
          <span className="text-xs font-semibold uppercase tracking-wide">S: {seatsCount}</span>
        </div>
      </div>
    </div>
  );
};

const RestaurantFloorPlanner: React.FC = () => {
  const [floors, setFloors] = useState<Floor[]>([
    { id: 'floor-1', name: 'Ground Floor', isActive: true, tables: [], chairs: [] }
  ]);
  const [currentFloor, setCurrentFloor] = useState<string>('floor-1');
  const [selectedElement, setSelectedElement] = useState<SelectedElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [isDeleteMenuOpen, setIsDeleteMenuOpen] = useState<boolean>(false);
  const [isSizeMenuOpen, setIsSizeMenuOpen] = useState<boolean>(false);
  const deleteMenuRef = useRef<HTMLDivElement | null>(null);
  const sizeMenuRef = useRef<HTMLDivElement | null>(null);
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragElementRef = useRef<{ id: string; type: string } | null>(null);

  const getCurrentFloor = (): Floor | undefined => floors.find(floor => floor.id === currentFloor);

  const addTable = (shape: 'square' | 'circle' | 'rectangle' | 'hexagon', size: 'small' | 'medium' | 'large' = 'medium') => {
    const floor = getCurrentFloor();
    if (!floor) return;
    
    const { width, height } = TABLE_SIZES[size];
    const newTable: Table = {
      id: generateId(),
      name: `Table ${floor.tables.length + 1}`,
      shape,
      size,
      x: 200 + floor.tables.length * 20,
      y: 200 + floor.tables.length * 20,
      width: shape === 'rectangle' ? width * 1.5 : width,
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
    
    const existingChair = floor.chairs.find(chair => 
      chair.tableId === selectedElement.id && chair.position === position
    );
    
    if (existingChair) return;
    
    const newChair: Chair = {
      id: generateId(),
      tableId: selectedElement.id,
      position,
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
    
    setFloors(prev => prev.map(floor => 
      floor.id === currentFloor 
        ? { 
            ...floor, 
            chairs: floor.chairs.filter(chair => 
              !(chair.tableId === selectedElement.id && chair.position === position)
            )
          }
        : floor
    ));
  };

  const getNextAvailableChairPosition = useCallback((): ChairPosition | null => {
    if (selectedElement?.type !== 'table') return null;

    const floor = getCurrentFloor();
    if (!floor) return null;

    const positions: ChairPosition[] = ['top', 'bottom', 'left', 'right'];
    const occupied = new Set<ChairPosition>(
      floor.chairs
        .filter((chair: Chair) => chair.tableId === selectedElement.id)
        .map((chair) => chair.position),
    );

    return positions.find((position) => !occupied.has(position)) ?? null;
  }, [selectedElement, floors, currentFloor]);

  const handleQuickAddChair = () => {
    setIsDeleteMenuOpen(false);
    setIsSizeMenuOpen(false);

    if (selectedElement?.type !== 'table') {
      alert('Select a table first to add a chair.');
      return;
    }

    const nextPosition = getNextAvailableChairPosition();

    if (!nextPosition) {
      alert('All chair positions are already used for this table.');
      return;
    }

    addChair(nextPosition);
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
      const { width, height } = TABLE_SIZES[size];
      return {
        ...table,
        size,
        width: table.shape === 'rectangle' ? width * 1.5 : width,
        height
      };
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
    const handleClickOutside = (event: MouseEvent) => {
      if (deleteMenuRef.current && !deleteMenuRef.current.contains(event.target as Node)) {
        setIsDeleteMenuOpen(false);
      }
      if (sizeMenuRef.current && !sizeMenuRef.current.contains(event.target as Node)) {
        setIsSizeMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!selectedElement || selectedElement.type !== 'table') {
      setIsDeleteMenuOpen(false);
      setIsSizeMenuOpen(false);
    }
  }, [selectedElement]);

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
  const nextAvailableChairPosition = getNextAvailableChairPosition();
  const canQuickAddChair = Boolean(nextAvailableChairPosition);
  const nextAvailableChairLabel = nextAvailableChairPosition ? nextAvailableChairPosition.toUpperCase() : '—';
  const selectedTableChairs = selectedTable
    ? (currentFloorData?.chairs.filter(c => c.tableId === selectedTable.id) ?? [])
    : [];
  const occupiedChairPositions = new Set<ChairPosition>(selectedTableChairs.map(chair => chair.position));
  const sizeLabelMap: Record<Table['size'], string> = {
    small: 'Small',
    medium: 'Medium',
    large: 'Big'
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <style dangerouslySetInnerHTML={{ __html: hexagonStyle }} />
      
      <div className="w-80 bg-white shadow-lg border-r border-gray-200 flex flex-col">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h1 className="text-xl font-bold">Restaurant Designer</h1>
          <p className="text-blue-100 text-sm">Professional Floor Planner</p>
        </div>

        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              Floor Plans ({floors.length})
            </h2>
            <div className="flex gap-1">
              <button
                onClick={addFloor}
                className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                title="Add New Floor"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                onClick={removeFloor}
                disabled={floors.length <= 1}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Remove Current Floor"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {floors.map(floor => (
              <button
                key={floor.id}
                onClick={() => switchFloor(floor.id)}
                className={`w-full p-3 text-left rounded-lg transition-all flex items-center justify-between ${
                  floor.isActive 
                    ? 'bg-blue-100 text-blue-800 border border-blue-200 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div>
                  <div className="font-medium">{floor.name}</div>
                  <div className="text-xs text-gray-500">
                    {floor.tables.length} tables, {floor.chairs.length} chairs
                  </div>
                </div>
                {floor.isActive && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border-b border-gray-200">
          <h3 className="text-md font-semibold text-gray-800 mb-3">Add Tables</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(TABLE_SHAPES).map(([shape, Icon]) => (
              <button
                key={shape}
                onClick={() => addTable(shape as any)}
                className="p-3 border-2 border-gray-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-all flex flex-col items-center gap-2 hover:shadow-md"
              >
                <Icon className="w-6 h-6 text-emerald-600" />
                <span className="text-xs text-gray-700 capitalize font-medium">{shape}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedElement && selectedTable && (
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-md font-semibold text-gray-800">Table Properties</h3>
              <div className="flex gap-1">
                <button
                  onClick={rotateTable}
                  className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                  title="Rotate Table"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
                <button
                  onClick={duplicateTable}
                  className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors"
                  title="Duplicate Table"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={removeElement}
                  className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors"
                  title="Delete Table"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-3 text-sm text-gray-600">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-400">Name</div>
                  <div className="font-semibold text-gray-800">{selectedTable.name}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-400">Shape</div>
                  <div className="font-semibold text-gray-800 capitalize">{selectedTable.shape}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-400">Size</div>
                  <div className="font-semibold text-gray-800">{sizeLabelMap[selectedTable.size]}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-400">Seats</div>
                  <div className="font-semibold text-gray-800">{selectedTableChairs.length}</div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">Chair Positions</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {(['top', 'bottom', 'left', 'right'] as ChairPosition[]).map((pos) => (
                    <div
                      key={pos}
                      className={`flex items-center justify-between rounded-md px-2 py-1 ${
                        occupiedChairPositions.has(pos)
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <span className="capitalize">{pos}</span>
                      <span className="text-[10px] font-semibold uppercase">
                        {occupiedChairPositions.has(pos) ? 'Filled' : 'Empty'}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-[10px] text-gray-500">
                  Use the toolbar buttons above to add or remove chairs from each side.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="p-4 mt-auto space-y-3">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Current Floor Stats</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-600">Tables</div>
                <div className="font-bold text-lg text-emerald-600">{currentFloorData?.tables.length || 0}</div>
              </div>
              <div>
                <div className="text-gray-600">Total Seats</div>
                <div className="font-bold text-lg text-amber-600">{currentFloorData?.chairs.length || 0}</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={saveFloorPlan}
              className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={loadFloorPlan}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Upload className="w-4 h-4" />
              Load
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 p-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Zoom Out"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm text-gray-600 w-16 text-center font-medium">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom(Math.min(2, zoom + 0.1))}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Zoom In"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <div className="w-px h-6 bg-gray-200"></div>
            
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`p-2 rounded-lg transition-colors flex items-center gap-2 ${
                showGrid ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
              title={showGrid ? "Hide Grid" : "Show Grid"}
            >
              {showGrid ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              <span className="text-sm font-medium">Grid</span>
            </button>

            <button
              onClick={handleQuickAddChair}
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

            <div
              ref={deleteMenuRef}
              className="relative"
            >
              <button
                onClick={() => {
                  if (!selectedTable) return;
                  setIsDeleteMenuOpen(prev => !prev);
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
                  {(['left', 'right', 'bottom', 'top'] as ChairPosition[]).map((position) => {
                    const hasChair = occupiedChairPositions.has(position);
                    return (
                      <button
                        key={position}
                        onClick={() => {
                          if (!hasChair) return;
                          removeChair(position);
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

            <div
              ref={sizeMenuRef}
              className="relative"
            >
              <button
                onClick={() => {
                  if (!selectedTable) return;
                  setIsSizeMenuOpen(prev => !prev);
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
                <span>Size: {selectedTable ? sizeLabelMap[selectedTable.size] : '--'}</span>
              </button>
              {isSizeMenuOpen && selectedTable && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex flex-col gap-1 z-50">
                  {(['small', 'medium', 'large'] as Table['size'][]).map((sizeOption) => {
                    const isActive = selectedTable.size === sizeOption;
                    return (
                      <button
                        key={sizeOption}
                        onClick={() => {
                          handleTableSizeChange(sizeOption);
                          setIsSizeMenuOpen(false);
                        }}
                        className={`flex items-center justify-between gap-2 px-3 py-1.5 text-[11px] font-medium rounded-md transition-colors ${
                          isActive
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-gray-600 hover:bg-emerald-50'
                        }`}
                      >
                        <span>{sizeLabelMap[sizeOption]}</span>
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
                  onChange={(e) => handleTableNameChange(e.target.value)}
                  className="bg-transparent text-xs text-gray-700 focus:outline-none focus:ring-0"
                  placeholder="Table name"
                />
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-600 rounded"></div>
              <span>Tables: {currentFloorData?.tables.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-600 rounded"></div>
              <span>Chairs: {currentFloorData?.chairs.length}</span>
            </div>
            {selectedElement && (
              <div className="flex items-center gap-2 text-blue-600 font-medium">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Selected: {selectedElement.type}</span>
              </div>
            )}
          </div>
        </div>

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
              return (
                <ChairComponent
                  key={chair.id}
                  chair={chair}
                  table={chairTable}
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