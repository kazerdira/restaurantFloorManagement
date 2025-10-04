import React from 'react';
import { Layers, Minus, Plus, RotateCw, Save, Trash2, Upload } from 'lucide-react';

import { SIZE_LABELS, TABLE_SHAPES } from '../constants';
import type {
  Chair,
  Floor,
  Table
} from '../types';

interface SidebarProps {
  floors: Floor[];
  currentFloor?: Floor;
  onAddFloor: () => void;
  onRemoveFloor: () => void;
  onSwitchFloor: (floorId: string) => void;
  onRenameFloor: (floorId: string, newName: string) => void;
  onAddTable: (shape: Table['shape']) => void;
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
