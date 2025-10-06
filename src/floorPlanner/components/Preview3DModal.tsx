import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { X, RotateCcw, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import type { Floor } from '../types';

interface Preview3DModalProps {
  floor: Floor;
  isOpen: boolean;
  onClose: () => void;
}

export const Preview3DModal: React.FC<Preview3DModalProps> = ({ floor, isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const rotationSpeedRef = useRef(0.005);

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
    camera.position.set(600, 450, 600); // Balanced height to see both floor and canopy
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

    const grid = new THREE.GridHelper(1200, 60, 0xa0a0a8, 0xb8b8c0); // Darker grid lines
    grid.position.y = 1;
    scene.add(grid);

    // WALLS - Premium styling
    floor.walls.forEach(wall => {
      const length = Math.sqrt(Math.pow(wall.endX - wall.startX, 2) + Math.pow(wall.endY - wall.startY, 2));
      const angle = Math.atan2(wall.endY - wall.startY, wall.endX - wall.startX);
      const wallHeight = wall.type === 'wall' ? 120 : 80; // Increased standard wall height from 100 to 120
      const baseX = wall.startX + (wall.endX - wall.startX) / 2 - 400;
      const baseZ = -(wall.startY + (wall.endY - wall.startY) / 2 - 400);
      
      if (wall.type === 'door') {
        // Dark metal door frame
        const frame = new THREE.Mesh(
          new THREE.BoxGeometry(length, wallHeight, wall.thickness + 4),
          new THREE.MeshStandardMaterial({ 
            color: 0x2a2a2a, 
            roughness: 0.5, 
            metalness: 0.6 
          })
        );
        frame.position.set(baseX, wallHeight / 2, baseZ);
        frame.rotation.y = -angle;
        frame.castShadow = true;
        scene.add(frame);
        
        // Realistic wood door with clearcoat
        const door = new THREE.Mesh(
          new THREE.BoxGeometry(length * 0.9, wallHeight * 0.9, wall.thickness),
          new THREE.MeshPhysicalMaterial({
            color: 0x8b5a2b,
            roughness: 0.6,
            metalness: 0.1,
            clearcoat: 0.2,
            sheen: 0.5,
            sheenColor: new THREE.Color(0xb67c3a)
          })
        );
        door.position.set(baseX, wallHeight * 0.45, baseZ);
        door.rotation.y = -angle;
        door.castShadow = true;
        scene.add(door);
        
        // Chrome cylindrical handle
        const handle = new THREE.Mesh(
          new THREE.CylinderGeometry(1, 1, 10, 16),
          new THREE.MeshStandardMaterial({ 
            color: 0xd4af37, 
            metalness: 1.0, 
            roughness: 0.2 
          })
        );
        handle.rotation.z = Math.PI / 2;
        handle.position.set(
          baseX + Math.cos(-angle) * (length * 0.35),
          wallHeight * 0.45,
          baseZ + Math.sin(-angle) * (length * 0.35)
        );
        handle.castShadow = true;
        scene.add(handle);
        
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

        // === Position the entire kitchen ===
        kitchenGroup.position.set(baseX, 0, baseZ);
        kitchenGroup.rotation.y = rotation;
        scene.add(kitchenGroup);
        
      } else if (obj.type === 'toilet') {
        // === LUXURY TOILET ROOM ===
        const toiletGroup = new THREE.Group();

        // === MATERIALS ===
        const marbleMat = new THREE.MeshPhysicalMaterial({
          color: 0xd5d5da, // Subtle grey-blue for definition
          roughness: 0.25,
          metalness: 0.1,
          clearcoat: 1.0,
          clearcoatRoughness: 0.05,
        });

        const doorMat = new THREE.MeshPhysicalMaterial({
          color: 0x3b82f6, // rich blue tone
          roughness: 0.35,
          metalness: 0.2,
          clearcoat: 0.6,
        });

        const glassMirrorMat = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          metalness: 1.0,
          roughness: 0.05,
          envMapIntensity: 1.5,
        });

        const tileFloorMat = new THREE.MeshStandardMaterial({
          color: 0xd9d9d9,
          roughness: 0.7,
          metalness: 0.05,
        });

        // === ROOM DIMENSIONS ===
        const roomHeight = 120;

        // === FLOOR ===
        const floor = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width, 4, obj.height), 
          tileFloorMat
        );
        floor.position.y = 2;
        floor.receiveShadow = true;
        toiletGroup.add(floor);

        // === WALLS ===
        const backWall = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width, roomHeight, 6), 
          marbleMat
        );
        backWall.position.set(0, roomHeight / 2, -obj.height / 2);
        backWall.castShadow = true;
        toiletGroup.add(backWall);

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

        // === DOOR (Blue) ===
        const door = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.25, 85, 4), 
          doorMat
        );
        door.position.set(obj.width * 0.3, 42, obj.height / 2 - 2);
        door.castShadow = true;
        toiletGroup.add(door);

        // Door handle (gold)
        const handleMat = new THREE.MeshStandardMaterial({ 
          color: 0xffd700, 
          metalness: 1.0, 
          roughness: 0.2 
        });
        const handle = new THREE.Mesh(
          new THREE.CylinderGeometry(1.5, 1.5, 10, 16),
          handleMat
        );
        handle.rotation.z = Math.PI / 2;
        handle.position.set(obj.width * 0.2, 42, obj.height / 2 - 4);
        toiletGroup.add(handle);

        // === SECOND DOOR (Red) ===
        const door2Mat = new THREE.MeshPhysicalMaterial({
          color: 0xef4444, // red tone
          roughness: 0.35,
          metalness: 0.2,
          clearcoat: 0.6,
        });
        const door2 = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.25, 85, 4),
          door2Mat
        );
        door2.position.set(-obj.width * 0.3, 42, obj.height / 2 - 2);
        door2.castShadow = true;
        toiletGroup.add(door2);

        const handle2 = handle.clone();
        handle2.position.set(-obj.width * 0.2, 42, obj.height / 2 - 4);
        toiletGroup.add(handle2);

        // === MIRROR ===
        const mirror = new THREE.Mesh(
          new THREE.PlaneGeometry(obj.width * 0.4, 40), 
          glassMirrorMat
        );
        mirror.position.set(0, 70, -obj.height / 2 + 3);
        toiletGroup.add(mirror);

        // === SINK COUNTER ===
        const counterMat = new THREE.MeshPhysicalMaterial({
          color: 0xf5f5f5,
          metalness: 0.2,
          roughness: 0.3,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
        });
        const counter = new THREE.Mesh(
          new THREE.BoxGeometry(obj.width * 0.5, 12, obj.height * 0.25), 
          counterMat
        );
        counter.position.set(0, 32, -obj.height * 0.3);
        counter.castShadow = true;
        toiletGroup.add(counter);

        // === SINK BASIN (white ceramic) ===
        const sinkMat = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          roughness: 0.2,
          metalness: 0.05,
          clearcoat: 1.0,
          clearcoatRoughness: 0.05,
        });
        const sink = new THREE.Mesh(
          new THREE.CylinderGeometry(12, 12, 6, 32), 
          sinkMat
        );
        sink.position.set(0, 40, -obj.height * 0.3);
        toiletGroup.add(sink);

        // === FAUCET (chrome) ===
        const faucetMat = new THREE.MeshPhysicalMaterial({
          color: 0xcccccc,
          metalness: 1.0,
          roughness: 0.15,
        });
        const faucet = new THREE.Mesh(
          new THREE.TorusGeometry(4, 1, 8, 24, Math.PI),
          faucetMat
        );
        faucet.rotation.z = Math.PI / 2;
        faucet.position.set(0, 48, -obj.height * 0.35);
        toiletGroup.add(faucet);

        // === LIGHTING ===
        const softLight = new THREE.PointLight(0xffffff, 0.8, 300);
        softLight.position.set(0, roomHeight - 15, 0);
        softLight.castShadow = true;
        toiletGroup.add(softLight);

        const warmAccent = new THREE.PointLight(0xffcc88, 0.4, 200);
        warmAccent.position.set(-obj.width * 0.25, 60, obj.height * 0.25);
        toiletGroup.add(warmAccent);

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
      
      if (autoRotate && cameraRef.current) {
        const r = Math.sqrt(cameraRef.current.position.x ** 2 + cameraRef.current.position.z ** 2);
        const a = Math.atan2(cameraRef.current.position.z, cameraRef.current.position.x) + rotationSpeedRef.current;
        cameraRef.current.position.x = r * Math.cos(a);
        cameraRef.current.position.z = r * Math.sin(a);
        cameraRef.current.lookAt(0, 0, 0);
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
  }, [isOpen, floor, autoRotate]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">3D Floor Plan Preview</h2>
            <p className="text-blue-100 text-sm">Interactive 3D Visualization</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div ref={containerRef} className="flex-1 relative bg-gradient-to-br from-gray-100 to-gray-200" />

        <div className="bg-gray-50 border-t border-gray-200 p-4 flex items-center justify-between flex-wrap gap-2">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all ${
                autoRotate ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              Auto Rotate
            </button>
            <button
              onClick={() => cameraRef.current?.position.multiplyScalar(0.9)}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-2 font-medium transition-all"
            >
              <ZoomIn className="w-4 h-4" />
              Zoom In
            </button>
            <button
              onClick={() => cameraRef.current?.position.multiplyScalar(1.1)}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-2 font-medium transition-all"
            >
              <ZoomOut className="w-4 h-4" />
              Zoom Out
            </button>
            <button
              onClick={() => {
                if (cameraRef.current) {
                  cameraRef.current.position.set(600, 700, 600);
                  cameraRef.current.lookAt(0, 0, 0);
                }
              }}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-2 font-medium transition-all"
            >
              <Maximize2 className="w-4 h-4" />
              Reset View
            </button>
          </div>
          
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{floor.tables.length}</span> tables • 
            <span className="font-semibold ml-1">{floor.chairs.length}</span> chairs • 
            <span className="font-semibold ml-1">{floor.objects.length}</span> objects
          </div>
        </div>
      </div>
    </div>
  );
}