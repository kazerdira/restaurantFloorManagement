import React from 'react';
import { Layers, Minus, Plus, RotateCw, Save, Trash2, Upload, LayoutGrid, Package, Home } from 'lucide-react';

import { SIZE_LABELS, TABLE_SHAPES, OBJECT_ICONS, OBJECT_LABELS, OBJECT_COLORS, WALL_ICONS, WALL_LABELS, FIXED_ELEMENT_ICONS, FIXED_ELEMENT_LABELS, FIXED_ELEMENT_COLORS } from '../constants';
import type {
  Chair,
  Floor,
  Table,
  ObjectType,
  WallType,
  FixedElementType
} from '../types';

interface SidebarProps {
  floors: Floor[];
  currentFloor?: Floor;
  onAddFloor: () => void;
  onRemoveFloor: () => void;
  onSwitchFloor: (floorId: string) => void;
  onRenameFloor: (floorId: string, newName: string) => void;
  onAddTable: (shape: Table['shape']) => void;
  onAddObject: (type: ObjectType) => void;
  onStartWallDrawing: (type: WallType) => void;
  onAddFixedElement: (type: FixedElementType) => void;
  onRotateTable: () => void;
  onDuplicateTable: () => void;
  onRemoveTable: () => void;
  onSave: () => void;
  onLoad: () => void;
  selectedTable: Table | null;
  selectedTableChairs: Chair[];
}

const sizeLabels = SIZE_LABELS;

