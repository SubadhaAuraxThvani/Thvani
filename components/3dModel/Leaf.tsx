"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const gltf = useGLTF("/model/leaf2.glb");
  const modelRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  if (gltf.scene) {
    gltf.scene.scale.set(1, 1, 4); // Adjust scale to fit
    gltf.scene.position.set(0, 0, 0); // Ensure the model is in the center
  }

  return <primitive ref={modelRef} object={gltf.scene} />;
};

const Leaf = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10" style={{ paddingTop: "200px" }}>
      <div style={{ width: "100%", height: "400px" }}>
        <Canvas>
          <ambientLight intensity={1} />  {/* Increased ambient light intensity */}
          <directionalLight position={[5, 5, 5]} intensity={1.5} /> {/* Directional light */}
          <pointLight position={[-5, -5, 5]} intensity={1} />  {/* Point light for additional illumination */}
          <spotLight position={[5, 5, 10]} angle={Math.PI / 6} intensity={2} />  {/* Spot light */}
          <Model />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default Leaf;
