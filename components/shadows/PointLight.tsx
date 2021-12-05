// Components==============
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { PointLight } from 'three';
import useShadowHelper from '../../utilities/useShadowHelper';
// =========================

export default function PLight() {
  const { position, color, intensity, distance, decay, helper, near } =
    useControls('s-lights.point light', {
      position: [0, 5, 0],
      color: '#8b09e5',
      intensity: 20,
      distance: { min: 0, max: 100, value: 8 },
      decay: { min: 0, max: 10, value: 2 },
      helper: false,
      near: {
        value: 1,
        render: (get) => get('s-lights.directional light.helper'),
      },
    });

  const ref = useRef<PointLight>();
  useShadowHelper(ref, helper);

  return (
    <>
      <pointLight
        args={[color, intensity, distance, decay]}
        position={position}
        ref={ref}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={near}
        // Dont change the FOV this will mess up the shadows
      />
    </>
  );
}
