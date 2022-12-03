import { OrthographicCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BufferGeometry, Material, Points, Vector3 } from 'three';

export const Screensaver = () => {
  const cam = useRef();

  return (
    <>
      <div
        id="gradient-layer-1"
        className="w-screen h-screen absolute top-0 -z-10"
      />
      <div className="h-screen w-screen absolute top-0 -z-[5]">
        <Canvas>
          <OrthographicCamera
            ref={cam}
            makeDefault
            zoom={40}
            position={[0, 0, 10]}
          />
          <TorusPoints />
          <pointLight args={[0xffffff, 0.1]} position={new Vector3(2, 3, 4)} />
        </Canvas>
      </div>
    </>
  );
};

const ROTATION_SPEED = 0.00125;
const TorusPoints = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const geometry = useRef<Points<BufferGeometry, Material | Material[]>>();

  useFrame(() => {
    geometry.current.rotation.z += ROTATION_SPEED;
  });

  return (
    <points ref={geometry} position={new Vector3(-15, 0, 0)}>
      <torusGeometry args={[10, 5, 40, 100]} />
      <pointsMaterial size={isTabletOrMobile ? 1 : 0.005} />
    </points>
  );
};
