# 🎨 How to Import CSS in Your App

## ✅ Minimal CSS - No Tailwind Conflicts!

The package now includes `dist/style.css` (only **0.95KB**) with component-specific styles only.

**✅ No Tailwind CSS bundled** - Won't conflict with your app's styling!  
**✅ No global resets** - Won't affect your app's layout!  
**✅ Only component styles** - Slider animations and hexagon shapes!

---

## 📦 Installation

```bash
npm install git+https://github.com/kazerdira/restaurantFloorManagement.git --force
```

---

## 🎨 Import the CSS

You **MUST** import the CSS file in your app for proper styling!

### **Option 1: In your main entry file** (Recommended)

```tsx
// src/main.tsx or src/index.tsx or src/App.tsx
import 'restaurant-floor-planner/dist/style.css';
```

### **Option 2: In the specific page/component**

```tsx
// src/pages/CreateRestaurant.tsx
import 'restaurant-floor-planner/dist/style.css';
import { RestaurantFloorPlanner } from 'restaurant-floor-planner';

function CreateRestaurant() {
  return <RestaurantFloorPlanner onSave={(data) => console.log(data)} />;
}
```

### **Option 3: In your global CSS file**

```css
/* src/index.css or src/App.css */
@import 'restaurant-floor-planner/dist/style.css';
```

---

## ✅ Complete Example

```tsx
// src/pages/CreateRestaurant.tsx
import 'restaurant-floor-planner/dist/style.css'; // ← Import CSS!
import { RestaurantFloorPlanner } from 'restaurant-floor-planner';
import type { Floor } from 'restaurant-floor-planner';

export default function CreateRestaurantPage() {
  const handleSave = async (floorData: Floor) => {
    console.log('Saving floor plan:', floorData);
    
    // Save to your API
    await fetch('http://your-api.com/restaurants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ floorPlan: floorData }),
    });
    
    alert('Floor plan saved!');
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <RestaurantFloorPlanner onSave={handleSave} />
    </div>
  );
}
```

---

## 🎨 What the CSS Includes:

- ✅ **Custom slider styles** with purple gradient (0.3KB)
- ✅ **Hexagon shape utility** for hexagonal tables (0.1KB)
- ✅ **Hover and active animations** for sliders (0.5KB)

**Total: 0.95KB minified!**

**What's NOT included (your app provides these):**
- ❌ No Tailwind CSS (use your app's Tailwind)
- ❌ No global resets
- ❌ No color utilities
- ❌ No layout utilities

---

## 🐛 If Colors Still Look Wrong:

### Check CSS Import Order
Make sure the package CSS is imported **after** your app's CSS:

```tsx
// ❌ Wrong order
import 'restaurant-floor-planner/dist/style.css';
import './App.css'; // Your styles override package styles

// ✅ Correct order
import './App.css'; // Your styles first
import 'restaurant-floor-planner/dist/style.css'; // Package styles last
```

### Check for CSS Conflicts
If your app has conflicting Tailwind classes, you might need to:

1. **Prefix the package CSS** (advanced)
2. **Use CSS modules** (advanced)
3. **Increase specificity** (add `!important` to your styles)

---

## ✅ That's It!

Import the CSS file and everything should look perfect with the original purple/gradient colors! 🎨
