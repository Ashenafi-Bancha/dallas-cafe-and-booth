import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

/* ─── Steam particles rising from the cup ─── */
function SteamParticles() {
  const count = 30;
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const speeds = useMemo(() => Array.from({ length: count }, () => 0.3 + Math.random() * 0.5), []);
  const offsets = useMemo(() => Array.from({ length: count }, () => Math.random() * Math.PI * 2), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (t < 5) return; // Only show steam after cup is filled

    for (let i = 0; i < count; i++) {
      const phase = (t * speeds[i] + offsets[i]) % 3;
      const x = Math.sin(t * 0.5 + offsets[i]) * 0.4;
      const z = Math.cos(t * 0.3 + offsets[i]) * 0.4;
      const y = phase * 1.2 + 1;
      const scale = Math.max(0, 0.08 * (1 - phase / 3));

      dummy.position.set(x, y, z);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#f8f1e7" transparent opacity={0.15} />
    </instancedMesh>
  );
}

/* ─── Jebena (Ethiopian coffee pot) ─── */
function Jebena() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Tilt the Jebena to pour: starts at 1s, fully tilted by 2s, holds until 4.5s, then rights itself
    let tilt = 0;
    if (t >= 0.5 && t < 2) {
      tilt = ((t - 0.5) / 1.5) * 0.8;
    } else if (t >= 2 && t < 4.5) {
      tilt = 0.8;
    } else if (t >= 4.5 && t < 5.5) {
      tilt = 0.8 * (1 - (t - 4.5) / 1);
    }

    if (groupRef.current) {
      groupRef.current.rotation.z = -tilt;
      // Subtle wobble while pouring
      if (t >= 2 && t < 4.5) {
        groupRef.current.rotation.z += Math.sin(t * 8) * 0.01;
      }
    }
  });

  const jebenaColor = '#3d2b1f';
  const jebenaAccent = '#5c4033';

  return (
    <group ref={groupRef} position={[0.8, 2.2, 0]}>
      {/* Main body – rounded pot */}
      <mesh castShadow>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshStandardMaterial color={jebenaColor} roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Neck */}
      <mesh castShadow position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.12, 0.25, 0.6, 16]} />
        <meshStandardMaterial color={jebenaColor} roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Spout */}
      <mesh castShadow position={[-0.35, 0.3, 0]} rotation={[0, 0, -0.6]}>
        <cylinderGeometry args={[0.06, 0.12, 0.5, 12]} />
        <meshStandardMaterial color={jebenaAccent} roughness={0.6} metalness={0.15} />
      </mesh>
      {/* Handle */}
      <mesh castShadow position={[0.4, 0.3, 0]} rotation={[0, 0, 0.3]}>
        <torusGeometry args={[0.25, 0.05, 8, 16, Math.PI]} />
        <meshStandardMaterial color={jebenaAccent} roughness={0.6} metalness={0.15} />
      </mesh>
      {/* Top lid */}
      <mesh castShadow position={[0, 1.05, 0]}>
        <sphereGeometry args={[0.14, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={jebenaAccent} roughness={0.5} metalness={0.2} />
      </mesh>
      {/* Decorative ring */}
      <mesh position={[0, 0.4, 0]}>
        <torusGeometry args={[0.28, 0.025, 8, 24]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.6} />
      </mesh>
    </group>
  );
}