export const Sidebar: React.FC<SidebarProps> = ({
  floors,
  currentFloor,
  onAddFloor,
  onRemoveFloor,
  onSwitchFloor,
  onRenameFloor,
  onAddTable,
  onAddObject,
  onStartWallDrawing,
  onAddFixedElement,
  onRotateTable,
  onDuplicateTable,
  onRemoveTable,
  onSave,
  onLoad,
  selectedTable,
  selectedTableChairs
}) => {
  const [editingFloorId, setEditingFloorId] = React.useState<string | null>(null);
  const [editingFloorName, setEditingFloorName] = React.useState<string>('');
  const [activeTab, setActiveTab] = React.useState<'tables' | 'objects' | 'roomLayout'>('tables');
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Focus input when editing starts
  React.useEffect(() => {
    if (editingFloorId && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingFloorId]);

  const handleDoubleClick = (floor: Floor) => {
    setEditingFloorId(floor.id);
    setEditingFloorName(floor.name);
  };

  const handleSaveFloorName = () => {
    if (editingFloorId && editingFloorName.trim()) {
      onRenameFloor(editingFloorId, editingFloorName.trim());
    }
    setEditingFloorId(null);
    setEditingFloorName('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveFloorName();
    } else if (e.key === 'Escape') {
      setEditingFloorId(null);
      setEditingFloorName('');
    }
  };

  return (
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
              onClick={onAddFloor}
              className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              title="Add New Floor"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={onRemoveFloor}
              disabled={floors.length <= 1}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Remove Current Floor"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-2 max-h-32 overflow-y-auto">
          {floors.map((floor) => (
            <div
              key={floor.id}
              className={`w-full p-3 rounded-lg transition-all flex items-center justify-between ${
                floor.isActive
                  ? 'bg-blue-100 text-blue-800 border border-blue-200 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100 border border-transparent'
              }`}
              onClick={() => {
                if (editingFloorId !== floor.id) {
                  onSwitchFloor(floor.id);
                }
              }}
              onDoubleClick={() => handleDoubleClick(floor)}
            >
              <div className="flex-1">
                {editingFloorId === floor.id ? (
                  <input
                    ref={inputRef}
                    type="text"
                    value={editingFloorName}
                    onChange={(e) => setEditingFloorName(e.target.value)}
                    onBlur={handleSaveFloorName}
                    onKeyDown={handleKeyDown}
                    className="w-full px-2 py-1 text-sm font-medium bg-white border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <div className="font-medium cursor-pointer">{floor.name}</div>
                )}
                <div className="text-xs text-gray-500 mt-0.5">
                  {floor.tables.length} tables, {floor.chairs.length} chairs
                </div>
              </div>
              {floor.isActive && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
            </div>
          ))}
        </div>
      </div>

      {/* Tabs for Tables, Objects, and Room Layout */}
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('tables')}
            className={`flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
              activeTab === 'tables'
                ? 'bg-white text-emerald-600 border-b-2 border-emerald-600'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Tables
          </button>
          <button
            onClick={() => setActiveTab('objects')}
            className={`flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
              activeTab === 'objects'
                ? 'bg-white text-purple-600 border-b-2 border-purple-600'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Package className="w-4 h-4" />
            Objects
          </button>
          <button
            onClick={() => setActiveTab('roomLayout')}
            className={`flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
              activeTab === 'roomLayout'
                ? 'bg-white text-gray-700 border-b-2 border-gray-700'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Home className="w-4 h-4" />
            Room
          </button>
        </div>
      </div>

      {/* Tables Tab Content */}
      {activeTab === 'tables' && (
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-md font-semibold text-gray-800 mb-3">Add Tables</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(TABLE_SHAPES).map(([shape, Icon]) => (
              <button
                key={shape}
                onClick={() => onAddTable(shape as Table['shape'])}
                className="p-3 border-2 border-gray-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-all flex flex-col items-center gap-2 hover:shadow-md"
              >
                <Icon className="w-6 h-6 text-emerald-600" />
                <span className="text-xs text-gray-700 capitalize font-medium">{shape}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Objects Tab Content */}
      {activeTab === 'objects' && (
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-md font-semibold text-gray-800 mb-3">Add Objects</h3>
          <div className="space-y-3">
            {(Object.keys(OBJECT_LABELS) as ObjectType[]).map((objectType) => {
              const Icon = OBJECT_ICONS[objectType];
              const colors = OBJECT_COLORS[objectType];
              const label = OBJECT_LABELS[objectType];
              
              return (
                <button
                  key={objectType}
                  onClick={() => onAddObject(objectType)}
                  className={`w-full p-4 ${colors.bg} border-2 ${colors.border} rounded-xl hover:scale-105 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl`}
                >
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Icon className={`w-6 h-6 ${colors.text}`} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 text-left">
                    <span className={`text-base font-bold ${colors.text}`}>{label}</span>
                    <div className="text-xs text-white/80 mt-0.5">Click to add to floor</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Room Layout Tab Content */}
      {activeTab === 'roomLayout' && (
        <div className="p-4 border-b border-gray-200">
          {/* Walls Section */}
          <div className="mb-6">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Draw Walls</h3>
            <div className="space-y-2">
              {(['wall', 'door', 'window'] as WallType[]).map((wallType) => {
                const Icon = WALL_ICONS[wallType];
                const label = WALL_LABELS[wallType];
                
                const colorClasses = {
                  wall: 'bg-gradient-to-br from-gray-600 to-gray-800 border-gray-700 text-white hover:from-gray-700 hover:to-gray-900',
                  door: 'bg-gradient-to-br from-amber-500 to-amber-700 border-amber-600 text-white hover:from-amber-600 hover:to-amber-800',
                  window: 'bg-gradient-to-br from-blue-500 to-blue-700 border-blue-600 text-white hover:from-blue-600 hover:to-blue-800'
                };
                
                return (
                  <button
                    key={wallType}
                    onClick={() => onStartWallDrawing(wallType)}
                    className={`w-full p-3 border-2 rounded-lg transition-all flex items-center gap-3 shadow-md hover:shadow-lg ${colorClasses[wallType]}`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                    <span className="text-sm font-semibold">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Fixed Elements Section */}
          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-3">Add Elements</h3>
            <div className="space-y-2">
              {(['pillar', 'column', 'stairs'] as FixedElementType[]).map((elementType) => {
                const Icon = FIXED_ELEMENT_ICONS[elementType];
                const colors = FIXED_ELEMENT_COLORS[elementType];
                const label = FIXED_ELEMENT_LABELS[elementType];
                
                return (
                  <button
                    key={elementType}
                    onClick={() => onAddFixedElement(elementType)}
                    className={`w-full p-3 ${colors.bg} border-2 ${colors.border} rounded-lg hover:scale-105 transition-all flex items-center gap-3 shadow-md hover:shadow-lg`}
                  >
                    <div className="bg-white/10 p-1.5 rounded">
                      <Icon className={`w-5 h-5 ${colors.text}`} strokeWidth={2.5} />
                    </div>
                    <span className={`text-sm font-semibold ${colors.text}`}>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {selectedTable && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-md font-semibold text-gray-800">Table Properties</h3>
            <div className="flex gap-1">
              <button
                onClick={onRotateTable}
                className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                title="Rotate Table"
              >
                <RotateCw className="w-4 h-4" />
              </button>
              <button
                onClick={onDuplicateTable}
                className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors"
                title="Duplicate Table"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                onClick={onRemoveTable}
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
                <div className="font-semibold text-gray-800">{sizeLabels[selectedTable.size]}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-400">Seats</div>
                <div className="font-semibold text-gray-800">{selectedTableChairs.length}</div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
              <p className="text-xs text-blue-700">
                💡 <span className="font-semibold">Tip:</span> Use the <span className="font-semibold">Manage Chairs</span> button in the toolbar above to add or remove chairs from each side of the table.
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
              <div className="font-bold text-lg text-emerald-600">
                {currentFloor?.tables.length ?? 0}
              </div>
            </div>
            <div>
              <div className="text-gray-600">Total Seats</div>
              <div className="font-bold text-lg text-amber-600">
                {currentFloor?.chairs.length ?? 0}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onSave}
            className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Save className="w-4 h-4" />
            Save
          </button>
          <button
            onClick={onLoad}
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Upload className="w-4 h-4" />
            Load
          </button>
        </div>
      </div>
    </div>
  );
};

