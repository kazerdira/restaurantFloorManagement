import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { X, RotateCcw, ZoomIn, ZoomOut, Maximize2, Move3d, Grid, Layers } from 'lucide-react';
import type { Floor } from '../types';

interface Preview3DModalProps {
  floor: Floor;
  isOpen: boolean;
  onClose: () => void;
}

// Predefined camera positions for smooth transitions
const CAMERA_VIEWS = {
  default: { 
    position: { x: 1050, y: 800, z: 1050 }, // Slightly more zoomed out
    target: { x: 0, y: 100, z: 0 },
    name: 'Default',
    icon: '🏠'
  },
  top: { 
    position: { x: 0, y: 1200, z: 1 }, // Higher for better top view
    target: { x: 0, y: 0, z: 0 },
    name: 'Top View',
    icon: '⬇'
  },
  front: { 
    position: { x: 0, y: 300, z: 1000 }, // Further back
    target: { x: 0, y: 100, z: 0 },
    name: 'Front',
    icon: '⬆'
  },
  side: { 
    position: { x: 1000, y: 300, z: 0 }, // Further to the side
    target: { x: 0, y: 100, z: 0 },
    name: 'Side',
    icon: '➡'
  },
  corner: { 
    position: { x: -900, y: 700, z: -900 }, // More zoomed out corner
    target: { x: 0, y: 100, z: 0 },
    name: 'Corner',
    icon: '↖'
  }
};

export const Preview3DModal: React.FC<Preview3DModalProps> = ({ floor, isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [autoRotate, setAutoRotate] = useState(false);
  const [currentView, setCurrentView] = useState<keyof typeof CAMERA_VIEWS>('default');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const rotationSpeedRef = useRef(0.003);
  const transitionRef = useRef<{ 
    startPos: THREE.Vector3; 
    endPos: THREE.Vector3;
    startTarget: THREE.Vector3;
    endTarget: THREE.Vector3;
    progress: number;
  } | null>(null);

  // Smooth camera transition function
  const smoothCameraTransition = (viewKey: keyof typeof CAMERA_VIEWS) => {
    if (!cameraRef.current || isTransitioning) return;
    
    const view = CAMERA_VIEWS[viewKey];
    const camera = cameraRef.current;
    
    transitionRef.current = {
      startPos: camera.position.clone(),
      endPos: new THREE.Vector3(view.position.x, view.position.y, view.position.z),
      startTarget: new THREE.Vector3(0, 100, 0),
      endTarget: new THREE.Vector3(view.target.x, view.target.y, view.target.z),
      progress: 0
    };
    
    setIsTransitioning(true);
    setCurrentView(viewKey);
    setAutoRotate(false);
  };

  // Manual rotation controls
  const rotateCamera = (direction: 'left' | 'right' | 'up' | 'down') => {
    if (!cameraRef.current || isTransitioning) return;
    
    const camera = cameraRef.current;
    const radius = Math.sqrt(camera.position.x ** 2 + camera.position.z ** 2);
    const currentAngle = Math.atan2(camera.position.z, camera.position.x);
    
    switch(direction) {
      case 'left':
        const leftAngle = currentAngle + 0.2;
        camera.position.x = radius * Math.cos(leftAngle);
        camera.position.z = radius * Math.sin(leftAngle);
        break;
      case 'right':
        const rightAngle = currentAngle - 0.2;
        camera.position.x = radius * Math.cos(rightAngle);
        camera.position.z = radius * Math.sin(rightAngle);
        break;
      case 'up':
        camera.position.y = Math.min(camera.position.y + 50, 900);
        break;
      case 'down':
        camera.position.y = Math.max(camera.position.y - 50, 100);
        break;
    }
    
    camera.lookAt(0, 100, 0);
  };

  const zoomCamera = (factor: number) => {
    if (!cameraRef.current || isTransitioning) return;
    cameraRef.current.position.multiplyScalar(factor);
    cameraRef.current.lookAt(0, 100, 0);
  };

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    // Scene setup with light modern theme
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdee6ef); // Soft blue-grey for pleasant atmosphere
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      10000
    );
    camera.position.set(1050, 800, 1050); // Slightly more zoomed out default view
    camera.lookAt(0, 100, 0); // Looking at mid-level
    cameraRef.current = camera;

    // Renderer with advanced settings
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Add environment map for better reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0xffffff);
    const envTexture = pmremGenerator.fromScene(envScene).texture;
    scene.environment = envTexture;
    pmremGenerator.dispose();

    // Professional lighting setup
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
    mainLight.position.set(400, 600, 300);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 4096;
    mainLight.shadow.mapSize.height = 4096;
    mainLight.shadow.camera.left = mainLight.shadow.camera.bottom = -700;
    mainLight.shadow.camera.right = mainLight.shadow.camera.top = 700;
    mainLight.shadow.bias = -0.0001;
    scene.add(mainLight);
    
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-400, 400, -300);
    scene.add(fillLight);
    
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.2);
    rimLight.position.set(0, 300, -500);
    scene.add(rimLight);

    // Modern floor
    const floorMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1200, 1200),
      new THREE.MeshStandardMaterial({ color: 0xd0d0d5, roughness: 0.8, metalness: 0.2 }) // Medium grey
    );
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    const grid = new THREE.GridHelper(3000, 150, 0xa0a0a8, 0xb8b8c0); // Much larger grid (3000x3000)
    grid.position.y = 1;
    scene.add(grid);

    // WALLS - Premium styling
    floor.walls.forEach(wall => {
      const length = Math.sqrt(Math.pow(wall.endX - wall.startX, 2) + Math.pow(wall.endY - wall.startY, 2));
      const angle = Math.atan2(wall.endY - wall.startY, wall.endX - wall.startX);
      const wallHeight = wall.type === 'window' ? 80 : 120; // Windows are 80, walls and doors are 120
      const baseX = wall.startX + (wall.endX - wall.startX) / 2 - 400;
      const baseZ = -(wall.startY + (wall.endY - wall.startY) / 2 - 400);
      
      if (wall.type === 'door') {
        // === RESTAURANT DOUBLE GLASS DOOR ===
        const doorGroup = new THREE.Group();
        const doorWidth = length; // Full wall width
        const doorHeight = wallHeight; // Full wall height
        const doorThickness = wall.thickness * 0.8;

        // === FRAME (dark wood or metal) ===
        const frameMat = new THREE.MeshStandardMaterial({
          color: 0x3a2e25, // dark stained wood
          roughness: 0.9,
          metalness: 0.0,
        });

        const frameThickness = 8;

        // Frame sides, top, and bottom - adjusted to fit within wall height
        const topFrame = new THREE.Mesh(
          new THREE.BoxGeometry(doorWidth, frameThickness, wall.thickness + 4),
          frameMat
        );
        topFrame.position.y = doorHeight / 2 - frameThickness / 2;
        doorGroup.add(topFrame);

        const bottomFrame = new THREE.Mesh(
          new THREE.BoxGeometry(doorWidth, frameThickness, wall.thickness + 4),
          frameMat
        );
        bottomFrame.position.y = -doorHeight / 2 + frameThickness / 2;
        doorGroup.add(bottomFrame);

        const leftFrame = new THREE.Mesh(
          new THREE.BoxGeometry(frameThickness, doorHeight, wall.thickness + 4),
          frameMat
        );
        leftFrame.position.x = -doorWidth / 2 + frameThickness / 2;
        doorGroup.add(leftFrame);

        const rightFrame = leftFrame.clone();
        rightFrame.position.x = doorWidth / 2 - frameThickness / 2;
        doorGroup.add(rightFrame);

        // === LEFT + RIGHT DOOR PANELS ===
        const doorMat = new THREE.MeshStandardMaterial({
          color: 0x4e342e, // warm brown
          roughness: 0.85,
          metalness: 0.0,
        });

        const glassMat = new THREE.MeshStandardMaterial({
          color: 0x9eb3b5, // subtle bluish-gray tint
          transparent: true,
          opacity: 0.5,     // semi-transparent
          roughness: 0.95,  // frosted effect
          metalness: 0.0,   // no mirror reflection
        });

        const singleDoorWidth = (doorWidth - frameThickness * 2 - 4) / 2;
        const doorPanelHeight = doorHeight - frameThickness * 2 - 4; // Fit within top and bottom frame

        const makeDoor = (xOffset: number) => {
          const group = new THREE.Group();

          // Wood border
          const doorBorder = new THREE.Mesh(
            new THREE.BoxGeometry(singleDoorWidth, doorPanelHeight, doorThickness),
            doorMat
          );
          group.add(doorBorder);

          // Glass inset (center window)
          const glass = new THREE.Mesh(
            new THREE.PlaneGeometry(singleDoorWidth * 0.8, doorPanelHeight * 0.85),
            glassMat
          );
          glass.position.set(0, 0, doorThickness / 2 + 0.1);
          group.add(glass);

          // Handle (simple vertical metal bar)
          const handleMat = new THREE.MeshStandardMaterial({
            color: 0x888888,
            metalness: 0.4,
            roughness: 0.7,
          });

          const handle = new THREE.Mesh(
            new THREE.CylinderGeometry(0.6, 0.6, 12, 12),
            handleMat
          );
          handle.rotation.z = Math.PI / 2;
          handle.position.set(xOffset > 0 ? -singleDoorWidth * 0.35 : singleDoorWidth * 0.35, 0, doorThickness / 2 + 1.5);
          group.add(handle);

          group.position.x = xOffset;
          return group;
        };

        // Left & Right doors
        const leftDoor = makeDoor(-singleDoorWidth / 2);
        const rightDoor = makeDoor(singleDoorWidth / 2);
        doorGroup.add(leftDoor);
        doorGroup.add(rightDoor);

        // === WELCOME SIGN ===
        const signHeight = 14;
        const signGeometry = new THREE.PlaneGeometry(doorWidth * 0.9, signHeight);
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');

        if (ctx) {
          // Draw wooden background
          ctx.fillStyle = '#3a2e25';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Draw text
          ctx.font = 'bold 60px Arial';
          ctx.fillStyle = '#f5d590'; // warm golden lettering
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('WELCOME', canvas.width / 2, canvas.height / 2);
        }

        const signTexture = new THREE.CanvasTexture(canvas);
        const signMaterial = new THREE.MeshStandardMaterial({
          map: signTexture,
          roughness: 0.8,
          metalness: 0.1,
        });

        const sign = new THREE.Mesh(signGeometry, signMaterial);
        sign.position.set(0, doorHeight / 2 - frameThickness - signHeight / 2 - 4, wall.thickness / 2 + 2);
        doorGroup.add(sign);

        // === FINAL POSITIONING ===
        doorGroup.position.set(baseX, doorHeight / 2, baseZ);
        doorGroup.rotation.y = -angle;
        doorGroup.castShadow = true;
        doorGroup.receiveShadow = true;
        scene.add(doorGroup);
        
      } else if (wall.type === 'window') {
        // === REALISTIC ARCHITECTURAL WINDOW (With top wall section) ===
        
        // Use standard size if length is too small
        const windowLength = length > 20 ? length : 120;
        const windowHeight = wallHeight;

        // HEIGHT RATIOS
        const h1 = windowHeight * 0.45;  // bottom wall/sill (increased)
        const h2 = windowHeight * 0.65;  // main window area
        const h3 = windowHeight * 0.10;  // top transom
        const h4 = windowHeight * 0.30;  // top wall section

        // === MATERIALS ===
        const wallMat = new THREE.MeshStandardMaterial({
          color: 0xc8c8d0, // Grey-blue for window sills and wall sections
          roughness: 0.85,
          metalness: 0.05
        });

        // Dark aluminum/black frame for contrast
        const frameMat = new THREE.MeshPhysicalMaterial({
          color: 0x2a2a2a,
          metalness: 0.95,
          roughness: 0.2,
          clearcoat: 0.8,
          clearcoatRoughness: 0.1,
        });

        // Realistic glass - visible but transparent with subtle blue tint
        const glassMat = new THREE.MeshPhysicalMaterial({
          color: 0xe6f2ff,
          transparent: true,
          opacity: 0.4,
          transmission: 0.85,
          thickness: 1.5,
          roughness: 0.05,
          metalness: 0.05,
          ior: 1.52,
          envMapIntensity: 1.0,
          clearcoat: 0.8,
          clearcoatRoughness: 0.1,
          reflectivity: 0.5,
        });

        // === BOTTOM WALL/SILL ===
        const sill = new THREE.Mesh(
          new THREE.BoxGeometry(windowLength, h1, wall.thickness),
          wallMat
        );
        sill.position.set(baseX, h1 / 2, baseZ);
        sill.rotation.y = -angle;
        sill.receiveShadow = true;
        sill.castShadow = true;
        scene.add(sill);

        // === MAIN WINDOW AREA ===
        const winY = h1 + h2 / 2;
        const frameThickness = 4;
        const numPanes = Math.max(2, Math.floor(windowLength / 80)); // At least 2 panes
        const paneWidth = (windowLength - frameThickness * (numPanes + 1)) / numPanes;

        // Individual glass panes WITH PROPER POSITIONING
        for (let i = 0; i < numPanes; i++) {
          const paneX = -windowLength / 2 + frameThickness + paneWidth / 2 + i * (paneWidth + frameThickness);
          const localX = baseX + paneX * Math.cos(-angle);
          const localZ = baseZ + paneX * Math.sin(-angle);

          // Glass pane (positioned INSIDE the frame)
          const glass = new THREE.Mesh(
            new THREE.BoxGeometry(paneWidth - 2, h2 - frameThickness * 2, 1),
            glassMat
          );
          glass.position.set(localX, winY, localZ);
          glass.rotation.y = -angle;
          glass.castShadow = false;
          glass.receiveShadow = false;
          scene.add(glass);

          // Vertical divider (except after last pane)
          if (i < numPanes - 1) {
            const divX = -windowLength / 2 + frameThickness + (i + 1) * paneWidth + (i + 0.5) * frameThickness;
            const divLocalX = baseX + divX * Math.cos(-angle);
            const divLocalZ = baseZ + divX * Math.sin(-angle);
            
            const divider = new THREE.Mesh(
              new THREE.BoxGeometry(frameThickness, h2, wall.thickness + 3),
              frameMat
            );
            divider.position.set(divLocalX, winY, divLocalZ);
            divider.rotation.y = -angle;
            divider.castShadow = true;
            scene.add(divider);
          }
        }

        // === TOP TRANSOM WINDOW ===
        const topY = h1 + h2 + h3 / 2;

        const transomGlass = new THREE.Mesh(
          new THREE.BoxGeometry(windowLength - frameThickness * 2, h3 - frameThickness, 1),
          glassMat
        );
        transomGlass.position.set(baseX, topY, baseZ);
        transomGlass.rotation.y = -angle;
        transomGlass.castShadow = false;
        scene.add(transomGlass);
        
        // Transom frame (between main window and transom)
        const transomFrame = new THREE.Mesh(
          new THREE.BoxGeometry(windowLength, frameThickness, wall.thickness + 2),
          frameMat
        );
        transomFrame.position.set(baseX, h1 + h2 + frameThickness / 2, baseZ);
        transomFrame.rotation.y = -angle;
        transomFrame.castShadow = true;
        scene.add(transomFrame);

        // Frame between transom and top wall
        const transomTopFrame = new THREE.Mesh(
          new THREE.BoxGeometry(windowLength, frameThickness, wall.thickness + 2),
          frameMat
        );
        transomTopFrame.position.set(baseX, h1 + h2 + h3 + frameThickness / 2, baseZ);
        transomTopFrame.rotation.y = -angle;
        transomTopFrame.castShadow = true;
        scene.add(transomTopFrame);

        // === TOP WALL SECTION (same material as regular wall) ===
        const topWall = new THREE.Mesh(
          new THREE.BoxGeometry(windowLength, h4, wall.thickness),
          wallMat
        );
        topWall.position.set(baseX, h1 + h2 + h3 + h4 / 2, baseZ);
        topWall.rotation.y = -angle;
        topWall.castShadow = true;
        topWall.receiveShadow = true;
        scene.add(topWall);
        
      } else {
        // Regular walls - warmer grey-blue for better definition
        const wallMesh = new THREE.Mesh(
          new THREE.BoxGeometry(length, wallHeight, wall.thickness),
          new THREE.MeshStandardMaterial({ color: 0xb8b8c0, roughness: 0.9, metalness: 0.05 })
        );
        wallMesh.position.set(baseX, wallHeight / 2, baseZ);
        wallMesh.rotation.y = -angle;
        wallMesh.castShadow = true;
        wallMesh.receiveShadow = true;
        scene.add(wallMesh);
      }
    });

    // FIXED ELEMENTS - Premium styling
    floor.fixedElements.forEach(element => {
      const baseX = element.x - 400 + element.width / 2;
      const baseZ = -(element.y - 400 + element.height / 2);
      
      if (element.type === 'pillar') {
        const radius = Math.min(element.width, element.height) / 2;
        
        // Main pillar shaft
        const pillar = new THREE.Mesh(
          new THREE.CylinderGeometry(radius, radius * 1.1, 140, 32),
          new THREE.MeshStandardMaterial({ color: 0x4a4a5a, roughness: 0.6, metalness: 0.4 })
        );
        pillar.position.set(baseX, 70, baseZ);
        pillar.castShadow = true;
        scene.add(pillar);
        
        // Classical capital (top decoration)
        const capital = new THREE.Mesh(
          new THREE.CylinderGeometry(radius * 1.3, radius * 1.1, 10, 32),
          new THREE.MeshStandardMaterial({ color: 0x5a5a6a, roughness: 0.5, metalness: 0.5 })
        );
        capital.position.set(baseX, 135, baseZ);
        capital.castShadow = true;
        scene.add(capital);
        
        // Base
        const base = new THREE.Mesh(
          new THREE.CylinderGeometry(radius * 1.2, radius * 1.3, 10, 32),
          new THREE.MeshStandardMaterial({ color: 0x5a5a6a, roughness: 0.5, metalness: 0.5 })
        );
        base.position.set(baseX, 5, baseZ);
        base.castShadow = true;
        scene.add(base);
        
      } else if (element.type === 'column') {
        const column = new THREE.Mesh(
          new THREE.BoxGeometry(element.width, 140, element.height),
          new THREE.MeshStandardMaterial({ color: 0x3a3a4a, roughness: 0.7, metalness: 0.3 })
        );
        column.position.set(baseX, 70, baseZ);
        column.castShadow = true;
        scene.add(column);
        
        // Edge highlights
        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(column.geometry),
          new THREE.LineBasicMaterial({ color: 0x6a6a7a })
        );
        edges.position.copy(column.position);
        scene.add(edges);
        
      } else { // stairs - individual steps
        const stepCount = 8;
        const stepHeight = 50 / stepCount;
        const stepDepth = element.height / stepCount;
        
        for (let i = 0; i < stepCount; i++) {
          const step = new THREE.Mesh(
            new THREE.BoxGeometry(element.width, stepHeight, stepDepth * (stepCount - i)),
            new THREE.MeshStandardMaterial({ color: 0x654321, roughness: 0.8 })
          );
          step.position.set(baseX, stepHeight / 2 + i * stepHeight, baseZ + i * stepDepth / 2);
          step.castShadow = true;
          scene.add(step);
          
          const edges = new THREE.LineSegments(
            new THREE.EdgesGeometry(step.geometry),
            new THREE.LineBasicMaterial({ color: 0x3a2410 })
          );
          edges.position.copy(step.position);
          scene.add(edges);
        }
      }
    });

    // OBJECTS (Bar, Kitchen, Toilet) - Ultra-realistic materials
    floor.objects.forEach(obj => {
      const baseX = obj.x - 400 + obj.width / 2;
      const baseZ = -(obj.y - 400 + obj.height / 2);
      const rotation = -(obj.rotation * Math.PI / 180);
      
      // === MODERN HOTEL BAR (Glass Top with Wine & Liquor Tones) ===
      if (obj.type === 'bar') {
        const baseX = obj.x - 400 + obj.width / 2;
        const baseZ = -(obj.y - 400 + obj.height / 2);
        const rotation = -(obj.rotation * Math.PI / 180);
        const barHeight = 50;

        // === Base Cabinet (dark brushed metal) ===
        const baseMat = new THREE.MeshPhysicalMaterial({
          color: 0x1a1a1a,
          roughness: 0.5,
          metalness: 0.8,
          clearcoat: 0.2,
          clearcoatRoughness: 0.4,
        });

        const base = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width, barHeight, obj.height),
          baseMat
        );
        base.position.set(baseX, barHeight / 2, baseZ);
        base.rotation.y = rotation;
        base.castShadow = true;
        base.receiveShadow = true;
        scene.add(base);

        // === Translucent Glass Countertop ===
        const glassColors = [0x7f0000, 0xa45a00, 0x661a00, 0x8b0000, 0x884400]; // wine, whiskey, rum tones
        const glassColor = glassColors[Math.floor(Math.random() * glassColors.length)];

        const glassTopMat = new THREE.MeshPhysicalMaterial({
          color: glassColor,
          metalness: 0.1,
          roughness: 0.05,
          transmission: 0.9,           // transparency
          thickness: 2.0,
          ior: 1.5,
          reflectivity: 0.9,
          clearcoat: 1.0,
          clearcoatRoughness: 0.05,
        });

        const glassTop = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width + 6, 6, obj.height + 6),
          glassTopMat
        );
        glassTop.position.set(baseX, barHeight + 3, baseZ);
        glassTop.rotation.y = rotation;
        glassTop.castShadow = true;
        scene.add(glassTop);

        // === Under Counter LED glow ===
        const ledGlowMat = new THREE.MeshStandardMaterial({
          emissive: 0xff0077,  // pinkish-red glow
          emissiveIntensity: 0.6,
          color: 0x000000,
        });
        const ledStrip = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width + 6, 0.5, obj.height + 6),
          ledGlowMat
        );
        ledStrip.position.set(baseX, barHeight + 1, baseZ);
        ledStrip.rotation.y = rotation;
        scene.add(ledStrip);

        // === Edge Trim (gold or chrome depending on glass tone) ===
        const trimColor = glassColor === 0x7f0000 ? 0xd4af37 : 0xb0b0b0;
        const trim = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width + 8, 0.6, obj.height + 8),
          new THREE.MeshStandardMaterial({
            color: trimColor,
            metalness: 1.0,
            roughness: 0.2,
          })
        );
        trim.position.set(baseX, barHeight + 6.5, baseZ);
        trim.rotation.y = rotation;
        scene.add(trim);

        // === Bar Legs (stainless steel) ===
        const legMat = new THREE.MeshStandardMaterial({
          color: 0xcccccc,
          metalness: 1.0,
          roughness: 0.1,
        });
        const legGeo = new THREE.CylinderGeometry(2, 2, barHeight, 16);
        const legOffsets = [
          [obj.width / 2 - 6, obj.height / 2 - 6],
          [-obj.width / 2 + 6, obj.height / 2 - 6],
          [obj.width / 2 - 6, -obj.height / 2 + 6],
          [-obj.width / 2 + 6, -obj.height / 2 + 6],
        ];
        legOffsets.forEach(([lx, lz]) => {
          const leg = new THREE.Mesh(legGeo, legMat);
          leg.position.set(
            baseX + lx * Math.cos(rotation) - lz * Math.sin(rotation),
            barHeight / 2,
            baseZ + lx * Math.sin(rotation) + lz * Math.cos(rotation)
          );
          leg.castShadow = true;
          scene.add(leg);
        });

        // === Optional: Light reflection simulation (point light above the bar) ===
        const barLight = new THREE.PointLight(glassColor, 0.4, 600);
        barLight.position.set(baseX, barHeight + 70, baseZ); // Adjusted for lower canopy
        scene.add(barLight);

        // === PREMIUM MODERN BAR CANOPY ===
        const canopyHeight = 120; // Lowered from 160 to 120
        const canopyOuter = new THREE.Group();

        // === Outer frame (brushed dark metal) ===
        const outerMat = new THREE.MeshPhysicalMaterial({
          color: 0x202020,
          metalness: 1.0,
          roughness: 0.25,
          clearcoat: 0.6,
          clearcoatRoughness: 0.1,
        });

        const outerShell = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width + 40, 10, obj.height + 40),
          outerMat
        );
        outerShell.castShadow = true;
        outerShell.receiveShadow = true;
        canopyOuter.add(outerShell);

        // === Inner glass ceiling panel (liquor-tinted glass) ===
        const innerGlassMat = new THREE.MeshPhysicalMaterial({
          color: 0xa45a00, // whiskey amber
          metalness: 0,
          roughness: 0.05,
          transmission: 0.95,
          thickness: 1.5,
          ior: 1.45,
          clearcoat: 1.0,
          clearcoatRoughness: 0.05,
        });
        const innerGlass = new THREE.Mesh(
          new THREE.PlaneGeometry(obj.width + 32, obj.height + 32),
          innerGlassMat
        );
        innerGlass.rotation.x = -Math.PI / 2;
        innerGlass.position.y = -3;
        canopyOuter.add(innerGlass);

        // === Embedded LED strips around the rim ===
        const ledMat = new THREE.MeshStandardMaterial({
          emissive: 0xffcc88,
          emissiveIntensity: 1.6,
          color: 0x000000,
        });
        const ledGeom = new THREE.BoxGeometry(4, 2, obj.height + 36);
        const ledLeft = new THREE.Mesh(ledGeom, ledMat);
        const ledRight = ledLeft.clone();
        ledLeft.position.set(-(obj.width + 36) / 2, -2, 0);
        ledRight.position.set((obj.width + 36) / 2, -2, 0);
        canopyOuter.add(ledLeft, ledRight);

        // === Hanging wine bottle rack ===
        const bottleRack = new THREE.Group();
        const bottleColors = [0xb22222, 0xe3a857, 0x8b4513, 0x006994, 0x772f1a];
        for (let i = -3; i <= 3; i++) {
          const color = bottleColors[Math.floor(Math.random() * bottleColors.length)];
          const bottleMat = new THREE.MeshPhysicalMaterial({
            color,
            roughness: 0.1,
            transmission: 0.95,
            thickness: 0.6,
            ior: 1.5,
            clearcoat: 0.3,
            clearcoatRoughness: 0.2,
          });

          const bottle = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 3, 20, 32),
            bottleMat
          );
          bottle.position.set(i * 12, -12, 0);
          bottleRack.add(bottle);

          // neck
          const neck = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2, 1.2, 6, 16),
            bottleMat
          );
          neck.position.set(i * 12, -3, 0);
          bottleRack.add(neck);
        }
        bottleRack.position.y = -15;
        canopyOuter.add(bottleRack);

        // === Hanging glass rack ===
        const glassMat = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          roughness: 0.1,
          transmission: 0.9,
          thickness: 0.4,
          ior: 1.45,
        });
        for (let i = -2; i <= 2; i++) {
          const glass = new THREE.Mesh(
            new THREE.SphereGeometry(2.5, 16, 16, 0, Math.PI), // half-sphere
            glassMat
          );
          glass.position.set(i * 10, -25, 0);
          glass.scale.y = 0.6;
          canopyOuter.add(glass);
        }

        // === Support rods (chrome metal) ===
        const rodMat = new THREE.MeshStandardMaterial({
          color: 0xaaaaaa,
          metalness: 1.0,
          roughness: 0.2,
        });
        const rodGeo = new THREE.CylinderGeometry(1.5, 1.5, canopyHeight - 60, 16);
        [
          [obj.width / 2 - 10, obj.height / 2 - 10],
          [-obj.width / 2 + 10, obj.height / 2 - 10],
          [obj.width / 2 - 10, -obj.height / 2 + 10],
          [-obj.width / 2 + 10, -obj.height / 2 + 10],
        ].forEach(([lx, lz]) => {
          const rod = new THREE.Mesh(rodGeo, rodMat);
          rod.position.set(lx, -(canopyHeight - 80) / 2, lz);
          rod.rotation.x = Math.PI / 2;
          canopyOuter.add(rod);
        });

        // === Final canopy transform & light ===
        canopyOuter.position.set(baseX, canopyHeight, baseZ);
        canopyOuter.rotation.y = rotation;
        scene.add(canopyOuter);

        // Add soft ambient light matching liquor tone
        const warmLight = new THREE.PointLight(0xffaa55, 0.8, 600);
        warmLight.position.set(baseX, canopyHeight - 20, baseZ);
        scene.add(warmLight);
        
      } else if (obj.type === 'kitchen') {
        // === PROFESSIONAL COMMERCIAL KITCHEN ===
        const kitchenGroup = new THREE.Group();
        
        // === MATERIALS ===
        const steelMat = new THREE.MeshPhysicalMaterial({
          color: 0xb0b0b0,
          metalness: 1.0,
          roughness: 0.25,
          envMapIntensity: 1.0,
          clearcoat: 1.0,
          clearcoatRoughness: 0.05,
        });

        const glassMat = new THREE.MeshPhysicalMaterial({
          color: 0x99ccff,
          roughness: 0.05,
          transmission: 0.9,
          thickness: 0.5,
          metalness: 0.1,
          envMapIntensity: 1.2,
        });

        // === COUNTERTOP (stainless steel base) ===
        const counter = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width, 50, obj.height),
          steelMat
        );
        counter.position.set(0, 25, 0);
        counter.castShadow = true;
        counter.receiveShadow = true;
        kitchenGroup.add(counter);

        // === GLASS COVER on countertop ===
        const glassTop = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width, 4, obj.height),
          glassMat
        );
        glassTop.position.set(0, 52, 0);
        kitchenGroup.add(glassTop);

        // === STOVE AREA (dark cooking surface) ===
        const stove = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.4, 10, obj.height * 0.6),
          new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.4 })
        );
        stove.position.set(-obj.width * 0.2, 55, 0);
        kitchenGroup.add(stove);

        // === STOVE BURNERS (4 metal burners) ===
        const burnerMat = new THREE.MeshStandardMaterial({ 
          color: 0x333333, 
          metalness: 0.8, 
          roughness: 0.2 
        });
        const burnerPositions = [
          [-obj.width * 0.25, obj.height * 0.15],
          [-obj.width * 0.15, obj.height * 0.15],
          [-obj.width * 0.25, -obj.height * 0.15],
          [-obj.width * 0.15, -obj.height * 0.15],
        ];
        burnerPositions.forEach(([bx, bz]) => {
          const burner = new THREE.Mesh(
            new THREE.CylinderGeometry(6, 6, 2, 32), 
            burnerMat
          );
          burner.rotation.x = Math.PI / 2;
          burner.position.set(bx, 61, bz);
          kitchenGroup.add(burner);
        });

        // === RANGE HOOD (exhaust fan above stove) ===
        const hood = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.5, 35, obj.height * 0.65),
          new THREE.MeshPhysicalMaterial({
            color: 0xc0c0c0,
            metalness: 1.0,
            roughness: 0.2,
            envMapIntensity: 1.1,
          })
        );
        hood.position.set(-obj.width * 0.2, 95, 0);
        hood.castShadow = true;
        kitchenGroup.add(hood);

        // === SHELVES (3 wall-mounted shelves) ===
        const shelfMat = new THREE.MeshPhysicalMaterial({
          color: 0xdddddd,
          roughness: 0.3,
          metalness: 0.5,
        });
        for (let i = 0; i < 3; i++) {
          const shelf = new THREE.Mesh(
            new THREE.BoxGeometry(obj.width * 0.7, 4, obj.height * 0.2),
            shelfMat
          );
          shelf.position.set(obj.width * 0.15, 75 + i * 22, obj.height * 0.35);
          shelf.castShadow = true;
          kitchenGroup.add(shelf);
        }

        // === CABINET HANDLES ===
        const handleMat = new THREE.MeshStandardMaterial({ 
          color: 0x888888, 
          metalness: 0.9, 
          roughness: 0.2 
        });
        for (let i = -1; i <= 1; i++) {
          const handle = new THREE.Mesh(
            new THREE.CylinderGeometry(1.5, 1.5, 15, 16), 
            handleMat
          );
          handle.rotation.z = Math.PI / 2;
          handle.position.set(i * obj.width * 0.2, 35, obj.height * 0.45);
          kitchenGroup.add(handle);
        }

        // === OVERHEAD LIGHTS ===
        const kitchenLight = new THREE.PointLight(0xffffff, 1.5, 400);
        kitchenLight.position.set(0, 140, 0);
        kitchenLight.castShadow = true;
        kitchenGroup.add(kitchenLight);

        // === CHEF SIGN on Left Side (BOLD & CLEAR Design) ===
        const chefCanvas = document.createElement('canvas');
        chefCanvas.width = 1024;
        chefCanvas.height = 768;
        const chefCtx = chefCanvas.getContext('2d');
        if (chefCtx) {
          // Bold red background
          chefCtx.fillStyle = '#dc2626';
          chefCtx.fillRect(0, 0, chefCanvas.width, chefCanvas.height);
          
          // Thick white border
          chefCtx.strokeStyle = '#ffffff';
          chefCtx.lineWidth = 25;
          chefCtx.strokeRect(30, 30, chefCanvas.width - 60, chefCanvas.height - 60);
          
          // Inner black border for contrast
          chefCtx.strokeStyle = '#000000';
          chefCtx.lineWidth = 15;
          chefCtx.strokeRect(50, 50, chefCanvas.width - 100, chefCanvas.height - 100);
          
          // Strong text shadow
          chefCtx.shadowColor = 'rgba(0, 0, 0, 0.8)';
          chefCtx.shadowBlur = 20;
          chefCtx.shadowOffsetX = 8;
          chefCtx.shadowOffsetY = 8;
          
          // Large chef hat emoji on top
          chefCtx.font = 'bold 180px Arial';
          chefCtx.textAlign = 'center';
          chefCtx.textBaseline = 'middle';
          chefCtx.fillStyle = '#ffffff';
          chefCtx.fillText('👨‍🍳', chefCanvas.width / 2, chefCanvas.height / 2 - 150);
          
          // CHEF text - VERY LARGE and WHITE
          chefCtx.fillStyle = '#ffffff';
          chefCtx.font = 'bold 220px Impact, Arial Black, sans-serif';
          chefCtx.fillText('CHEF', chefCanvas.width / 2, chefCanvas.height / 2 + 120);
          
          // Black outline for maximum contrast
          chefCtx.strokeStyle = '#000000';
          chefCtx.lineWidth = 12;
          chefCtx.strokeText('CHEF', chefCanvas.width / 2, chefCanvas.height / 2 + 120);
          
          // Yellow/Gold inner stroke for style
          chefCtx.strokeStyle = '#fbbf24';
          chefCtx.lineWidth = 6;
          chefCtx.strokeText('CHEF', chefCanvas.width / 2, chefCanvas.height / 2 + 120);
        }
        const chefTexture = new THREE.CanvasTexture(chefCanvas);
        
        // Left side sign - MUCH LARGER
        const chefSignLeft = new THREE.Mesh(
          new THREE.PlaneGeometry(obj.height * 0.6, obj.height * 0.45),
          new THREE.MeshStandardMaterial({ 
            map: chefTexture,
            roughness: 0.4,
            metalness: 0.1,
            emissive: 0xdc2626,
            emissiveIntensity: 0.3
          })
        );
        chefSignLeft.position.set(-obj.width / 2 + 3, 50, 0);
        chefSignLeft.rotation.y = Math.PI / 2;
        kitchenGroup.add(chefSignLeft);
        
        // Right side sign (same design) - MUCH LARGER
        const chefSignRight = new THREE.Mesh(
          new THREE.PlaneGeometry(obj.height * 0.6, obj.height * 0.45),
          new THREE.MeshStandardMaterial({ 
            map: chefTexture,
            roughness: 0.4,
            metalness: 0.1,
            emissive: 0xdc2626,
            emissiveIntensity: 0.3
          })
        );
        chefSignRight.position.set(obj.width / 2 - 3, 50, 0);
        chefSignRight.rotation.y = -Math.PI / 2;
        kitchenGroup.add(chefSignRight);

        // === Position the entire kitchen ===
        kitchenGroup.position.set(baseX, 0, baseZ);
        kitchenGroup.rotation.y = rotation;
        scene.add(kitchenGroup);
        
      } else if (obj.type === 'toilet') {
        const toiletGroup = new THREE.Group();

        // === MATERIALS (no excessive reflections) ===
        const marbleMat = new THREE.MeshStandardMaterial({
          color: 0xd5d5da,
          roughness: 0.7,
          metalness: 0.05,
        });

        const doorMat = new THREE.MeshStandardMaterial({
          color: 0x3b82f6,
          roughness: 0.6,
          metalness: 0.1,
        });

        const door2Mat = new THREE.MeshStandardMaterial({
          color: 0xef4444,
          roughness: 0.6,
          metalness: 0.1,
        });

        const tileFloorMat = new THREE.MeshStandardMaterial({
          color: 0xd9d9d9,
          roughness: 0.7,
          metalness: 0.05,
        });

        const roomHeight = 120;

        // === FLOOR ===
        const floor = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width, 4, obj.height), 
          tileFloorMat
        );
        floor.position.y = 2;
        floor.receiveShadow = true;
        toiletGroup.add(floor);

        // === BACK WALL ===
        const backWall = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width, roomHeight, 6), 
          marbleMat
        );
        backWall.position.set(0, roomHeight / 2, -obj.height / 2);
        backWall.castShadow = true;
        toiletGroup.add(backWall);

        // === SIDE WALLS ===
        const leftWall = new THREE.Mesh(
          new THREE.BoxGeometry(6, roomHeight, obj.height), 
          marbleMat
        );
        leftWall.position.set(-obj.width / 2, roomHeight / 2, 0);
        leftWall.castShadow = true;
        toiletGroup.add(leftWall);

        const rightWall = new THREE.Mesh(
          new THREE.BoxGeometry(6, roomHeight, obj.height), 
          marbleMat
        );
        rightWall.position.set(obj.width / 2, roomHeight / 2, 0);
        rightWall.castShadow = true;
        toiletGroup.add(rightWall);

        // === FRONT WALL STRUCTURE ===
        // Center divider
        const centerDivider = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.24, roomHeight, 6), 
          marbleMat
        );
        centerDivider.position.set(0, roomHeight / 2, obj.height / 2);
        centerDivider.castShadow = true;
        toiletGroup.add(centerDivider);

        // Left side section
        const leftSection = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.055, roomHeight, 6), 
          marbleMat
        );
        leftSection.position.set(-obj.width * 0.4725, roomHeight / 2, obj.height / 2);
        leftSection.castShadow = true;
        toiletGroup.add(leftSection);

        // Right side section
        const rightSection = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.055, roomHeight, 6), 
          marbleMat
        );
        rightSection.position.set(obj.width * 0.4725, roomHeight / 2, obj.height / 2);
        rightSection.castShadow = true;
        toiletGroup.add(rightSection);

        // Wall above right door (blue) - LARGER DOOR = 95 height, 33% width
        const rightTopWall = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.33, roomHeight - 95, 6), 
          marbleMat
        );
        rightTopWall.position.set(obj.width * 0.285, 95 + (roomHeight - 95) / 2, obj.height / 2);
        rightTopWall.castShadow = true;
        toiletGroup.add(rightTopWall);

        // Wall above left door (red)
        const leftTopWall = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.33, roomHeight - 95, 6), 
          marbleMat
        );
        leftTopWall.position.set(-obj.width * 0.285, 95 + (roomHeight - 95) / 2, obj.height / 2);
        leftTopWall.castShadow = true;
        toiletGroup.add(leftTopWall);

        // === DOORS (LARGER - 33% width, 95 height) ===
        // Right door (Blue)
        const door = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.33, 95, 4), 
          doorMat
        );
        door.position.set(obj.width * 0.285, 47.5, obj.height / 2 - 2);
        door.castShadow = true;
        toiletGroup.add(door);

        const handleMat = new THREE.MeshStandardMaterial({ 
          color: 0xd4af37, 
          metalness: 0.1, 
          roughness: 0.8 
        });
        const handle = new THREE.Mesh(
          new THREE.CylinderGeometry(1.5, 1.5, 12, 16),
          handleMat
        );
        handle.rotation.z = Math.PI / 2;
        handle.position.set(obj.width * 0.285 - (obj.width * 0.132), 47.5, obj.height / 2 + 1);
        toiletGroup.add(handle);

        // === MALE SIGN on Blue Door (Very Stylish Design) ===
        const maleCanvas = document.createElement('canvas');
        maleCanvas.width = 512;
        maleCanvas.height = 768;
        const maleCtx = maleCanvas.getContext('2d');
        if (maleCtx) {
          // Gradient background
          const gradient = maleCtx.createLinearGradient(0, 0, 0, maleCanvas.height);
          gradient.addColorStop(0, '#3b82f6');
          gradient.addColorStop(1, '#1e40af');
          maleCtx.fillStyle = gradient;
          maleCtx.fillRect(0, 0, maleCanvas.width, maleCanvas.height);
          
          // Border frame
          maleCtx.strokeStyle = '#ffffff';
          maleCtx.lineWidth = 12;
          maleCtx.strokeRect(20, 20, maleCanvas.width - 40, maleCanvas.height - 40);
          
          // Inner shadow effect
          maleCtx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          maleCtx.lineWidth = 6;
          maleCtx.strokeRect(30, 30, maleCanvas.width - 60, maleCanvas.height - 60);
          
          // Text shadow
          maleCtx.shadowColor = 'rgba(0, 0, 0, 0.5)';
          maleCtx.shadowBlur = 15;
          maleCtx.shadowOffsetX = 4;
          maleCtx.shadowOffsetY = 4;
          
          // W.C. text
          maleCtx.fillStyle = '#ffffff';
          maleCtx.font = 'bold 120px Georgia, serif';
          maleCtx.textAlign = 'center';
          maleCtx.textBaseline = 'middle';
          maleCtx.fillText('W.C.', maleCanvas.width / 2, maleCanvas.height / 2 - 100);
          
          // Decorative line
          maleCtx.strokeStyle = '#ffffff';
          maleCtx.lineWidth = 4;
          maleCtx.beginPath();
          maleCtx.moveTo(100, maleCanvas.height / 2);
          maleCtx.lineTo(maleCanvas.width - 100, maleCanvas.height / 2);
          maleCtx.stroke();
          
          // MALE text with golden color
          const goldGradient = maleCtx.createLinearGradient(0, maleCanvas.height / 2, 0, maleCanvas.height / 2 + 150);
          goldGradient.addColorStop(0, '#ffd700');
          goldGradient.addColorStop(0.5, '#ffed4e');
          goldGradient.addColorStop(1, '#ffd700');
          maleCtx.fillStyle = goldGradient;
          maleCtx.font = 'bold 140px Georgia, serif';
          maleCtx.fillText('MALE', maleCanvas.width / 2, maleCanvas.height / 2 + 120);
          
          // Add stroke to MALE text
          maleCtx.strokeStyle = '#b8860b';
          maleCtx.lineWidth = 3;
          maleCtx.strokeText('MALE', maleCanvas.width / 2, maleCanvas.height / 2 + 120);
        }
        const maleTexture = new THREE.CanvasTexture(maleCanvas);
        const maleSign = new THREE.Mesh(
          new THREE.PlaneGeometry(obj.width * 0.25, obj.width * 0.375),
          new THREE.MeshStandardMaterial({ 
            map: maleTexture,
            roughness: 0.3,
            metalness: 0.15,
            emissive: 0x1e40af,
            emissiveIntensity: 0.1
          })
        );
        maleSign.position.set(obj.width * 0.285, 47.5, obj.height / 2 + 2.5);
        toiletGroup.add(maleSign);

        // Left door (Red)
        const door2 = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.33, 95, 4),
          door2Mat
        );
        door2.position.set(-obj.width * 0.285, 47.5, obj.height / 2 - 2);
        door2.castShadow = true;
        toiletGroup.add(door2);

        const handle2 = handle.clone();
        handle2.position.set(-obj.width * 0.285 + (obj.width * 0.132), 47.5, obj.height / 2 + 1);
        toiletGroup.add(handle2);

        // === FEMALE SIGN on Red Door (Very Stylish Design) ===
        const femaleCanvas = document.createElement('canvas');
        femaleCanvas.width = 512;
        femaleCanvas.height = 768;
        const femaleCtx = femaleCanvas.getContext('2d');
        if (femaleCtx) {
          // Gradient background
          const gradient = femaleCtx.createLinearGradient(0, 0, 0, femaleCanvas.height);
          gradient.addColorStop(0, '#ef4444');
          gradient.addColorStop(1, '#b91c1c');
          femaleCtx.fillStyle = gradient;
          femaleCtx.fillRect(0, 0, femaleCanvas.width, femaleCanvas.height);
          
          // Border frame
          femaleCtx.strokeStyle = '#ffffff';
          femaleCtx.lineWidth = 12;
          femaleCtx.strokeRect(20, 20, femaleCanvas.width - 40, femaleCanvas.height - 40);
          
          // Inner shadow effect
          femaleCtx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          femaleCtx.lineWidth = 6;
          femaleCtx.strokeRect(30, 30, femaleCanvas.width - 60, femaleCanvas.height - 60);
          
          // Text shadow
          femaleCtx.shadowColor = 'rgba(0, 0, 0, 0.5)';
          femaleCtx.shadowBlur = 15;
          femaleCtx.shadowOffsetX = 4;
          femaleCtx.shadowOffsetY = 4;
          
          // W.C. text
          femaleCtx.fillStyle = '#ffffff';
          femaleCtx.font = 'bold 120px Georgia, serif';
          femaleCtx.textAlign = 'center';
          femaleCtx.textBaseline = 'middle';
          femaleCtx.fillText('W.C.', femaleCanvas.width / 2, femaleCanvas.height / 2 - 100);
          
          // Decorative line
          femaleCtx.strokeStyle = '#ffffff';
          femaleCtx.lineWidth = 4;
          femaleCtx.beginPath();
          femaleCtx.moveTo(100, femaleCanvas.height / 2);
          femaleCtx.lineTo(femaleCanvas.width - 100, femaleCanvas.height / 2);
          femaleCtx.stroke();
          
          // FEMALE text with rose gold color
          const roseGoldGradient = femaleCtx.createLinearGradient(0, femaleCanvas.height / 2, 0, femaleCanvas.height / 2 + 150);
          roseGoldGradient.addColorStop(0, '#ffb6c1');
          roseGoldGradient.addColorStop(0.5, '#ffd1dc');
          roseGoldGradient.addColorStop(1, '#ffb6c1');
          femaleCtx.fillStyle = roseGoldGradient;
          femaleCtx.font = 'bold 120px Georgia, serif';
          femaleCtx.fillText('FEMALE', femaleCanvas.width / 2, femaleCanvas.height / 2 + 120);
          
          // Add stroke to FEMALE text
          femaleCtx.strokeStyle = '#dc143c';
          femaleCtx.lineWidth = 3;
          femaleCtx.strokeText('FEMALE', femaleCanvas.width / 2, femaleCanvas.height / 2 + 120);
        }
        const femaleTexture = new THREE.CanvasTexture(femaleCanvas);
        const femaleSign = new THREE.Mesh(
          new THREE.PlaneGeometry(obj.width * 0.25, obj.width * 0.375),
          new THREE.MeshStandardMaterial({ 
            map: femaleTexture,
            roughness: 0.3,
            metalness: 0.15,
            emissive: 0xb91c1c,
            emissiveIntensity: 0.1
          })
        );
        femaleSign.position.set(-obj.width * 0.285, 47.5, obj.height / 2 + 2.5);
        toiletGroup.add(femaleSign);

        // === W.C. SIGN ===
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#d5d5da';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = '#2a2a2a';
          ctx.font = 'bold 140px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('W.C.', canvas.width / 2, canvas.height / 2);
        }
        
        const wcTexture = new THREE.CanvasTexture(canvas);
        const wcSign = new THREE.Mesh(
          new THREE.PlaneGeometry(obj.width * 0.4, obj.width * 0.2),
          new THREE.MeshStandardMaterial({ 
            map: wcTexture,
            roughness: 0.5,
            metalness: 0.05
          })
        );
        wcSign.position.set(0, 100, -obj.height / 2 + 3.5);
        toiletGroup.add(wcSign);

        // === SINK COUNTER ===
        const counterMat = new THREE.MeshStandardMaterial({
          color: 0xf5f5f5,
          metalness: 0.1,
          roughness: 0.5,
        });
        const counter = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.5, 12, obj.height * 0.25), 
          counterMat
        );
        counter.position.set(0, 32, -obj.height * 0.3);
        counter.castShadow = true;
        toiletGroup.add(counter);

        // === SINK BASIN ===
        const sinkMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.3,
          metalness: 0.05,
        });
        const sink = new THREE.Mesh(
          new THREE.CylinderGeometry(12, 12, 6, 32), 
          sinkMat
        );
        sink.position.set(0, 40, -obj.height * 0.3);
        toiletGroup.add(sink);

        // === FAUCET ===
        const faucetMat = new THREE.MeshStandardMaterial({
          color: 0xc0c0c0,
          metalness: 0.1,
          roughness: 0.8,
        });
        const faucet = new THREE.Mesh(
          new THREE.TorusGeometry(4, 1, 8, 24, Math.PI),
          faucetMat
        );
        faucet.rotation.z = Math.PI / 2;
        faucet.position.set(0, 48, -obj.height * 0.35);
        toiletGroup.add(faucet);

        // === TOILET BOWL ===
        const toiletMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.25,
          metalness: 0.05,
        });

        const toiletBowl = new THREE.Mesh(
          new THREE.CylinderGeometry(10, 8, 12, 32),
          toiletMat
        );
        toiletBowl.position.set(-obj.width * 0.25, 6, obj.height * 0.25);
        toiletGroup.add(toiletBowl);

        const toiletSeat = new THREE.Mesh(
          new THREE.TorusGeometry(9, 2, 16, 32),
          toiletMat
        );
        toiletSeat.rotation.x = Math.PI / 2;
        toiletSeat.position.set(-obj.width * 0.25, 13, obj.height * 0.25);
        toiletGroup.add(toiletSeat);

        const toiletTank = new THREE.Mesh(
          new THREE.BoxGeometry(14, 20, 8),
          toiletMat
        );
        toiletTank.position.set(-obj.width * 0.25, 22, obj.height * 0.25 - 10);
        toiletGroup.add(toiletTank);

        const flushHandle = new THREE.Mesh(
          new THREE.BoxGeometry(2, 6, 1),
          faucetMat
        );
        flushHandle.position.set(-obj.width * 0.25 + 8, 25, obj.height * 0.25 - 10);
        toiletGroup.add(flushHandle);

        // === URINAL ===
        const urinal = new THREE.Mesh(
          new THREE.SphereGeometry(7, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.5),
          toiletMat
        );
        urinal.position.set(obj.width * 0.25, 25, obj.height * 0.25);
        urinal.rotation.x = Math.PI / 6;
        toiletGroup.add(urinal);

        const urinalValve = new THREE.Mesh(
          new THREE.CylinderGeometry(1.5, 1.5, 8, 16),
          faucetMat
        );
        urinalValve.position.set(obj.width * 0.25, 35, obj.height * 0.25 - 5);
        toiletGroup.add(urinalValve);

        // === LIGHTING (SOFT, NO GLOWING) ===
        const softLight = new THREE.PointLight(0xffffff, 0.5, 280);
        softLight.position.set(0, roomHeight - 15, 0);
        softLight.castShadow = false;
        toiletGroup.add(softLight);

        // === Position the entire toilet room ===
        toiletGroup.position.set(baseX, 0, baseZ);
        toiletGroup.rotation.y = rotation;
        scene.add(toiletGroup);
      }
    });

    // TABLES - Realistic polished wood with subtle reflections
    floor.tables.forEach(table => {
      const tableTopHeight = 4; // Thin tabletop
      const legHeight = 33; // Tall legs (increased from 30)
      const actualWidth = table.shape === 'rectangle' ? table.width * 1.5 : table.width;
      const tableX = table.x - 400 + actualWidth / 2;
      const tableZ = -(table.y - 400 + table.height / 2);
      const tableRotRad = -(table.rotation * Math.PI / 180);

      // Advanced physical material (PBR wood)
      const tableMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x6f4e37,             // rich brown wood tone
        roughness: 0.35,
        metalness: 0.1,
        clearcoat: 0.4,              // shiny varnish layer
        clearcoatRoughness: 0.2,
        sheen: 0.5,                  // subtle velvet-like reflection
        sheenColor: new THREE.Color(0x9c6b3c),
      });

      // THIN TABLETOP (not full height cube)
      const tableGeometry =
        table.shape === 'circle'
          ? new THREE.CylinderGeometry(actualWidth / 2, actualWidth / 2, tableTopHeight, 64)
          : new THREE.BoxGeometry(actualWidth, tableTopHeight, table.height);

      const tableMesh = new THREE.Mesh(tableGeometry, tableMaterial);
      tableMesh.position.set(tableX, legHeight + tableTopHeight / 2, tableZ);
      tableMesh.rotation.y = tableRotRad;
      tableMesh.castShadow = true;
      tableMesh.receiveShadow = true;
      scene.add(tableMesh);

      // Subtle metallic edge trim
      if (table.shape === 'circle') {
        const edgeTrim = new THREE.Mesh(
          new THREE.TorusGeometry(actualWidth / 2 + 1, 1.2, 16, 64),
          new THREE.MeshStandardMaterial({
            color: 0xd4af37,       // gold-like tone
            metalness: 1.0,
            roughness: 0.3,
          })
        );
        edgeTrim.position.set(tableX, legHeight + tableTopHeight / 2 + 0.5, tableZ);
        edgeTrim.rotation.x = Math.PI / 2;
        scene.add(edgeTrim);
      } else {
        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(tableGeometry),
          new THREE.LineBasicMaterial({ color: 0xd4af37, linewidth: 2 })
        );
        edges.position.copy(tableMesh.position);
        edges.rotation.y = tableRotRad;
        scene.add(edges);
      }

      // Table legs - realistic chrome or black metal (NOW VISIBLE!)
      const legMaterial = new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.9,
        roughness: 0.2,
      });

      const legRadius = 3.2; // Increased from 3 for better visibility
      const legOffsets =
        table.shape === 'circle'
          ? [
              [actualWidth * 0.3, actualWidth * 0.3],
              [-actualWidth * 0.3, actualWidth * 0.3],
              [actualWidth * 0.3, -actualWidth * 0.3],
              [-actualWidth * 0.3, -actualWidth * 0.3],
            ]
          : [
              [actualWidth / 2 - 10, table.height / 2 - 10],
              [-actualWidth / 2 + 10, table.height / 2 - 10],
              [actualWidth / 2 - 10, -table.height / 2 + 10],
              [-actualWidth / 2 + 10, -table.height / 2 + 10],
            ];

      legOffsets.forEach(([lx, lz]) => {
        const leg = new THREE.Mesh(
          new THREE.CylinderGeometry(legRadius, legRadius, legHeight, 16),
          legMaterial
        );
        leg.position.set(
          tableX + lx * Math.cos(tableRotRad) - lz * Math.sin(tableRotRad),
          legHeight / 2,
          tableZ + lx * Math.sin(tableRotRad) + lz * Math.cos(tableRotRad)
        );
        leg.castShadow = true;
        scene.add(leg);
      });

      // CHAIRS - Premium with 4 legs, cushioned seats, wood backs
      const tableChairs = floor.chairs.filter(c => c.tableId === table.id);
      
      tableChairs.forEach(chair => {
        const chairSize = chair.size || 40;
        const chairHeight = 38; // Increased from 35
        
        // Materials
        const woodMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 0.5, metalness: 0.1 });
        const cushionMaterial = new THREE.MeshStandardMaterial({ color: 0xb8860b, roughness: 0.7, metalness: 0.05 });
        
        // Calculate position
        const totalOnSide = tableChairs.filter(c => c.position === chair.position).length;
        const sideLen = ['top', 'bottom'].includes(chair.position) ? actualWidth : table.height;
        const availSpace = sideLen - chairSize * totalOnSide;
        const gap = totalOnSide > 1 ? availSpace / (totalOnSide + 1) : availSpace / 2;
        const offset = gap + chair.index * (chairSize + gap) + chairSize / 2;
        const spacing = chairSize * 0.4;
        
        let relX = 0, relZ = 0;
        if (chair.position === 'top') { 
          relX = offset - actualWidth / 2; 
          relZ = table.height / 2 + spacing + chairSize / 2; 
        } else if (chair.position === 'bottom') { 
          relX = offset - actualWidth / 2; 
          relZ = -(table.height / 2 + spacing + chairSize / 2); 
        } else if (chair.position === 'left') { 
          relX = -(actualWidth / 2 + spacing + chairSize / 2); 
          relZ = offset - table.height / 2; 
        } else { 
          relX = actualWidth / 2 + spacing + chairSize / 2; 
          relZ = offset - table.height / 2; 
        }
        
        // Apply table rotation
        const rotX = relX * Math.cos(tableRotRad) - relZ * Math.sin(tableRotRad);
        const rotZ = relX * Math.sin(tableRotRad) + relZ * Math.cos(tableRotRad);
        
        // Chair seat (cushioned)
        const seat = new THREE.Mesh(
          new THREE.BoxGeometry(chairSize * 0.75, 4, chairSize * 0.75),
          cushionMaterial
        );
        const seatHeight = chairHeight * 0.4; // Seat position
        seat.position.set(tableX + rotX, seatHeight, tableZ - rotZ);
        
        // FIXED ROTATION - chair faces table
        const baseRot = { 
          top: 0, 
          bottom: Math.PI, 
          left: Math.PI / 2, 
          right: -Math.PI / 2 
        }[chair.position] || 0;
        seat.rotation.y = baseRot + tableRotRad;
        seat.castShadow = true;
        scene.add(seat);
        
        // Chair back (wood)
        const back = new THREE.Mesh(
          new THREE.BoxGeometry(chairSize * 0.75, chairHeight * 0.55, 3),
          woodMaterial
        );
        const backOff = chairSize * 0.75 / 2 + 1.5;
        back.position.set(
          seat.position.x - Math.sin(seat.rotation.y) * backOff,
          chairHeight * 0.65,
          seat.position.z - Math.cos(seat.rotation.y) * backOff
        );
        back.rotation.y = seat.rotation.y;
        back.castShadow = true;
        scene.add(back);
        
        // 4 Chair legs (cylindrical, wood)
        const seatThickness = 4;
        const legHeight = seatHeight - seatThickness / 2; // Legs reach from floor to bottom of seat
        const legGeo = new THREE.CylinderGeometry(2, 2, legHeight, 8);
        const legMat = new THREE.MeshStandardMaterial({ color: 0x654321, roughness: 0.6, metalness: 0.2 });
        
        [[chairSize * 0.3, chairSize * 0.3], [chairSize * 0.3, -chairSize * 0.3],
         [-chairSize * 0.3, chairSize * 0.3], [-chairSize * 0.3, -chairSize * 0.3]
        ].forEach(([lx, lz]) => {
          const leg = new THREE.Mesh(legGeo, legMat);
          const cos = Math.cos(seat.rotation.y);
          const sin = Math.sin(seat.rotation.y);
          leg.position.set(
            seat.position.x + lx * cos - lz * sin,
            legHeight / 2, // Position legs so they sit on the floor
            seat.position.z + lx * sin + lz * cos
          );
          leg.castShadow = true;
          scene.add(leg);
        });
      });
    });

    // Animation
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      // Handle smooth camera transitions
      if (transitionRef.current && transitionRef.current.progress < 1) {
        const t = transitionRef.current;
        t.progress += 0.05;
        
        if (t.progress >= 1) {
          t.progress = 1;
          setIsTransitioning(false);
          transitionRef.current = null;
        }
        
        // Smooth easing function
        const easeInOutCubic = (x: number): number => {
          return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
        };
        
        const easedProgress = easeInOutCubic(t.progress);
        
        if (cameraRef.current) {
          cameraRef.current.position.lerpVectors(t.startPos, t.endPos, easedProgress);
          const currentTarget = new THREE.Vector3();
          currentTarget.lerpVectors(t.startTarget, t.endTarget, easedProgress);
          cameraRef.current.lookAt(currentTarget);
        }
      }
      
      // Auto-rotation (only when enabled and not transitioning)
      if (autoRotate && cameraRef.current && !isTransitioning) {
        const r = Math.sqrt(cameraRef.current.position.x ** 2 + cameraRef.current.position.z ** 2);
        const a = Math.atan2(cameraRef.current.position.z, cameraRef.current.position.x) + rotationSpeedRef.current;
        cameraRef.current.position.x = r * Math.cos(a);
        cameraRef.current.position.z = r * Math.sin(a);
        cameraRef.current.lookAt(0, 100, 0);
      }
      
      rendererRef.current?.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (containerRef.current && cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [isOpen, floor, autoRotate, isTransitioning]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-2">
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-3xl shadow-2xl w-full h-full max-w-[98vw] max-h-[98vh] flex flex-col overflow-hidden border border-gray-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1">
          <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <Move3d className="w-5 h-5" />
                </div>
                3D Floor Plan Visualization
              </h2>
              <p className="text-gray-400 text-sm mt-1">Professional Camera Controls • {floor.name}</p>
            </div>
            <button 
              onClick={onClose} 
              className="p-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Area with Sidebar */}
        <div className="flex-1 flex gap-3 p-3 min-h-0">
          {/* Smart Sidebar - Left */}
          <div className="w-80 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 p-5 flex flex-col gap-5 overflow-y-auto flex-shrink-0">
            {/* Default View Button */}
            <button
              onClick={() => smoothCameraTransition('default')}
              className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              🏠 Default View
            </button>

            {/* Manual Controls Section */}
            <div className="flex flex-col gap-3">
              <div className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-gray-700">
                <Move3d className="w-5 h-5 text-purple-400" />
                Manual Control
              </div>
              
              {/* Directional Controls */}
              <div className="flex justify-center">
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => rotateCamera('up')}
                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30 mx-auto"
                    disabled={isTransitioning}
                    title="Rotate Up"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                  <div className="flex gap-1 justify-center">
                    <button
                      onClick={() => rotateCamera('left')}
                      className="w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30"
                      disabled={isTransitioning}
                      title="Rotate Left"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Move3d className="w-6 h-6 text-white" />
                    </div>
                    <button
                      onClick={() => rotateCamera('right')}
                      className="w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30"
                      disabled={isTransitioning}
                      title="Rotate Right"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={() => rotateCamera('down')}
                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30 mx-auto"
                    disabled={isTransitioning}
                    title="Rotate Down"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Zoom Controls Section */}
            <div className="flex flex-col gap-3">
              <div className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-gray-700">
                <ZoomIn className="w-5 h-5 text-green-400" />
                Zoom & Rotation
              </div>
              
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => zoomCamera(0.85)}
                  className="px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold disabled:opacity-30"
                  disabled={isTransitioning}
                >
                  <ZoomIn className="w-5 h-5" />
                  Zoom In
                </button>
                <button
                  onClick={() => zoomCamera(1.15)}
                  className="px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold disabled:opacity-30"
                  disabled={isTransitioning}
                >
                  <ZoomOut className="w-5 h-5" />
                  Zoom Out
                </button>
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`px-4 py-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold ${
                    autoRotate 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg' 
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white'
                  }`}
                >
                  <RotateCcw className={`w-5 h-5 ${autoRotate ? 'animate-spin' : ''}`} />
                  {autoRotate ? 'Auto-Rotating' : 'Auto-Rotate'}
                </button>
              </div>
            </div>

            {/* Reset & Stats Section */}
            <div className="flex flex-col gap-3 mt-auto">
              <button
                onClick={() => smoothCameraTransition('default')}
                className="px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 font-bold"
              >
                <Maximize2 className="w-5 h-5" />
                Reset View
              </button>

              {/* Scene Stats */}
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <Grid className="w-4 h-4" />
                  <span className="font-medium text-sm">Scene Statistics</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-gray-300">{floor.tables.length} Tables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                    <span className="text-gray-300">{floor.chairs.length} Chairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-gray-300">{floor.objects.length} Objects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-gray-300">{floor.walls.length} Walls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Viewport - Right */}
          <div className="flex-1 relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-gray-300">
            <div ref={containerRef} className="w-full h-full" />

            {/* Transition Indicator */}
            {isTransitioning && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-black/80 backdrop-blur-xl rounded-xl px-6 py-3 shadow-2xl border border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-500 border-t-white" />
                    <span className="text-white text-sm font-medium">Transitioning Camera...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 px-6 py-3 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">
                  Viewing: <span className="text-white font-semibold">{floor.name}</span>
                </span>
              </div>
              <div className="text-sm text-gray-400">
                Camera: <span className="text-white font-semibold">{CAMERA_VIEWS[currentView].name}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>High Performance Mode</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}