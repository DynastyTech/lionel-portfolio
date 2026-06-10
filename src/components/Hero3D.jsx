import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';
import './Hero3D.css';

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const AnimatedSphere = () => {
  const { theme } = useTheme();

  return (
    <Float
      speed={prefersReduced ? 0 : 2}
      rotationIntensity={prefersReduced ? 0 : 1}
      floatIntensity={prefersReduced ? 0 : 2}
    >
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color={theme === 'dark' ? '#667eea' : '#764ba2'}
          attach="material"
          distort={prefersReduced ? 0 : 0.5}
          speed={prefersReduced ? 0 : 2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="hero-3d">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate={!prefersReduced} autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default Hero3D;

