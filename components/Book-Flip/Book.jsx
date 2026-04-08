/*
  Book.jsx
  - Implements the 3D book model and per-page mesh logic used by the
    Experience. Exports `Book` which instantiates `Page` instances and
    coordinates cover-opening logic and page stepping.
*/


import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import { introAtom } from "./UI";
import {
  Color,
  MathUtils,
  PlaneGeometry,
  SRGBColorSpace,
} from "three";
import { pageAtom, pages } from "./UI";

const easingFactor = 0.5;

const PAGE_WIDTH = 1.08;
const PAGE_HEIGHT = 1.50;
const PAGE_DEPTH = 0.008;

// 1. & 2. USE FLAT GEOMETRY
// Replace BoxGeometry with PlaneGeometry
const pageGeometry = new PlaneGeometry(PAGE_WIDTH, PAGE_HEIGHT);
// Pivot must be aligned to the inner edge (spine side).
// By default PlaneGeometry is centered. Translate X by half width so left edge is at x=0.
pageGeometry.translate(PAGE_WIDTH / 2, 0, 0);

const whiteColor = new Color("white");

pages.forEach((page) => {
  useTexture.preload(`/textures/${page.front}.png`);
  useTexture.preload(`/textures/${page.back}.png`);
});

/** Ease-out curve similar to HTWKR-style cover swing */
function easeOutCover(t) {
  return 1 - Math.pow(1 - t, 2.65);
}

const Page = ({
  number,
  front,
  back,
  page,
  opened,
  interactionEnabled,
  onActivate,
  bookClosed,
  coverOpenTRef,
  hoverCoverOpenRef,
  intro,
  ...props
}) => {
  const [picture, picture2] = useTexture([
    `/textures/${front}.png`,
    `/textures/${back}.png`,
  ]);

  picture.colorSpace = picture2.colorSpace = SRGBColorSpace;
  const group = useRef();

  const dragState = useRef({
    isDragging: false,
    startX: 0,
    startAngle: 0,
    currentAngle: null,
  });

  useFrame((_, delta) => {
    if (!group.current) return;

    // First-open sequence: swing cover from closed (π/2) to open (-π/2) on the spine — same PAGE1 texture.
    if (
      number === 0 &&
      coverOpenTRef &&
      coverOpenTRef.current > 0 &&
      !opened &&
      !dragState.current.isDragging
    ) {
      const t = Math.min(1, coverOpenTRef.current);
      const e = easeOutCover(t);
      group.current.rotation.y = MathUtils.lerp(Math.PI / 2, -Math.PI / 2, e);
      return;
    }

    // 4. ROTATION MODEL & 5. OPEN STATE
    let targetRotation = opened ? -Math.PI / 2 : Math.PI / 2;

    // Intro hover preview: crack the front cover open slightly.
    if (
      intro &&
      number === 0 &&
      page === 0 &&
      hoverCoverOpenRef?.current &&
      !dragState.current.isDragging
    ) {
      targetRotation = Math.PI / 2 - 0.24;
    }

    if (dragState.current.isDragging && dragState.current.currentAngle !== null) {
      targetRotation = dragState.current.currentAngle;
    }

    easing.damp(group.current.rotation, "y", targetRotation, easingFactor, delta);
  });

  const [_, setPage] = useAtom(pageAtom);

  // 7. STACKING
  // Z-offset for subtly stacking pages without intersecting
  const zOffset = -number * PAGE_DEPTH + page * PAGE_DEPTH;

  return (
    <group
      {...props}
      ref={group}
      onPointerDown={(e) => {
        if (!interactionEnabled) {
          e.stopPropagation();
          return;
        }
        e.stopPropagation();
        e.target.setPointerCapture(e.pointerId);
        dragState.current.isDragging = true;
        dragState.current.startX = e.clientX;
        dragState.current.startAngle = group.current.rotation.y;
      }}
      onPointerMove={(e) => {
        if (!interactionEnabled) return;
        if (!dragState.current.isDragging) return;
        e.stopPropagation();
        
        const deltaX = e.clientX - dragState.current.startX;
        const widthScreen = window.innerWidth;
        // Map 40% of screen width to a full 180deg (Math.PI) turn
        const angleChange = (deltaX / (widthScreen * 0.4)) * Math.PI;
        
        let newAngle = dragState.current.startAngle + angleChange;
        newAngle = MathUtils.clamp(newAngle, -Math.PI / 2, Math.PI / 2);
        
        dragState.current.currentAngle = newAngle;
      }}
      onPointerUp={(e) => {
        if (!interactionEnabled) {
          e.stopPropagation();
          onActivate?.();
          return;
        }
        if (!dragState.current.isDragging) return;
        e.stopPropagation();
        e.target.releasePointerCapture(e.pointerId);
        dragState.current.isDragging = false;
        
        const finalAngle = dragState.current.currentAngle;
        dragState.current.currentAngle = null;
        
        const deltaX = e.clientX - dragState.current.startX;
        
        // If dragged very slightly, treat it as a click
        if (Math.abs(deltaX) < 10) {
          setPage(opened ? number : number + 1);
          return;
        }

        // If dragged past the center point (0 degrees), commit to the page turn
        if (finalAngle < 0) {
          setPage(number + 1);
        } else {
          setPage(number);
        }
      }}
    >
      <group position-z={zOffset}>
        {/* Subtle page core adds visible edge thickness while keeping textured faces crisp. */}
        <mesh position-x={PAGE_WIDTH / 2}>
          <boxGeometry args={[PAGE_WIDTH, PAGE_HEIGHT, PAGE_DEPTH * 0.92]} />
          <meshStandardMaterial
            color="#f4ede2"
            roughness={0.14}
            metalness={0.04}
          />
        </mesh>
        {/* 6. TEXTURES HANDLING - Front Face */}
        <mesh geometry={pageGeometry} position-z={PAGE_DEPTH / 2 + 0.00025}>
          <meshStandardMaterial
            color={whiteColor}
            map={picture}
            emissive="#1a1712"
            emissiveIntensity={0.035}
            roughness={0.62}
            metalness={0.03}
          />
        </mesh>
        {/* 6. TEXTURES HANDLING - Back Face */}
        {/* Translate by X exactly PAGE_WIDTH then rotate Y around 180deg so 
            texture faces outward from the spine without bounds-flipping issues */}
        <mesh
          geometry={pageGeometry}
          position-x={PAGE_WIDTH}
          position-z={-PAGE_DEPTH / 2 - 0.00025}
          rotation-y={Math.PI}
        >
          <meshStandardMaterial
            color={whiteColor}
            map={picture2}
            emissive="#1a1712"
            emissiveIntensity={0.035}
            roughness={0.62}
            metalness={0.03}
          />
        </mesh>
      </group>
    </group>
  );
};

