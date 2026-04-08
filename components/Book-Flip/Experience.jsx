/*
  Experience.jsx
  - Controls camera framing and transforms for the book. Smoothly eases
    the book group between the intro pose and the open pose so the 3D
    content scales/positions consistently across viewports.
*/
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { easing } from "maath";
import { useLayoutEffect, useMemo, useRef } from "react";
import { Vector3 } from "three";
import { Book } from "./Book";
import { introAtom } from "./UI";

/** Match `useFrame` open pose so scale matches 80% fill at that depth (not at origin). */
const OPEN_BOOK_POSITION = new Vector3(0, 0.06, 1.12);
const OPEN_SCREEN_FRACTION = 0.8;

export const Experience = () => {
  const { viewport, camera, size } = useThree();
  const [intro] = useAtom(introAtom);
  const group = useRef();
  const bootstrapped = useRef(false);

  // The book expands sideways when open. The max width is 2 pages.
  const PAGE_WIDTH = 1.28;
  const PAGE_HEIGHT = 1.71;
  const bookWidth = PAGE_WIDTH * 2;
  const bookHeight = PAGE_HEIGHT;

  const introTargetScale = useMemo(() => {
    const sx = (viewport.width * OPEN_SCREEN_FRACTION) / bookWidth;
    const sy = (viewport.height * OPEN_SCREEN_FRACTION) / bookHeight;
    return Math.min(sx, sy);
  }, [viewport.width, viewport.height, bookWidth, bookHeight]);

  const openTargetScale = useMemo(() => {
    const v = viewport.getCurrentViewport(camera, OPEN_BOOK_POSITION, size);
    const sx = (v.width * OPEN_SCREEN_FRACTION) / bookWidth;
    const sy = (v.height * OPEN_SCREEN_FRACTION) / bookHeight;
    return Math.min(sx, sy);
  }, [viewport, camera, size, bookWidth, bookHeight]);

  // HTWKR-style: start low, small, and far back; ease into idle closed pose, then "lift" on open.
  useLayoutEffect(() => {
    const g = group.current;
    if (!g || bootstrapped.current) return;
    bootstrapped.current = true;
    const ts = Math.min(
      (viewport.width * OPEN_SCREEN_FRACTION) / bookWidth,
      (viewport.height * OPEN_SCREEN_FRACTION) / bookHeight
    );
    g.position.set(0, -1.35, -3.25);
    g.scale.setScalar(ts * 0.085);
    g.rotation.set(0, 0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- one-time entrance pose from first viewport
  }, []);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;

    if (intro) {
      easing.damp3(g.position, [0, 0.02, -0.32], 1.2, delta);
      const introScale = introTargetScale * 0.44;
      easing.damp3(g.scale, [introScale, introScale, introScale], 1.08, delta);
    } else {
      easing.damp3(
        g.position,
        [OPEN_BOOK_POSITION.x, OPEN_BOOK_POSITION.y, OPEN_BOOK_POSITION.z],
        1.22,
        delta
      );
      easing.damp3(
        g.scale,
        [openTargetScale, openTargetScale, openTargetScale],
        1.12,
        delta
      );
    }
    easing.damp(g.rotation, "x", 0, 0.75, delta);
    easing.damp(g.rotation, "y", 0, 0.75, delta);
    easing.damp(g.rotation, "z", 0, 0.75, delta);
  });

  return (
    <>
      <group ref={group}>
        <Book />
      </group>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
};
