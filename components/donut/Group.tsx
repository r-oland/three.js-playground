// Components==============
import { animated } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { Mesh } from 'three';
// =========================

export default function Group() {
  const donut = useRef<Mesh>();
  const box = useRef<Mesh>();
  const group = useRef<Mesh>();

  // const { x } = useSpring({
  //   loop: { reverse: true },
  //   from: { x: 1 },
  //   to: { x: -1 },
  //   config: config.wobbly,
  // });

  useFrame(({ clock }) => {
    if (!box.current || !donut.current) return;
    const time = clock.getElapsedTime();

    box.current.rotation.x = time / 5;
    donut.current.rotation.y = time / 5;
  });

  // const count = 900;
  // const totalCount = count * 3;
  // const floatArr = new Float32Array(totalCount);

  // for (let i = 0; i < totalCount; i++) {
  //   floatArr[i] = (Math.random() - 0.5) * 5;
  // }

  const groupProps = useControls('group', {
    position: {
      value: [0, 0, 0],
      step: 0.1,
    },
  });

  const donutProps = useControls('group.donut', { color: '#434b47' });

  const center = useControls('group.center', {
    color: '#eb5252',
    wireframe: true,
  });

  return (
    <group {...groupProps} ref={group}>
      <animated.mesh
        // position-x={x}
        ref={box}
      >
        <octahedronBufferGeometry args={[0.3, 0]} />
        {/* <boxGeometry args={[0.2, 0.2, 0.2, 8, 4]} /> */}
        {/* <bufferGeometry>
          <bufferAttribute
            attachObject={['attributes', 'position']}
            array={floatArr}
            itemSize={3}
            count={1}
          />
        </bufferGeometry> */}
        <meshPhysicalMaterial {...center} />
      </animated.mesh>
      <mesh ref={donut} rotation={[0, 0, 0]}>
        <torusGeometry args={[1, 0.2, 10, 120]} />
        <meshPhysicalMaterial {...donutProps} />
      </mesh>
    </group>
  );
}