/** Cover swing duration (seconds); keep in sync with Experience “lift” (~1.1–1.2s). */
const COVER_OPEN_DURATION = 1.28;

export const Book = ({ hoverCoverOpen, ...props }) => {
  const [page, setPage] = useAtom(pageAtom);
  const [intro, setIntro] = useAtom(introAtom);
  const [delayedPage, setDelayedPage] = useState(page);
  const coverOpenT = useRef(0);
  const coverOpenedCommitted = useRef(false);
  const interactionEnabled = !intro;

  useFrame((_, delta) => {
    if (intro) {
      coverOpenT.current = 0;
      coverOpenedCommitted.current = false;
      return;
    }
    if (page >= 1) {
      coverOpenT.current = 1;
      return;
    }
    // page === 0 after intro
    if (!coverOpenedCommitted.current) {
      coverOpenT.current = Math.min(1, coverOpenT.current + delta / COVER_OPEN_DURATION);
      if (coverOpenT.current >= 1) {
        coverOpenedCommitted.current = true;
        setPage(1);
      }
    } else {
      // User chose “Cover” again — no scripted swing; damp handles closing the cover.
      coverOpenT.current = 0;
    }
  });

  useEffect(() => {
    let timeout;
    const goToPage = () => {
      setDelayedPage((delayedPage) => {
        if (page === delayedPage) {
          return delayedPage;
        }
        const stepDelay =
          Math.abs(page - delayedPage) > 2
            ? 50
            : page === 1 && delayedPage === 0
              ? 0
              : 150;
        timeout = setTimeout(goToPage, stepDelay);
        if (page > delayedPage) return delayedPage + 1;
        if (page < delayedPage) return delayedPage - 1;
      });
    };
    goToPage();
    return () => {
      clearTimeout(timeout);
    };
  }, [page]);

  return (
    <group {...props} rotation-y={-Math.PI / 2}>
      {[...pages].map((pageData, index) => (
        <Page
          key={index}
          page={delayedPage}
          number={index}
          opened={delayedPage > index}
          interactionEnabled={interactionEnabled}
          onActivate={() => {
            if (!intro) return;
            setIntro(false);
            setPage(1);
          }}
          bookClosed={delayedPage === 0 || delayedPage === pages.length}
          coverOpenTRef={index === 0 ? coverOpenT : undefined}
          hoverCoverOpenRef={index === 0 ? hoverCoverOpen : undefined}
          intro={intro}
          {...pageData}
        />
      ))}
    </group>
  );
};