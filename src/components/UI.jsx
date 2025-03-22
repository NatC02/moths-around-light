import { useGLTF } from "@react-three/drei";
import { atom } from "jotai";

export const themeAtom = atom("space");

export const THEMES = {
  space: {
    key: "space",
    skyColor: "#E6B89C",
    groundColor: "#00BFB2",
    models: [`moth`],
    dof: false,
    bloom: true,
  }
};

Object.values(THEMES).forEach((theme) => {
  theme.models.forEach((model) => useGLTF.preload(`/models/${model}.glb`));
});