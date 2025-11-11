// Import component-specific styles only (no Tailwind to avoid conflicts)
import './components.css';

// Main Components - These are the ones you'll use in your projects
export { default as RestaurantFloorPlanner } from './RestaurantFloorPlanner';
export { Preview3DModal } from './floorPlanner/components/Preview3DModal';

// Types - Import these to get TypeScript support
export type {
  Floor,
  Table,
  Chair,
  Wall,
  FixedElement,
  FloorObject,
} from './floorPlanner/types';
