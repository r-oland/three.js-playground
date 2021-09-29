// Components==============
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { Mesh } from 'three';
// =========================

export default function TorusKnot() {
  const {
    radius,
    tube,
    tubularSegments,
    radialSegments,
    p,
    q,
    wireframe,
    color,
    position,
  } = useControls('torus knot', {
    radius: { value: 1, min: 0, max: 50 },
    tube: { value: 0.3, min: 0, max: 10 },
    tubularSegments: { value: 250, min: 0, max: 250 },
    radialSegments: { value: 100, min: 0, max: 250 },
    p: { value: 9, min: 0, max: 10 },
    q: { value: 4.5, min: 0, max: 10 },
    wireframe: false,
    color: '#63a2c2',
    position: [2.5, 2, 0],
  });

  const ref = useRef<Mesh>();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.z = clock.getElapsedTime() * 0.25;
    ref.current.rotation.x = clock.getElapsedTime() * 0.125;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry
        args={[radius, tube, tubularSegments, radialSegments, p, q]}
      />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
}
