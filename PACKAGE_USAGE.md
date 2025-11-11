# 📦 Restaurant Floor Planner - Package Usage Guide

## ✅ Package is Ready!

You can now install this package in your other projects!

---

## 🚀 Installation

### Option 1: Install from GitHub (Recommended)
```bash
npm install git+https://github.com/kazerdira/restaurantFloorManagement.git
```

### Option 2: Install Locally (for development)
```bash
# In this project
npm link

# In your other project
npm link restaurant-floor-planner
```

---

## 📖 Usage Examples

### 1️⃣ **Create/Edit Restaurant Floor Plan (Admin Panel)**

```tsx
import { RestaurantFloorPlanner } from 'restaurant-floor-planner';
import type { Floor } from 'restaurant-floor-planner';

function AdminPage() {
  const handleSave = async (floorData: Floor) => {
    // Save to YOUR database
    await fetch('https://your-api.com/restaurants', {
      method: 'POST',
      body: JSON.stringify(floorData),
    });
  };

  return (
    <div>
      <h1>Create Restaurant Floor Plan</h1>
      <RestaurantFloorPlanner onSave={handleSave} />
    </div>
  );
}
```

---

### 2️⃣ **Show 3D Viewer with Auto-Rotation (Public Website)**

```tsx
import { Preview3DModal } from 'restaurant-floor-planner';
import type { Floor } from 'restaurant-floor-planner';
import { useState, useEffect } from 'react';

function RestaurantShowcase() {
  const [floor, setFloor] = useState<Floor | null>(null);

  useEffect(() => {
    // Load from YOUR database
    fetch('https://your-api.com/restaurants/123')
      .then(res => res.json())
      .then(data => setFloor(data.floorPlan));
  }, []);

  if (!floor) return <div>Loading...</div>;

  return (
    <Preview3DModal
      floor={floor}
      isOpen={true}
      onClose={() => {}}
      autoRotate={true}  // ✅ Auto-rotating 3D view
    />
  );
}
```

---

### 3️⃣ **Static 3D View with Table Click (Booking Page)**

```tsx
import { Preview3DModal } from 'restaurant-floor-planner';
import type { Floor } from 'restaurant-floor-planner';

function BookingPage() {
  const [floor, setFloor] = useState<Floor | null>(null);
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableClick = (table: any) => {
    console.log('Table clicked:', table);
    setSelectedTable(table);
    // Show YOUR booking form
    showBookingModal(table);
  };

  return (
    <div>
      <h1>Book a Table</h1>
      <Preview3DModal
        floor={floor}
        isOpen={true}
        onClose={() => {}}
        autoRotate={false}  // ✅ Static view
        onTableClick={handleTableClick}  // ✅ Handle clicks
      />
      
      {selectedTable && (
        <BookingForm table={selectedTable} />
      )}
    </div>
  );
}
```

---

### 4️⃣ **Edit Existing Floor Plan (Restaurant Owner)**

```tsx
import { RestaurantFloorPlanner } from 'restaurant-floor-planner';
import type { Floor } from 'restaurant-floor-planner';

function EditFloorPlan({ restaurantId }: { restaurantId: string }) {
  const [existingFloor, setExistingFloor] = useState<Floor | null>(null);

  useEffect(() => {
    // Load existing floor plan
    fetch(`https://your-api.com/restaurants/${restaurantId}`)
      .then(res => res.json())
      .then(data => setExistingFloor(data.floorPlan));
  }, [restaurantId]);

  const handleUpdate = async (updatedFloor: Floor) => {
    // Update in YOUR database
    await fetch(`https://your-api.com/restaurants/${restaurantId}`, {
      method: 'PUT',
      body: JSON.stringify({ floorPlan: updatedFloor }),
    });
  };

  if (!existingFloor) return <div>Loading...</div>;

  return (
    <RestaurantFloorPlanner
      initialFloor={existingFloor}  // ✅ Load existing data
      onSave={handleUpdate}
    />
  );
}
```

---

### 5️⃣ **Mobile App (React Native with WebView)**

```tsx
import { WebView } from 'react-native-webview';

function MobileFloorViewer() {
  return (
    <WebView
      source={{ uri: 'https://your-web-admin.com/floor-viewer?id=123' }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
    />
  );
}
```

---

## 📦 What's Exported

```typescript
// Components
import { RestaurantFloorPlanner } from 'restaurant-floor-planner';
import { Preview3DModal } from 'restaurant-floor-planner';

// Types
import type { 
  Floor, 
  Table, 
  Chair, 
  Wall, 
  FixedElement,
  FloorObject 
} from 'restaurant-floor-planner';
```

---

## 🎨 Component Props

### **RestaurantFloorPlanner**
```typescript
{
  initialFloor?: Floor;           // Load existing floor plan
  onSave: (floor: Floor) => void; // Called when user saves
}
```

### **Preview3DModal**
```typescript
{
  floor: Floor;                   // Required: floor plan data
  isOpen: boolean;                // Show/hide modal
  onClose: () => void;            // Close callback
  autoRotate?: boolean;           // Auto-rotate camera (default: false)
  onTableClick?: (table) => void; // Handle table clicks
}
```

---

## 🏗️ Floor Data Structure

```typescript
type Floor = {
  id: string;
  name: string;
  isActive: boolean;
  tables: Table[];
  chairs: Chair[];
  walls: Wall[];
  objects: FloorObject[];
  fixedElements: FixedElement[];
};

type Table = {
  id: string;
  name: string;
  shape: 'square' | 'circle' | 'rectangle' | 'hexagon';
  size: 'small' | 'medium' | 'large';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
};
```

---

## 🎯 Common Use Cases

| Scenario | Component | Key Props |
|----------|-----------|-----------|
| Create new floor plan | `RestaurantFloorPlanner` | `onSave` |
| Edit existing plan | `RestaurantFloorPlanner` | `initialFloor`, `onSave` |
| Show rotating 3D | `Preview3DModal` | `autoRotate={true}` |
| Static 3D for booking | `Preview3DModal` | `autoRotate={false}`, `onTableClick` |
| Mobile view | WebView | Load your web page |

---

## 📱 Projects That Can Use This

1. **Web Admin Panel** - Create and edit floor plans
2. **Restaurant Owner Dashboard** - Manage their floor layouts
3. **Public Website** - Show 3D restaurant preview
4. **Booking System** - Interactive table selection
5. **Mobile App** - Via WebView or React Native

---

## 🔧 Troubleshooting

### Issue: Package not found
```bash
# Make sure you built it first
npm run build:lib

# Then link or install
npm link
```

### Issue: Types not working
```bash
# Install type dependencies in your project
npm install --save-dev @types/react @types/react-dom
```

### Issue: Styles not loading
```tsx
// Import the CSS in your project
import 'restaurant-floor-planner/dist/style.css';
```

---

## 🎉 You're Ready!

Your package is built and ready to use in:
- ✅ Web admin panels
- ✅ Restaurant owner dashboards  
- ✅ Public websites
- ✅ Mobile apps

Just install it and import the components you need!
