// Components==============
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { Mesh } from 'three';
// =========================

export default function Box() {
  const box = useRef<Mesh>();

  useFrame(({ clock }) => {
    if (!box.current) return;
    const time = clock.getElapsedTime();

    box.current.rotation.x = time / 5;
    box.current.rotation.y = time / 10;
  });

  const count = 900;
  const totalCount = count * 3;
  const floatArr = new Float32Array(totalCount);

  for (let i = 0; i < totalCount; i++) {
    floatArr[i] = (Math.random() - 0.5) * 5;
  }

  const { position, color, wireframe, scale } = useControls(
    'box',
    {
      scale: 0.7,
      position: {
        value: [0, 0, 0],
        step: 0.1,
      },
      color: '#eb5252',
      wireframe: false,
    },
    { collapsed: true }
  );

  const meshProps = {
    position,
  };

  const materialProps = {
    color,
    wireframe,
  };

  return (
    <mesh ref={box} {...meshProps}>
      <octahedronGeometry args={[0.3, 0]} />
      <boxGeometry args={[scale, scale, scale]} />
      <meshPhysicalMaterial {...materialProps} />
    </mesh>
  );
}
