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

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f4f8);
    sceneRef.current = scene;

    // Camera setup (isometric-style perspective)
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      10000
    );
    camera.position.set(500, 600, 500);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(300, 500, 300);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.left = -600;
    directionalLight.shadow.camera.right = 600;
    directionalLight.shadow.camera.top = 600;
    directionalLight.shadow.camera.bottom = -600;
    scene.add(directionalLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-300, 300, -300);
    scene.add(fillLight);

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(1200, 1200);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xe8e8e8,
      roughness: 0.8,
      metalness: 0.2
    });
    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    floorMesh.position.y = -2;
    scene.add(floorMesh);

    // Grid helper
    const gridHelper = new THREE.GridHelper(1200, 60, 0xcccccc, 0xe0e0e0);
    gridHelper.position.y = -1;
    scene.add(gridHelper);

    // Create walls
    floor.walls.forEach(wall => {
      const length = Math.sqrt(
        Math.pow(wall.endX - wall.startX, 2) + 
        Math.pow(wall.endY - wall.startY, 2)
      );
      const angle = Math.atan2(wall.endY - wall.startY, wall.endX - wall.startX);
      
      const wallHeight = wall.type === 'wall' ? 80 : 60;
      const wallGeometry = new THREE.BoxGeometry(length, wallHeight, wall.thickness);
      
      let wallMaterial;
      if (wall.type === 'door') {
        wallMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xd97706,
          roughness: 0.6,
          metalness: 0.1
        });
      } else if (wall.type === 'window') {
        wallMaterial = new THREE.MeshPhysicalMaterial({ 
          color: 0x3b82f6,
          transparent: true,
          opacity: 0.4,
          roughness: 0.1,
          metalness: 0.9,
          transmission: 0.5
        });
      } else {
        wallMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x4b5563,
          roughness: 0.8,
          metalness: 0.2
        });
      }
      
      const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
      wallMesh.position.x = wall.startX + (wall.endX - wall.startX) / 2 - 400;
      wallMesh.position.y = wallHeight / 2;
      wallMesh.position.z = -(wall.startY + (wall.endY - wall.startY) / 2 - 400);
      wallMesh.rotation.y = -angle;
      wallMesh.castShadow = true;
      wallMesh.receiveShadow = true;
      scene.add(wallMesh);
    });

    // Create fixed elements
    floor.fixedElements.forEach(element => {
      let geometry, material;
      
      if (element.type === 'pillar' || element.type === 'column') {
        const radius = Math.min(element.width, element.height) / 2;
        geometry = element.type === 'pillar' 
          ? new THREE.CylinderGeometry(radius, radius, 120, 32)
          : new THREE.BoxGeometry(element.width, 120, element.height);
        
        material = new THREE.MeshStandardMaterial({
          color: 0x6b7280,
          roughness: 0.7,
          metalness: 0.3
        });
      } else { // stairs
        geometry = new THREE.BoxGeometry(element.width, 40, element.height);
        material = new THREE.MeshStandardMaterial({
          color: 0x92400e,
          roughness: 0.8
        });
      }
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = element.x - 400 + element.width / 2;
      mesh.position.y = element.type === 'stairs' ? 20 : 60;
      mesh.position.z = -(element.y - 400 + element.height / 2);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
    });

    // Create objects (bar, kitchen, toilet)
    floor.objects.forEach(obj => {
      const objHeight = 35;
      const geometry = new THREE.BoxGeometry(obj.width, objHeight, obj.height);
      
      let color;
      if (obj.type === 'bar') color = 0x9333ea;
      else if (obj.type === 'kitchen') color = 0xf97316;
      else color = 0x06b6d4;
      
      const material = new THREE.MeshStandardMaterial({ 
        color,
        roughness: 0.5,
        metalness: 0.3
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = obj.x - 400 + obj.width / 2;
      mesh.position.y = objHeight / 2;
      mesh.position.z = -(obj.y - 400 + obj.height / 2);
      mesh.rotation.y = -(obj.rotation * Math.PI / 180);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);

      // Add label
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = 256;
        canvas.height = 64;
        context.fillStyle = 'white';
        context.font = 'bold 24px Arial';
        context.textAlign = 'center';
        context.fillText(obj.name, 128, 40);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(
          mesh.position.x,
          objHeight + 20,
          mesh.position.z
        );
        sprite.scale.set(60, 15, 1);
        scene.add(sprite);
      }
    });

    // Create tables and chairs
    floor.tables.forEach(table => {
      const tableHeight = 25;
      const actualWidth = table.shape === 'rectangle' ? table.width * 1.5 : table.width;
      
      let tableGeometry;
      if (table.shape === 'circle') {
        tableGeometry = new THREE.CylinderGeometry(actualWidth / 2, actualWidth / 2, tableHeight, 32);
      } else {
        tableGeometry = new THREE.BoxGeometry(actualWidth, tableHeight, table.height);
      }
      
      const tableMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x059669,
        roughness: 0.4,
        metalness: 0.2
      });
      
      const tableMesh = new THREE.Mesh(tableGeometry, tableMaterial);
      tableMesh.position.x = table.x - 400 + actualWidth / 2;
      tableMesh.position.y = tableHeight / 2;
      tableMesh.position.z = -(table.y - 400 + table.height / 2);
      tableMesh.rotation.y = -(table.rotation * Math.PI / 180);
      tableMesh.castShadow = true;
      tableMesh.receiveShadow = true;
      scene.add(tableMesh);

      // Table label
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = 128;
        canvas.height = 64;
        context.fillStyle = 'white';
        context.font = 'bold 28px Arial';
        context.textAlign = 'center';
        const nameMatch = table.name.match(/\d+/);
        const label = nameMatch ? nameMatch[0] : table.name.substring(0, 3);
        context.fillText(label, 64, 45);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(
          tableMesh.position.x,
          tableHeight + 10,
          tableMesh.position.z
        );
        sprite.scale.set(30, 15, 1);
        scene.add(sprite);
      }

      // Create chairs for this table
      const tableChairs = floor.chairs.filter(c => c.tableId === table.id);
      tableChairs.forEach(chair => {
        const chairSize = chair.size || 40;
        const chairHeight = 30;
        
        // Chair seat
        const seatGeometry = new THREE.BoxGeometry(chairSize * 0.8, 4, chairSize * 0.8);
        const chairMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xd97706,
          roughness: 0.6
        });
        const seatMesh = new THREE.Mesh(seatGeometry, chairMaterial);
        
        // Chair back
        const backGeometry = new THREE.BoxGeometry(chairSize * 0.8, chairHeight * 0.6, 3);
        const backMesh = new THREE.Mesh(backGeometry, chairMaterial);
        
        // Calculate chair position relative to table
        const tableRotationRad = table.rotation * Math.PI / 180;
        const totalChairsOnSide = tableChairs.filter(c => c.position === chair.position).length;
        const sideLength = chair.position === 'top' || chair.position === 'bottom' 
          ? actualWidth 
          : table.height;
        
        const availableSpace = sideLength - (chairSize * totalChairsOnSide);
        const gap = totalChairsOnSide > 1 
          ? availableSpace / (totalChairsOnSide + 1) 
          : availableSpace / 2;
        
        const offsetAlongSide = gap + (chair.index * (chairSize + gap)) + chairSize / 2;
        
        let relX = 0, relZ = 0;
        const spacing = chairSize * 0.4;
        
        switch (chair.position) {
          case 'top':
            relX = offsetAlongSide - actualWidth / 2;
            relZ = table.height / 2 + spacing + chairSize / 2;
            break;
          case 'bottom':
            relX = offsetAlongSide - actualWidth / 2;
            relZ = -(table.height / 2 + spacing + chairSize / 2);
            break;
          case 'left':
            relX = -(actualWidth / 2 + spacing + chairSize / 2);
            relZ = offsetAlongSide - table.height / 2;
            break;
          case 'right':
            relX = actualWidth / 2 + spacing + chairSize / 2;
            relZ = offsetAlongSide - table.height / 2;
            break;
        }
        
        // Apply table rotation
        const rotX = relX * Math.cos(tableRotationRad) - relZ * Math.sin(tableRotationRad);
        const rotZ = relX * Math.sin(tableRotationRad) + relZ * Math.cos(tableRotationRad);
        
        seatMesh.position.x = tableMesh.position.x + rotX;
        seatMesh.position.y = chairHeight * 0.5;
        seatMesh.position.z = tableMesh.position.z - rotZ;
        
        // Chair rotation
        let chairRotation = 0;
        switch (chair.position) {
          case 'top': chairRotation = Math.PI; break;
          case 'right': chairRotation = Math.PI / 2; break;
          case 'left': chairRotation = -Math.PI / 2; break;
        }
        seatMesh.rotation.y = chairRotation - tableRotationRad;
        
        backMesh.position.copy(seatMesh.position);
        backMesh.position.y = chairHeight * 0.7;
        backMesh.position.z += Math.sin(seatMesh.rotation.y) * (chairSize * 0.35);
        backMesh.position.x += Math.cos(seatMesh.rotation.y) * (chairSize * 0.35);
        backMesh.rotation.y = seatMesh.rotation.y;
        
        seatMesh.castShadow = true;
        backMesh.castShadow = true;
        seatMesh.receiveShadow = true;
        backMesh.receiveShadow = true;
        
        scene.add(seatMesh);
        scene.add(backMesh);
      });
    });

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      if (autoRotate && sceneRef.current && cameraRef.current) {
        const radius = Math.sqrt(
          cameraRef.current.position.x ** 2 + cameraRef.current.position.z ** 2
        );
        const angle = Math.atan2(cameraRef.current.position.z, cameraRef.current.position.x);
        const newAngle = angle + rotationSpeedRef.current;
        
        cameraRef.current.position.x = radius * Math.cos(newAngle);
        cameraRef.current.position.z = radius * Math.sin(newAngle);
        cameraRef.current.lookAt(0, 0, 0);
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (containerRef.current && cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [isOpen, floor, autoRotate]);

  const handleZoom = (direction: 'in' | 'out') => {
    if (!cameraRef.current) return;
    const factor = direction === 'in' ? 0.9 : 1.1;
    cameraRef.current.position.multiplyScalar(factor);
  };

  const resetCamera = () => {
    if (!cameraRef.current) return;
    cameraRef.current.position.set(500, 600, 500);
    cameraRef.current.lookAt(0, 0, 0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">3D Floor Plan Preview</h2>
            <p className="text-blue-100 text-sm">Interactive 3D Visualization</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 3D Canvas */}
        <div ref={containerRef} className="flex-1 relative bg-gradient-to-br from-gray-100 to-gray-200" />

        {/* Controls */}
        <div className="bg-gray-50 border-t border-gray-200 p-4 flex items-center justify-between flex-wrap gap-2">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all ${
                autoRotate
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              Auto Rotate
            </button>
            <button
              onClick={() => handleZoom('in')}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-2 font-medium transition-all"
            >
              <ZoomIn className="w-4 h-4" />
              Zoom In
            </button>
            <button
              onClick={() => handleZoom('out')}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-2 font-medium transition-all"
            >
              <ZoomOut className="w-4 h-4" />
              Zoom Out
            </button>
            <button
              onClick={resetCamera}
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
};
