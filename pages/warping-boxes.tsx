// Components==============
import React from 'react';
import { OrbitControls, softShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Floor from '../components/warpingBoxes/Floor';
import Box from '../components/warpingBoxes/Box';
// =========================

softShadows();

export default function warpingBoxes() {
  return (
    <Canvas camera={{ fov: 60, position: [-5, 0, -5] }} shadows>
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={2}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight
        color={'blue'}
        intensity={0.5}
        distance={100}
        position={[25, 25, 25]}
      />
      <pointLight
        color={'blue'}
        intensity={1.5}
        distance={100}
        position={[-25, -25, -25]}
      />
      <Floor />
      <Box
        position={[-2, 1, 4]}
        args={[1, 1.5, 1.5]}
        rotationSpeed={0.005}
        color={'pink'}
        wobbleSpeed={4}
      />
      <Box
        position={[1, 1, 2]}
        args={[2, 1, 2]}
        rotationSpeed={0.01}
        color={'lightblue'}
        wobbleSpeed={2}
      />
      <Box
        position={[2.5, 1, -1]}
        args={[1.5, 1, 1]}
        rotationSpeed={0.015}
        color={'pink'}
        wobbleSpeed={4}
      />
    </Canvas>
  );
}
