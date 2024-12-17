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
    gltf.scene.scale.set(1, 1, 4); 
    gltf.scene.position.set(0, 0, 0); 
  }

  return <primitive ref={modelRef} object={gltf.scene} />;
};

const Leaf = () => {
  return (
    <div className="absolute w-full flex justify-center items-center" style={{ paddingTop: "100px" }}>
      <div style={{ width: "100%", height: "400px" }}>
        <Canvas>
          <ambientLight intensity={1} />  
          <directionalLight position={[5, 5, 5]} intensity={1.5} /> 
          <pointLight position={[-5, -5, 5]} intensity={1} />  
          <spotLight position={[5, 5, 10]} angle={Math.PI / 6} intensity={2} />  
          <Model />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default Leaf;
