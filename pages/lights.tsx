// Components==============
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useRef } from 'react';
import Cylinder from '../components/lights/Cylinder';
import Plane from '../components/lights/Plane';
import TorusKnot from '../components/lights/TorusKnot';
import { useControls } from 'leva';
import {
  DirectionalLight,
  HemisphereLight,
  PointLight,
  SpotLight,
} from 'three';
// =========================

export default function Lights() {
  const ambientLight = useControls('l-lights.ambient light', {
    color: '#242424',
    intensity: { value: 0.6, min: 0, max: 5 },
  });

  const directionalLight = useControls('l-lights.directional light', {
    color: '#2400ff',
    intensity: { value: 0.5, min: 0, max: 5 },
    position: [7, 5, 3],
    helper: false,
  });

  const hemisphereLight = useControls('l-lights.hemisphere light', {
    skyColor: '#3d23ad',
    groundColor: '#000000',
    intensity: { value: 0.8, min: 0, max: 2 },
    position: [0, 5, 0],
  });

  const pointLight = useControls('l-lights.point light', {
    color: '#0403ff',
    intensity: 2,
    distance: { min: 0, max: 100, value: 7 },
    decay: { min: 0, max: 10, value: 2 },
    helper: false,
    position: [0, 0.1, 2],
  });

  const spotLight = useControls('l-lights.spot light', {
    color: '#00ffea',
    intensity: 1.5,
    distance: { min: 0, max: 100, value: 20 },
    angle: { min: 0, max: Math.PI / 2, value: 0.38 },
    penumbra: { min: 0, max: 1, value: 1 },
    decay: { min: 0, max: 10, value: 2 },
    helper: false,
    position: [0, 10, 6],
  });

  const dirRef = useRef<DirectionalLight>(null);
  const pointRef = useRef<PointLight>(null);
  const spotRef = useRef<SpotLight>(null);

  return (
    <Canvas
      dpr={
        typeof window !== 'undefined'
          ? Math.min(window.devicePixelRatio, 2)
          : undefined
      }
      camera={{ fov: 45, position: [2, 5, 10] }}
    >
      <Plane />
      <Cylinder />
      <TorusKnot />
      <OrbitControls />
      {/* Good performance */}
      <ambientLight args={[ambientLight.color, ambientLight.intensity]} />
      {/* Mild performance */}
      <directionalLight
        args={[directionalLight.color, directionalLight.intensity]}
        position={directionalLight.position}
        ref={dirRef}
      />
      {/* Good performance */}
      <hemisphereLight
        args={[
          hemisphereLight.skyColor,
          hemisphereLight.groundColor,
          hemisphereLight.intensity,
        ]}
        position={hemisphereLight.position}
      />
      {/* Mild performance */}
      <pointLight
        position={pointLight.position}
        args={[
          pointLight.color,
          pointLight.intensity,
          pointLight.distance,
          pointLight.decay,
        ]}
        ref={pointRef}
      />
      {/* Bad performance */}
      <spotLight
        position={spotLight.position}
        args={[
          spotLight.color,
          spotLight.intensity,
          spotLight.distance,
          spotLight.angle,
          spotLight.penumbra,
          spotLight.decay,
        ]}
        ref={spotRef}
      />
      {!!dirRef.current && directionalLight.helper && (
        <directionalLightHelper
          args={[dirRef.current, 2, directionalLight.color]}
        />
      )}
      {!!pointRef.current && pointLight.helper && (
        <pointLightHelper args={[pointRef.current, 1, pointLight.color]} />
      )}
      {!!spotRef.current && spotLight.helper && (
        <spotLightHelper args={[spotRef.current, spotLight.color]} />
      )}
    </Canvas>
  );
}
