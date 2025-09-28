import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Plus, 
  Minus, 
  RotateCw, 
  Save, 
  Download, 
  Upload, 
  Trash2, 
  Move,
  Square,
  Circle,
  Rectangle,
  Hexagon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const FloorPlanDesigner = () => {
  const [floors, setFloors] = useState([
    { id: 1, name: 'Floor 1', tables: [], chairs: [] }
  ]);
  const [activeFloor, setActiveFloor] = useState(0);
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const tableShapes = [
    { type: 'square', icon: Square, name: 'Square' },
    { type: 'circle', icon: Circle, name: 'Circle' },
    { type: 'rectangle', icon: Rectangle, name: 'Rectangle' },
    { type: 'hexagon', icon: Hexagon, name: 'Hexagon' }
  ];

  const tableSizes = ['small', 'medium', 'large'];

  const currentFloor = floors[activeFloor];

  const addFloor = () => {
    const newFloor = {
      id: floors.length + 1,
      name: `Floor ${floors.length + 1}`,
      tables: [],
      chairs: []
    };
    setFloors([...floors, newFloor]);
  };

  const removeFloor = () => {
    if (floors.length > 1) {
      const newFloors = floors.filter((_, index) => index !== activeFloor);
      setFloors(newFloors);
      setActiveFloor(Math.max(0, activeFloor - 1));
    }
  };

  const addTable = (shape, size = 'medium') => {
    const newTable = {
      id: Date.now(),
      shape,
      size,
      x: 200,
      y: 200,
      rotation: 0,
      seats: getSeatsForTable(shape, size)
    };

    const newFloors = [...floors];
    newFloors[activeFloor].tables.push(newTable);
    setFloors(newFloors);
  };

  const getSeatsForTable = (shape, size) => {
    const seatCounts = {
      small: { square: 2, circle: 3, rectangle: 4, hexagon: 4 },
      medium: { square: 4, circle: 4, rectangle: 6, hexagon: 6 },
      large: { square: 6, circle: 6, rectangle: 8, hexagon: 8 }
    };
    return seatCounts[size][shape] || 4;
  };

  const getTableDimensions = (shape, size) => {
    const baseSizes = {
      small: 60,
      medium: 80,
      large: 100
    };

    const base = baseSizes[size];
    
    switch (shape) {
      case 'rectangle':
        return { width: base * 1.5, height: base };
      case 'circle':
        return { width: base, height: base };
      case 'hexagon':
        return { width: base, height: base };
      default: // square
        return { width: base, height: base };
    }
  };

  const generateChairsForTable = (table) => {
    const chairs = [];
    const { width, height } = getTableDimensions(table.shape, table.size);
    const chairSize = 20;
    const chairOffset = 25;

    for (let i = 0; i < table.seats; i++) {
      let chairX, chairY, chairRotation = 0;

      if (table.shape === 'circle' || table.shape === 'hexagon') {
        const angle = (i / table.seats) * 2 * Math.PI;
        const radius = Math.max(width, height) / 2 + chairOffset;
        chairX = table.x + Math.cos(angle) * radius;
        chairY = table.y + Math.sin(angle) * radius;
        chairRotation = (angle * 180) / Math.PI + 90;
      } else {
        // Rectangle and square
        const perimeter = 2 * (width + height);
        const sideLength = perimeter / table.seats;
        const position = i * sideLength;

        if (position < width) {
          // Top side
          chairX = table.x - width/2 + position;
          chairY = table.y - height/2 - chairOffset;
          chairRotation = 0;
        } else if (position < width + height) {
          // Right side
          chairX = table.x + width/2 + chairOffset;
          chairY = table.y - height/2 + (position - width);
          chairRotation = 90;
        } else if (position < 2 * width + height) {
          // Bottom side
          chairX = table.x + width/2 - (position - width - height);
          chairY = table.y + height/2 + chairOffset;
          chairRotation = 180;
        } else {
          // Left side
          chairX = table.x - width/2 - chairOffset;
          chairY = table.y + height/2 - (position - 2 * width - height);
          chairRotation = 270;
        }
      }

      chairs.push({
        id: `${table.id}-chair-${i}`,
        tableId: table.id,
        x: chairX,
        y: chairY,
        rotation: chairRotation
      });
    }

    return chairs;
  };

  const updateTableChairs = (tableId) => {
    const table = currentFloor.tables.find(t => t.id === tableId);
    if (!table) return;

    const newChairs = generateChairsForTable(table);
    const newFloors = [...floors];
    newFloors[activeFloor].chairs = newFloors[activeFloor].chairs.filter(
      chair => chair.tableId !== tableId
    ).concat(newChairs);
    setFloors(newFloors);
  };

  const handleCanvasClick = (e) => {
    if (!selectedTool) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;

    if (selectedTool.startsWith('table-')) {
      const shape = selectedTool.split('-')[1];
      addTable(shape);
      setTimeout(() => updateTableChairs(Date.now()), 0);
    }

    setSelectedTool(null);
  };

  const handleElementMouseDown = (e, element, type) => {
    e.stopPropagation();
    setSelectedElement({ ...element, type });
    setIsDragging(true);

    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;

    setDragOffset({
      x: x - element.x,
      y: y - element.y
    });
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !selectedElement) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;

    const newX = x - dragOffset.x;
    const newY = y - dragOffset.y;

    const newFloors = [...floors];
    const floorData = newFloors[activeFloor];

    if (selectedElement.type === 'table') {
      const tableIndex = floorData.tables.findIndex(t => t.id === selectedElement.id);
      if (tableIndex !== -1) {
        floorData.tables[tableIndex] = {
          ...floorData.tables[tableIndex],
          x: newX,
          y: newY
        };
      }
    }

    setFloors(newFloors);
  }, [isDragging, selectedElement, dragOffset, zoom, floors, activeFloor]);

  const handleMouseUp = useCallback(() => {
    if (isDragging && selectedElement && selectedElement.type === 'table') {
      updateTableChairs(selectedElement.id);
    }
    setIsDragging(false);
    setSelectedElement(null);
  }, [isDragging, selectedElement]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const deleteSelectedElement = () => {
    if (!selectedElement) return;

    const newFloors = [...floors];
    const floorData = newFloors[activeFloor];

    if (selectedElement.type === 'table') {
      floorData.tables = floorData.tables.filter(t => t.id !== selectedElement.id);
      floorData.chairs = floorData.chairs.filter(c => c.tableId !== selectedElement.id);
    }

    setFloors(newFloors);
    setSelectedElement(null);
  };

  const saveFloorPlan = () => {
    const floorPlanData = {
      floors: floors,
      timestamp: new Date().toISOString()
    };
    
    // In a real app, this would be an API call
    console.log('Saving floor plan:', floorPlanData);
    localStorage.setItem('restaurantFloorPlan', JSON.stringify(floorPlanData));
    alert('Floor plan saved successfully!');
  };

  const loadFloorPlan = () => {
    try {
      const saved = localStorage.getItem('restaurantFloorPlan');
      if (saved) {
        const data = JSON.parse(saved);
        setFloors(data.floors);
        setActiveFloor(0);
        alert('Floor plan loaded successfully!');
      } else {
        alert('No saved floor plan found!');
      }
    } catch (error) {
      alert('Error loading floor plan!');
    }
  };

  const renderTable = (table) => {
    const { width, height } = getTableDimensions(table.shape, table.size);
    const isSelected = selectedElement && selectedElement.id === table.id;

    const commonProps = {
      onMouseDown: (e) => handleElementMouseDown(e, table, 'table'),
      style: {
        cursor: isDragging ? 'grabbing' : 'grab',
        fill: isSelected ? '#3b82f6' : '#8b5cf6',
        stroke: isSelected ? '#1d4ed8' : '#6d28d9',
        strokeWidth: 2,
        opacity: 0.8
      }
    };

    switch (table.shape) {
      case 'circle':
        return (
          <circle
            key={table.id}
            cx={table.x}
            cy={table.y}
            r={width / 2}
            {...commonProps}
          />
        );
      case 'hexagon':
        const hexPoints = [];
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * 2 * Math.PI;
          const x = table.x + (width / 2) * Math.cos(angle);
          const y = table.y + (height / 2) * Math.sin(angle);
          hexPoints.push(`${x},${y}`);
        }
        return (
          <polygon
            key={table.id}
            points={hexPoints.join(' ')}
            {...commonProps}
          />
        );
      default: // square and rectangle
        return (
          <rect
            key={table.id}
            x={table.x - width / 2}
            y={table.y - height / 2}
            width={width}
            height={height}
            rx={4}
            {...commonProps}
          />
        );
    }
  };

  const renderChair = (chair) => {
    return (
      <g key={chair.id} transform={`translate(${chair.x}, ${chair.y}) rotate(${chair.rotation})`}>
        <rect
          x={-8}
          y={-10}
          width={16}
          height={20}
          rx={2}
          fill="#4a5568"
          stroke="#2d3748"
          strokeWidth={1}
        />
        <rect
          x={-6}
          y={-12}
          width={12}
          height={4}
          rx={1}
          fill="#4a5568"
          stroke="#2d3748"
          strokeWidth={1}
        />
      </g>
    );
  };

  const renderGrid = () => {
    const gridSize = 20 * zoom;
    const canvasWidth = 1200;
    const canvasHeight = 800;
    const lines = [];

    for (let x = 0; x <= canvasWidth; x += gridSize) {
      lines.push(
        <line
          key={`vline-${x}`}
          x1={x}
          y1={0}
          x2={x}
          y2={canvasHeight}
          stroke="#e2e8f0"
          strokeWidth={1}
          opacity={0.5}
        />
      );
    }

    for (let y = 0; y <= canvasHeight; y += gridSize) {
      lines.push(
        <line
          key={`hline-${y}`}
          x1={0}
          y1={y}
          x2={canvasWidth}
          y2={y}
          stroke="#e2e8f0"
          strokeWidth={1}
          opacity={0.5}
        />
      );
    }

    return lines;
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Restaurant Floor Plan Designer</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={saveFloorPlan}
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              <Save size={16} />
              <span>Save Plan</span>
            </button>
            <button
              onClick={loadFloorPlan}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <Upload size={16} />
              <span>Load Plan</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r shadow-sm flex flex-col">
          {/* Floor Management */}
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Floor Management</h3>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveFloor(Math.max(0, activeFloor - 1))}
                  disabled={activeFloor === 0}
                  className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-sm font-medium text-gray-700">
                  {currentFloor.name}
                </span>
                <button
                  onClick={() => setActiveFloor(Math.min(floors.length - 1, activeFloor + 1))}
                  disabled={activeFloor === floors.length - 1}
                  className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={addFloor}
                className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                <Plus size={14} />
                <span>Add Floor</span>
              </button>
              <button
                onClick={removeFloor}
                disabled={floors.length <= 1}
                className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Minus size={14} />
                <span>Remove</span>
              </button>
            </div>
          </div>

          {/* Table Tools */}
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Add Tables</h3>
            <div className="grid grid-cols-2 gap-2">
              {tableShapes.map((shape) => (
                <button
                  key={shape.type}
                  onClick={() => setSelectedTool(`table-${shape.type}`)}
                  className={`flex items-center space-x-2 p-3 rounded-md border-2 transition-all ${
                    selectedTool === `table-${shape.type}`
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <shape.icon size={16} />
                  <span className="text-sm font-medium">{shape.name}</span>
                </button>
              ))}
            </div>
            {selectedTool && selectedTool.startsWith('table-') && (
              <div className="mt-3 p-3 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-700 font-medium">
                  Click on the canvas to place a {selectedTool.split('-')[1]} table
                </p>
              </div>
            )}
          </div>

          {/* Tools */}
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Tools</h3>
            <div className="space-y-2">
              <button
                onClick={() => setZoom(Math.min(2, zoom + 0.1))}
                className="w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              >
                <Plus size={16} />
                <span>Zoom In</span>
              </button>
              <button
                onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                className="w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              >
                <Minus size={16} />
                <span>Zoom Out</span>
              </button>
              {selectedElement && (
                <button
                  onClick={deleteSelectedElement}
                  className="w-full flex items-center space-x-2 p-2 rounded-md hover:bg-red-100 text-red-600"
                >
                  <Trash2 size={16} />
                  <span>Delete Selected</span>
                </button>
              )}
            </div>
          </div>

          {/* Floor Statistics */}
          <div className="p-4 flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Floor Statistics</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Tables:</span>
                <span className="font-medium">{currentFloor.tables.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Seats:</span>
                <span className="font-medium">
                  {currentFloor.tables.reduce((sum, table) => sum + table.seats, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 relative overflow-hidden">
          <div 
            className="w-full h-full overflow-auto bg-gray-50"
            style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}
          >
            <svg
              ref={canvasRef}
              width="1200"
              height="800"
              className="cursor-crosshair"
              onClick={handleCanvasClick}
              style={{ minWidth: '1200px', minHeight: '800px' }}
            >
              {/* Grid */}
              {renderGrid()}
              
              {/* Tables */}
              {currentFloor.tables.map(table => renderTable(table))}
              
              {/* Chairs */}
              {currentFloor.chairs.map(chair => renderChair(chair))}
              
              {/* Table Numbers */}
              {currentFloor.tables.map(table => (
                <text
                  key={`label-${table.id}`}
                  x={table.x}
                  y={table.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="pointer-events-none select-none"
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                >
                  T{currentFloor.tables.indexOf(table) + 1}
                </text>
              ))}
            </svg>
          </div>
          
          {/* Zoom indicator */}
          <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-md shadow-sm border">
            <span className="text-sm font-medium text-gray-700">
              Zoom: {Math.round(zoom * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlanDesigner;