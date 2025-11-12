# Restaurant Floor Planner - Next.js & Expo Usage Guide

## ✅ Recent Fixes (Latest Update)

### 1. **Canvas Overflow Issue - FIXED** ✅
**Problem:** Items dropped at the bottom of the canvas were not visible.

**Solution:** Changed canvas wrapper from `rfp-overflow-hidden` to `rfp-overflow-auto`. Now the canvas properly scrolls when content extends beyond the visible area.

### 2. **Height Adaptation - FIXED** ✅
**Problem:** Component used `rfp-h-screen` (100vh) causing layout breaks when embedded in containers.

**Solution:** Component now defaults to `rfp-h-full` (100% of parent). Use optional `fullScreen` prop for standalone mode.

### 3. **CSS Class Prefixing - FIXED** ✅
**Problem:** Some Tailwind classes were missing the `rfp-` prefix, causing conflicts with host app styles.

**Solution:** Added `rfp-` prefix to all Tailwind classes including:
- Canvas container classes (`rfp-w-full`, `rfp-h-full`, `rfp-relative`)
- Cursor classes (`rfp-cursor-crosshair`, `rfp-cursor-grabbing`, `rfp-cursor-default`)
- Sidebar gradient (`rfp-bg-gradient-to-r`, `rfp-from-blue-600`, `rfp-to-purple-600`)
- Pseudo-classes (`hover:rfp-*`, `disabled:rfp-*`, `focus:rfp-*`)
- Transitions (`rfp-transition-colors`)
- Overflow (`rfp-overflow-y-auto`, `rfp-overflow-auto`)

---

## 📦 Installation

```bash
# Install from GitHub
npm install git+https://github.com/kazerdira/restaurantFloorManagement.git --force

# Or update existing installation
npm update restaurant-floor-planner
```

---

## 🚀 Next.js Usage

### Basic Setup

```jsx
// app/restaurant-creator/page.tsx or pages/restaurant-creator.tsx
'use client'; // Required for Next.js 13+ App Router

import { useState } from 'react';
import RestaurantFloorPlanner from 'restaurant-floor-planner';
import 'restaurant-floor-planner/dist/style.css';

export default function RestaurantCreatorPage() {
  const [floorPlanData, setFloorPlanData] = useState(null);

  const handleSave = (data) => {
    console.log('Floor plan saved:', data);
    setFloorPlanData(data);
    
    // Send to your API
    fetch('/api/restaurants/floor-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  };

  return (
    <div className="h-screen w-full">
      <RestaurantFloorPlanner onSave={handleSave} />
    </div>
  );
}
```

### Embedded in Container (Card, Modal, etc.)

```jsx
'use client';

import RestaurantFloorPlanner from 'restaurant-floor-planner';
import 'restaurant-floor-planner/dist/style.css';

export default function RestaurantCreatorCard() {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Design Your Restaurant Layout</h2>
      </div>
      <div className="card-content" style={{ height: '700px' }}>
        {/* Component will adapt to 700px height */}
        <RestaurantFloorPlanner 
          onSave={(data) => console.log(data)} 
        />
      </div>
    </div>
  );
}
```

### Full Screen Mode

```jsx
'use client';

import RestaurantFloorPlanner from 'restaurant-floor-planner';
import 'restaurant-floor-planner/dist/style.css';

export default function FullScreenPlanner() {
  return (
    <div className="fixed inset-0">
      {/* Takes full viewport height (100vh) */}
      <RestaurantFloorPlanner 
        fullScreen={true} 
        onSave={(data) => console.log(data)} 
      />
    </div>
  );
}
```

---

## 📱 React Native / Expo Usage

**⚠️ Important Note:** This package uses web-based technologies (React DOM, CSS, SVG, Canvas) and is **not compatible with React Native/Expo** out of the box.

### Options for Expo:

#### Option 1: Use Web View (Recommended)
Wrap the package in a web view for Expo apps:

```jsx
import { WebView } from 'react-native-webview';

export default function FloorPlannerScreen() {
  return (
    <WebView
      source={{ uri: 'https://your-nextjs-app.com/restaurant-creator' }}
      style={{ flex: 1 }}
    />
  );
}
```

#### Option 2: Use expo-web
If using Expo for web (not native), the package works normally:

```jsx
// This works on Expo Web only (not iOS/Android)
import RestaurantFloorPlanner from 'restaurant-floor-planner';
import 'restaurant-floor-planner/dist/style.css';

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <RestaurantFloorPlanner onSave={(data) => console.log(data)} />
    </div>
  );
}
```

---

## 🎨 Styling & Customization

### No Style Conflicts
The package uses **scoped Tailwind CSS** with `rfp-` prefix. All styles are isolated to `.restaurant-floor-planner` class.

**Your app's Tailwind won't affect the component, and vice versa.**

### Custom Container Styling

```jsx
<div 
  className="your-custom-class"
  style={{ 
    height: '800px', 
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden' // Optional: prevents scrollbars on container
  }}
>
  <RestaurantFloorPlanner onSave={handleSave} />
</div>
```

---

## 🔧 Props

```typescript
interface RestaurantFloorPlannerProps {
  fullScreen?: boolean; // Default: false
  // More props to be added in future versions
}
```

### `fullScreen` (optional)
- **Type:** `boolean`
- **Default:** `false`
- **Description:** 
  - `false`: Component uses `rfp-h-full` (adapts to parent container)
  - `true`: Component uses `rfp-h-screen` (takes full viewport height)

---

## 📊 Data Structure

The `onSave` callback receives this structure:

```typescript
{
  floors: [
    {
      id: string;
      name: string;
      isActive: boolean;
      tables: Array<{
        id: string;
        name: string;
        shape: 'circle' | 'rectangle' | 'square';
        x: number;
        y: number;
        width: number;
        height: number;
        rotation: number;
      }>;
      chairs: Array<{
        id: string;
        tableId: string;
        position: 'top' | 'bottom' | 'left' | 'right';
        x: number;
        y: number;
      }>;
      walls: Array<{
        id: string;
        type: 'full' | 'half' | 'glass';
        startX: number;
        startY: number;
        endX: number;
        endY: number;
        thickness: number;
      }>;
      objects: Array<{
        id: string;
        type: string;
        name: string;
        x: number;
        y: number;
        width: number;
        height: number;
        rotation: number;
      }>;
      fixedElements: Array<{
        id: string;
        type: string;
        x: number;
        y: number;
        width: number;
        height: number;
      }>;
    }
  ];
}
```

---

## ⚠️ Common Issues & Solutions

### Issue 1: "Items dropped at bottom are not visible"
**✅ FIXED** - Canvas now has `rfp-overflow-auto` for scrolling.

**If still experiencing issues:**
1. Update package: `npm install git+https://github.com/kazerdira/restaurantFloorManagement.git --force`
2. Clear build cache: `rm -rf .next && npm run dev` (Next.js)
3. Ensure parent container has defined height

### Issue 2: "Buttons look different/broken"
**✅ FIXED** - All Tailwind classes now have `rfp-` prefix.

**If still experiencing issues:**
1. Update package (see above)
2. Check browser console for errors
3. Ensure CSS is imported: `import 'restaurant-floor-planner/dist/style.css'`
4. Verify no global CSS is overriding component styles

### Issue 3: "Component takes full screen even in container"
**✅ FIXED** - Default is now `rfp-h-full` (adapts to parent).

**If still experiencing issues:**
1. Remove `fullScreen={true}` prop if set
2. Ensure parent container has `height` set (e.g., `height: 700px` or `h-[700px]`)

### Issue 4: "Styles conflict with my app's Tailwind"
**✅ SHOULD NOT HAPPEN** - Package uses scoped Tailwind with `rfp-` prefix.

**If experiencing conflicts:**
1. Verify package version is latest
2. Check if custom CSS is using `.restaurant-floor-planner` class
3. Inspect elements to confirm `rfp-` prefix on classes

---

## 🐛 Debugging

### Check Package Version
```bash
npm list restaurant-floor-planner
```

### View Imported CSS
Open browser DevTools → Sources tab → Find `style.css` from `restaurant-floor-planner`

Should see classes like:
```css
.restaurant-floor-planner .rfp-flex { display: flex; }
.restaurant-floor-planner .rfp-h-full { height: 100%; }
.restaurant-floor-planner .rfp-overflow-auto { overflow: auto; }
```

### Console Logs
Enable React DevTools to check component props:
```jsx
<RestaurantFloorPlanner 
  onSave={(data) => {
    console.log('Save triggered:', data);
  }}
/>
```

---

## 📝 Package Information

- **Name:** `restaurant-floor-planner`
- **Repository:** `kazerdira/restaurantFloorManagement`
- **Bundle Size:**
  - ES Module: 151.25 KB (27.29 KB gzipped)
  - UMD: 100.22 KB (22.99 KB gzipped)
  - CSS: 20.06 KB (3.10 KB gzipped)
- **Dependencies:** React 18/19, Three.js, lucide-react (all externalized)

---

## ✅ Production Ready Checklist

- [x] Scoped Tailwind CSS (zero conflicts)
- [x] React 18 & 19 support
- [x] Proper overflow handling (scrollable canvas)
- [x] Container-adaptive height
- [x] All classes prefixed with `rfp-`
- [x] Next.js compatible
- [x] TypeScript definitions included
- [x] Tree-shaken CSS (only used utilities)
- [x] Source maps included

---

## 🚀 Deployment

### Next.js Deployment
The package works with:
- ✅ Vercel
- ✅ Netlify
- ✅ AWS Amplify
- ✅ Self-hosted Node.js

**No special configuration needed.** Just import and use.

### Environment Variables
No environment variables required. The package is self-contained.

---

## 📞 Support

If you encounter issues:
1. Update to latest version
2. Clear build cache
3. Check this guide for solutions
4. Review browser console for errors
5. Inspect element classes (should have `rfp-` prefix)

---

**Last Updated:** November 12, 2025  
**Latest Commit:** d044d3c - Canvas overflow and unprefixed class fixes
