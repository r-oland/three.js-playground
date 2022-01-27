import { useControls } from 'leva';
import niceColors from 'nice-color-palettes';
import React, { useLayoutEffect, useMemo, useRef } from 'react';
// @ts-ignore
import { Color, InstancedMesh, Object3D, VertexColors } from 'three';

const size = 50;
const temp = new Object3D();
const tempColor = new Color();
const colors = new Array(size)
  // @ts-ignore
  .fill()
  .map(() => niceColors[17][Math.floor(Math.random() * 5)]);

export default function OtherBoxes() {
  const { spread, scale } = useControls('other-boxes', {
    spread: { value: 12, min: 1, max: 500, step: 1 },
    scale: { value: 0.6, min: 0.5, max: 5, step: 0.25 },
  });

  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(size)
          // @ts-ignore
          .fill()
          .flatMap((_, i) => tempColor.set(colors[i]).toArray())
      ),
    []
  );
  const ref = useRef<InstancedMesh>();
  useLayoutEffect(() => {
    if (!ref.current) return;

    for (let i = 0; i < 50; i++) {
      temp.position.set(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread
      );
      temp.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      temp.updateMatrix();
      ref.current.setMatrixAt(i, temp.matrix);
    }

    ref.current.instanceMatrix.needsUpdate = true;
  }, [spread]);

  return (
    // @ts-ignore
    <instancedMesh ref={ref} args={[null, null, size]}>
      <boxBufferGeometry args={[scale, scale, scale]}>
        <instancedBufferAttribute
          attachObject={['attributes', 'color']}
          args={[colorArray, 3]}
        />
      </boxBufferGeometry>
      <meshLambertMaterial attach="material" vertexColors={VertexColors} />
    </instancedMesh>
  );
}
