// Components==============
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useMemo, useRef } from 'react';
import { Mesh } from 'three';
// =========================

export const colours = [
  0x08baad, 0x5762d5, 0x8a66d8, 0xed6a5a, 0xf4f1bb, 0xb04de5,
];

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

  const colorIndex = Math.floor(Math.random() * colours.length);
  const genColor = useMemo(() => colours[colorIndex], []);

  const { position, color, wireframe, scale } = useControls(
    'box',
    {
      scale: 0.7,
      position: {
        value: [0, 0, 0],
        step: 0.1,
      },
      color: genColor,
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
