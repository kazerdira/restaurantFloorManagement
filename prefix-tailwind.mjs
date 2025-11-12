// Script to add 'rfp-' prefix to all Tailwind classes
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Tailwind utility classes that need prefixing
const tailwindClasses = [
  // Layout
  'flex', 'flex-1', 'flex-col', 'flex-row', 'flex-wrap', 'grid', 'block', 'inline', 'inline-block', 'hidden',
  'overflow-hidden', 'overflow-auto', 'overflow-scroll', 'relative', 'absolute', 'fixed', 'sticky',
  'inset-0', 'top-0', 'right-0', 'bottom-0', 'left-0',
  
  // Spacing
  'p-\\d+', 'm-\\d+', 'px-\\d+', 'py-\\d+', 'pt-\\d+', 'pb-\\d+', 'pl-\\d+', 'pr-\\d+',
  'mx-\\d+', 'my-\\d+', 'mt-\\d+', 'mb-\\d+', 'ml-\\d+', 'mr-\\d+',
  'gap-\\d+', 'space-x-\\d+', 'space-y-\\d+',
  
  // Sizing
  'w-\\d+', 'h-\\d+', 'w-full', 'h-full', 'w-screen', 'h-screen', 'w-auto', 'h-auto',
  'min-w-\\d+', 'min-h-\\d+', 'max-w-\\d+', 'max-h-\\d+',
  
  // Typography
  'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl',
  'font-normal', 'font-medium', 'font-semibold', 'font-bold',
  'text-left', 'text-center', 'text-right',
  'text-gray-\\d+', 'text-blue-\\d+', 'text-red-\\d+', 'text-green-\\d+', 'text-purple-\\d+',
  'text-white', 'text-black',
  'uppercase', 'lowercase', 'capitalize',
  'tracking-wide', 'tracking-wider', 'tracking-widest',
  
  // Colors
  'bg-gray-\\d+', 'bg-blue-\\d+', 'bg-red-\\d+', 'bg-green-\\d+', 'bg-purple-\\d+',
  'bg-white', 'bg-black', 'bg-transparent',
  'bg-opacity-\\d+',
  
  // Border
  'border', 'border-\\d+', 'border-t', 'border-b', 'border-l', 'border-r',
  'border-gray-\\d+', 'border-blue-\\d+', 'border-red-\\d+', 'border-green-\\d+',
  'border-solid', 'border-dashed', 'border-dotted',
  'rounded', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-full',
  
  // Effects
  'shadow', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl',
  'opacity-\\d+',
  'cursor-pointer', 'cursor-default', 'cursor-move', 'cursor-not-allowed',
  'pointer-events-none', 'pointer-events-auto',
  
  // Animation
  'animate-pulse', 'animate-spin', 'animate-bounce',
  'transition', 'transition-all', 'duration-\\d+',
  
  // Alignment
  'items-center', 'items-start', 'items-end',
  'justify-center', 'justify-start', 'justify-end', 'justify-between', 'justify-around',
  'content-center', 'content-start', 'content-end',
  
  // Display
  'drop-shadow-lg',
];

function prefixTailwindClasses(content) {
  let modifiedContent = content;
  
  // Match className="..." and className={...}
  const classNameRegex = /className=["'{`]([^"'`}]+)["'}]/g;
  
  modifiedContent = content.replace(classNameRegex, (match, classes) => {
    const prefixedClasses = classes
      .split(' ')
      .map(cls => {
        cls = cls.trim();
        if (!cls) return cls;
        
        // Skip if already prefixed
        if (cls.startsWith('rfp-')) return cls;
        
        // Check if it matches any Tailwind pattern
        for (const pattern of tailwindClasses) {
          const regex = new RegExp(`^${pattern}$`);
          if (regex.test(cls)) {
            return `rfp-${cls}`;
          }
        }
        
        // Return as-is if not a Tailwind class
        return cls;
      })
      .join(' ');
    
    return match.replace(classes, prefixedClasses);
  });
  
  return modifiedContent;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const modified = prefixTailwindClasses(content);
  
  if (content !== modified) {
    fs.writeFileSync(filePath, modified, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
    return true;
  }
  return false;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let count = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      count += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
        count++;
      }
    }
  }
  
  return count;
}

// Run the script
const srcDir = path.join(__dirname, 'src');
console.log('🔄 Adding rfp- prefix to Tailwind classes...\n');
const updatedFiles = processDirectory(srcDir);
console.log(`\n✅ Done! Updated ${updatedFiles} files.`);
