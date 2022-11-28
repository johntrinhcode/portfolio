import { OrthographicCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { BufferGeometry, Material, Points, Vector3 } from 'three';

export const Screensaver = () => {
  const cam = useRef();

  return (
    <div id="gradient-layer-1" className="w-screen absolute -z-10">
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
  );
};

const ROTATION_SPEED = 0.00125;
const TorusPoints = () => {
  const geometry = useRef<Points<BufferGeometry, Material | Material[]>>();

  useFrame(() => {
    geometry.current.rotation.z += ROTATION_SPEED;
  });

  return (
    <points ref={geometry} position={new Vector3(-15, 0, 0)}>
      <torusGeometry args={[10, 5, 40, 100]} />
      <pointsMaterial size={0.005} />
    </points>
  );
};
