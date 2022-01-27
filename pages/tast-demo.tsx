// Components==============
import { OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useContext, useEffect } from 'react';
import Box from '../components/tastDemo/Box';
import OtherBoxes from '../components/tastDemo/OtherBoxes';
import { LayoutContext } from '../Layout/Layout';
// =========================

const CameraEffect = () => {
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    const timeout = setTimeout(() => {
      camera.position.set(5, 0, 0);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return null;
};

export default function BasicBox() {
  useControls('d-lights', {}, { collapsed: true });

  const { shortCanvas } = useContext(LayoutContext);

  const ambient = useControls('d-lights.ambient', {
    intensity: 0.1,
  });

  const dirLight = useControls('d-lights.directional light', {
    position: [0, 10, 0],
    intensity: 0.4,
  });

  const pointer1 = useControls('d-lights.pointer light 1', {
    color: '#fff',
    intensity: { value: 1, min: 0, max: 5 },
    distance: 100,
    position: { value: [25, 25, 25], step: 1 },
  });

  const pointer2 = useControls('d-lights.pointer light 2', {
    color: '#356ed1',
    intensity: { value: 1, min: 0, max: 5 },
    distance: 100,
    position: { value: [-25, -25, -25], step: 1 },
  });

  return (
    <Canvas
      camera={{ position: [2, 0, 0], fov: 45, far: 1000, near: 0.1 }}
      dpr={
        typeof window !== 'undefined'
          ? Math.min(window.devicePixelRatio, 2)
          : undefined
      }
    >
      <Box />
      {!shortCanvas && <OtherBoxes />}
      <ambientLight {...ambient} />
      <directionalLight {...dirLight} />
      <pointLight {...pointer1} />
      <pointLight {...pointer2} />
      <OrbitControls />
      {!shortCanvas && <CameraEffect />}
    </Canvas>
  );
}
