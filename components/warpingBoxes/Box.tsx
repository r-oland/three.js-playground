// Components==============
import { animated, config, useSpring } from '@react-spring/three';
import { MeshWobbleMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { Mesh } from 'three';
// =========================

export default function Box({
  position,
  args,
  rotationSpeed,
  color,
  wobbleSpeed,
}: {
  position: [number, number, number];
  args: [number, number, number];
  rotationSpeed: number;
  color: string;
  wobbleSpeed: number;
}) {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<Mesh>(null);

  const { scale } = useSpring({
    scale: toggle ? 1 : 1.2,
    config: config.wobbly,
  });

  useFrame(() => {
    if (!ref?.current) return;

    ref.current.rotation.x = ref.current.rotation.y += rotationSpeed;
  });

  return (
    <animated.mesh
      position={position}
      scale={scale}
      onClick={() => setToggle((prev) => !prev)}
      ref={ref}
      castShadow
    >
      <boxGeometry args={args} />
      {/* @ts-ignore */}
      <MeshWobbleMaterial
        color={color}
        speed={wobbleSpeed}
        factor={0.6}
        // map={colorMap}
      />
    </animated.mesh>
  );
}
