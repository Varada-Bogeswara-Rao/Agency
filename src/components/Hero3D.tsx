"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
            // Gentle floating animation
            sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
            // Position to the right Side
            sphereRef.current.position.x = 3.5; // Move it to the right
        }
    });

    return (
        <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.3}>
            <MeshDistortMaterial
                color="#111827" // gray-900 to match the brand
                attach="material"
                distort={0.4} // Level of distortion
                speed={1.5} // Speed of distortion animation
                roughness={0.2}
                metalness={0.8}
                clearcoat={1}
                clearcoatRoughness={0.1}
            />
        </Sphere>
    );
}

export function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden opacity-60 mix-blend-multiply md:opacity-100 md:mix-blend-normal pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#e5e7eb" />
                <AnimatedSphere />
                {/* Adds realistic reflections to the material */}
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
