import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const checkWebGL = () => {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

const HeroCanvas = () => {
  const mountRef = useRef(null);
  const [webGLSupported, setWebGLSupported] = useState(() => checkWebGL());

  useEffect(() => {
    if (!webGLSupported) return;

    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Subtle, restrained supporting Three.js scene
    const scene = new THREE.Scene();
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0, 5.5);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(renderer.domElement);
    } catch {
      queueMicrotask(() => {
        setWebGLSupported(false);
      });
      return;
    }

    // Atmospheric subtle purple lighting
    const ambientLight = new THREE.AmbientLight(0x2d124d, 2.5);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3.5, 15);
    purpleLight.position.set(2, 3, 2);
    scene.add(purpleLight);

    const violetRim = new THREE.PointLight(0x8b5cf6, 2.0, 12);
    violetRim.position.set(-2, -2, -1);
    scene.add(violetRim);

    // Minimal restrained geometric artifact: delicate wireframe cage + subtle core
    const group = new THREE.Group();
    scene.add(group);

    const coreGeo = new THREE.IcosahedronGeometry(1.1, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x130924,
      metalness: 0.9,
      roughness: 0.3,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    const wireGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    group.add(wireMesh);

    const ringGeo = new THREE.TorusGeometry(1.7, 0.012, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.45,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3.2;
    group.add(ring);

    // Mouse tilt damping
    const targetRot = { x: 0, y: 0 };
    const currentRot = { x: 0, y: 0 };

    const onPointerMove = (e) => {
      if (prefersReducedMotion) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRot.y = x * 0.25;
      targetRot.x = -y * 0.2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const onResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let isVisible = true;
    let animId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      currentRot.x += (targetRot.x - currentRot.x) * 0.05;
      currentRot.y += (targetRot.y - currentRot.y) * 0.05;

      const speed = prefersReducedMotion ? 0.05 : 0.18;
      coreMesh.rotation.y += delta * speed;
      wireMesh.rotation.y -= delta * (speed * 0.8);
      ring.rotation.z += delta * 0.25;

      group.rotation.x = currentRot.x;
      group.rotation.y = currentRot.y;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      observer.disconnect();

      [coreGeo, wireGeo, ringGeo].forEach((g) => g?.dispose());
      [coreMat, wireMat, ringMat].forEach((m) => m?.dispose());

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement?.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, [webGLSupported]);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-65"
      aria-hidden="true"
    />
  );
};

export default HeroCanvas;
