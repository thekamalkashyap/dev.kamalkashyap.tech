/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 macbook-pro.glb 
*/

import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Model({ img }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/macbook-pro.glb");
  const texture = useTexture(img);
  
  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(elapsedTime) / 3;
  });

  return (
    <group ref={group} dispose={null}>
      <mesh geometry={nodes.Keyboard.geometry} material={materials.Frame}>
        <mesh geometry={nodes.Body.geometry} material={materials.Frame} />
        <mesh geometry={nodes.Touchbar.geometry} material={materials.Frame} />
      </mesh>
      <mesh
        geometry={nodes.Frame.geometry}
        material={materials.Frame}
        position={[0, -0.62, 0.047]}
      >
        <mesh
          geometry={nodes.Logo.geometry}
          material={materials.Logo}
          position={[0, 1.2, -0.106]}
        />
        <mesh
          geometry={nodes.Screen.geometry}
          material={materials.Screen}
          position={[0, 1.2, -0.106]}
          rotation={[0, 0, Math.PI]}
        >
          <meshBasicMaterial map={texture} />
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/macbook-pro.glb");