/* ─── Coffee Cup with filling animation and አረፋ (foam) ─── */
function CoffeeCup() {
  const liquidRef = useRef<THREE.Mesh>(null!);
  const foamRef = useRef<THREE.Mesh>(null!);
  const streamRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Coffee stream: appears at 1.5s, flows until 4.5s
    if (streamRef.current) {
      if (t < 1.5) {
        streamRef.current.visible = false;
      } else if (t < 4.5) {
        streamRef.current.visible = true;
        // Stream wiggles slightly
        streamRef.current.position.x = Math.sin(t * 12) * 0.02;
      } else {
        streamRef.current.visible = false;
      }
    }

    // Coffee liquid level rises from 1.5s to 4.5s
    const fillProgress = Math.min(1, Math.max(0, (t - 1.5) / 3));
    if (liquidRef.current) {
      // Scale Y to simulate filling
      const liquidHeight = 0.05 + fillProgress * 1.5;
      liquidRef.current.scale.y = liquidHeight;
      liquidRef.current.position.y = -0.95 + (liquidHeight / 2);
    }

    // አረፋ (foam/crema) appears after cup is ~60% filled
    if (foamRef.current) {
      const foamStart = Math.min(1, Math.max(0, (t - 3.5) / 1.5));
      foamRef.current.visible = foamStart > 0;
      if (foamStart > 0) {
        const foamY = -0.95 + ((0.05 + fillProgress * 1.5));
        foamRef.current.position.y = foamY + 0.02;
        foamRef.current.scale.set(
          0.5 + foamStart * 0.5,
          0.5 + foamStart * 0.5,
          0.5 + foamStart * 0.5
        );
      }
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={[0, -1, 0]}>
        {/* Cup body – slight taper */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1.2, 0.85, 2, 32, 1, true]} />
          <meshStandardMaterial
            color="#f5efe6"
            roughness={0.15}
            metalness={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Cup bottom */}
        <mesh receiveShadow position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.85, 32]} />
          <meshStandardMaterial color="#f5efe6" roughness={0.15} metalness={0.05} />
        </mesh>
        {/* Cup rim (top ring) */}
        <mesh position={[0, 1, 0]}>
          <torusGeometry args={[1.2, 0.06, 12, 32]} />
          <meshStandardMaterial color="#e8ddd0" roughness={0.1} metalness={0.1} />
        </mesh>
        {/* Handle */}
        <mesh castShadow position={[1.35, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.45, 0.1, 12, 24, Math.PI]} />
          <meshStandardMaterial color="#f5efe6" roughness={0.15} metalness={0.05} />
        </mesh>
        {/* Saucer */}
        <mesh receiveShadow position={[0, -1.15, 0]}>
          <cylinderGeometry args={[1.8, 1.8, 0.12, 32]} />
          <meshStandardMaterial color="#f5efe6" roughness={0.1} metalness={0.08} />
        </mesh>
        {/* Saucer rim */}
        <mesh position={[0, -1.09, 0]}>
          <torusGeometry args={[1.8, 0.04, 8, 32]} />
          <meshStandardMaterial color="#e8ddd0" roughness={0.1} metalness={0.1} />
        </mesh>

        {/* ─── Coffee Liquid (filling up) ─── */}
        <mesh ref={liquidRef} position={[0, -0.92, 0]}>
          <cylinderGeometry args={[1.1, 0.8, 1, 32]} />
          <meshStandardMaterial
            color="#2c1810"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>

        {/* ─── አረፋ (Foam/Crema layer) ─── */}
        <mesh ref={foamRef} position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} visible={false}>
          <circleGeometry args={[1.1, 32]} />
          <MeshDistortMaterial
            color="#c9a96e"
            roughness={0.6}
            metalness={0.05}
            distort={0.15}
            speed={3}
          />
        </mesh>

        {/* ─── Coffee stream from Jebena ─── */}
        <mesh ref={streamRef} position={[0, 2.5, 0]} visible={false}>
          <cylinderGeometry args={[0.04, 0.06, 3, 12]} />
          <MeshDistortMaterial
            color="#3b2010"
            roughness={0.4}
            distort={0.3}
            speed={8}
          />
        </mesh>

        {/* Gold accent line on cup */}
        <mesh position={[0, 0.6, 0]}>
          <torusGeometry args={[1.15, 0.02, 8, 32]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.2} metalness={0.7} />
        </mesh>
      </group>
    </Float>
  );
}

/* ─── Floating coffee beans ─── */
function CoffeeBean({ position, scale, color, speed = 1 }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * 0.15 * speed;
    mesh.current.rotation.y += delta * 0.25 * speed;
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.8} floatIntensity={1.5} position={position}>
      <mesh ref={mesh} scale={scale} castShadow>
        <capsuleGeometry args={[0.4, 0.8, 4, 16]} />
        <meshStandardMaterial
          color={color}
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>
    </Float>
  );
}

/* ─── Main exported scene ─── */
export function CoffeeScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1, 7], fov: 40 }}
      style={{ touchAction: 'auto' }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <spotLight
        position={[5, 8, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={512}
        color="#fff5e0"
      />
      <pointLight position={[-4, 3, -3]} intensity={0.3} color="#D4AF37" />

      {/* Scene */}
      <group>
        <Jebena />
        <CoffeeCup />
        <CoffeeBean position={[-2.5, 1.5, -1.5]} scale={0.5} color="#4a3228" speed={0.8} />
        <CoffeeBean position={[2.8, -0.5, 0.5]} scale={0.35} color="#6b5040" speed={1.2} />
        <CoffeeBean position={[-1.8, -1.5, 1.5]} scale={0.4} color="#5c4033" />
        <CoffeeBean position={[2, 2, -1]} scale={0.3} color="#3d2b1f" speed={0.6} />
      </group>

      <SteamParticles />
      <ContactShadows position={[0, -2.3, 0]} opacity={0.4} scale={15} blur={2.5} far={4} color="#1a0f0a" />
      <Environment preset="apartment" />
    </Canvas>
  );
}
