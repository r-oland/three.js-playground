// Components==============
import { useLoader } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useContext, useEffect, useRef } from 'react';
import { FontLoader, TextGeometry } from 'three';
import { TextContext } from '../../pages/text';
// =========================

export default function Item() {
  const { position, text, curveSegments, size, height } = useControls('text', {
    position: [0, 0, 0],
    text: 'Hello world!',
    curveSegments: 20,
    size: 0.7,
    height: 0.07,
  });

  const font = useLoader(FontLoader, '/Raleway SemiBold_Regular.json');
  const { material } = useContext(TextContext);

  const ref = useRef<TextGeometry>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.computeBoundingBox();
      ref.current.center();
    }
  }, [text, size, height, curveSegments]);

  return (
    <mesh position={position} material={material}>
      <textGeometry
        ref={ref}
        args={[text, { font, size, height, curveSegments }]}
      />
    </mesh>
  );
}
