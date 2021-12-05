// Components==============
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import { CameraHelper, Light } from 'three';
// =========================

export default function useShadowHelper(
  ref: React.MutableRefObject<Light | undefined>,
  visible?: boolean
) {
  const helper = useRef<CameraHelper>();
  const scene = useThree((state) => state.scene);

  React.useEffect(() => {
    if (!ref.current || !visible) return;

    helper.current = new CameraHelper(ref.current?.shadow.camera);
    if (helper.current) {
      scene.add(helper.current);
    }

    return () => {
      if (helper.current) {
        scene.remove(helper.current);
      }
    };
  }, [helper.current?.uuid, ref.current, visible]);

  useFrame(() => {
    if (helper.current?.update) {
      helper.current.update();
    }
  });
}
