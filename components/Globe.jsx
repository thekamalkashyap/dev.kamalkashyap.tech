/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 holo_shapeshifter.glb 
Author: sliqixy (https://sketchfab.com/sliqixy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/holo-shapeshifter-5d581768fbe3425c8540e3ff329707bc
Title: Holo Shapeshifter
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ scroll }, props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/globe.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["holy cow! an animation?!"].play();
  }, []);

  // useEffect(() => {
  //   console.log(scroll);
  // }, [scroll]);

  useFrame(() => {
    group.current.position.z = scroll / 1200;
  });

  return (
    <group ref={group} {...props} dispose={null} scale={2.5}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_9.geometry}
        material={materials.Material}
        skeleton={nodes.Object_9.skeleton}
        morphTargetDictionary={nodes.Object_9.morphTargetDictionary}
        morphTargetInfluences={nodes.Object_9.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("/globe.glb");
