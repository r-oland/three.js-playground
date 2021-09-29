// Components==============
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { Mesh } from 'three';
// =========================

export default function Cylinder() {
  const {
    radiusTop,
    radiusBottom,
    height,
    radialSegments,
    heightSegments,
    openEnded,
    wireframe,
    color,
    position,
  } = useControls('cylinder', {
    radiusTop: { value: 0.8, min: 0, max: 50 },
    radiusBottom: { value: 1, min: 0, max: 50 },
    height: { value: 2.5, min: 0, max: 50 },
    radialSegments: { value: 25, min: 0, max: 50 },
    heightSegments: { value: 1, min: 0, max: 50 },
    openEnded: false,
    wireframe: false,
    color: '#5accad',
    position: [-2.5, 2, 0],
  });

  const ref = useRef<Mesh>();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.z = clock.getElapsedTime() * 0.25;
    ref.current.rotation.x = clock.getElapsedTime() * 0.125;
  });

  return (
    <mesh position={position} ref={ref}>
      <cylinderGeometry
        args={[
          radiusTop,
          radiusBottom,
          height,
          radialSegments,
          heightSegments,
          openEnded,
        ]}
      />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
}
