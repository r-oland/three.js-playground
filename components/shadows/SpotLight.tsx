// Components==============
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { SpotLight } from 'three';
import useShadowHelper from '../../utilities/useShadowHelper';
// =========================

export default function SLight() {
  const {
    color,
    position,
    intensity,
    distance,
    angle,
    penumbra,
    decay,
    near,
    helper,
  } = useControls('s-lights.spot light', {
    color: '#ffb600',
    position: [2.5, 2, -5],
    intensity: 7,
    distance: { min: 0, max: 100, value: 15 },
    angle: { min: 0, max: Math.PI / 2, value: 0.42 },
    penumbra: { min: 0, max: 1, value: 1 },
    decay: { min: 0, max: 10, value: 2 },
    near: {
      value: 2,
      render: (get) => get('s-lights.spot light.helper'),
    },
    helper: false,
  });

  const ref = useRef<SpotLight>();
  useShadowHelper(ref, helper);

  return (
    <>
      <spotLight
        args={[color, intensity, distance, angle, penumbra, decay]}
        position={position}
        ref={ref}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={near}
        // // Gets overwritten by distance
        // shadow-camera-far={12}
        // // Gets overwritten by angle
        // shadow-camera-fov={20}
      />
    </>
  );
}
