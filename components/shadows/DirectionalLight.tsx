// Components==============
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { DirectionalLight } from 'three';
import useShadowHelper from '../../utilities/useShadowHelper';
// =========================

export default function DLight() {
  const { color, position, intensity, helper, near, far } = useControls(
    's-lights.directional light',
    {
      color: '#24b5ab',
      position: [1.5, 6, 6],
      intensity: 1,
      helper: false,
      near: {
        value: 2,
        render: (get) => get('s-lights.directional light.helper'),
      },
      far: {
        value: 12,
        render: (get) => get('s-lights.directional light.helper'),
      },
    }
  );

  const dirRef = useRef<DirectionalLight>();
  useShadowHelper(dirRef, helper);

  return (
    <>
      <directionalLight
        args={[color, intensity]}
        position={position}
        ref={dirRef}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={near}
        shadow-camera-far={far}
        shadow-camera-left={-3}
        shadow-camera-right={3}
        shadow-camera-top={3}
        shadow-camera-bottom={-3}
      />
    </>
  );
}
