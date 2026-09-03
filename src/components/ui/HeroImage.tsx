"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the parallax movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply parallax on devices with hover capability
    if (window.matchMedia("(hover: none)").matches) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Move opposite to cursor direction for parallax depth
    mouseX.set((e.clientX - centerX) * -0.05);
    mouseY.set((e.clientY - centerY) * -0.05);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div 
      className="w-full md:w-[400px] lg:w-[500px] shrink-0 z-0"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
        <motion.div 
        className="relative aspect-[4/5] w-full overflow-hidden"
        style={{ 
          x, 
          y,
          // Fade edges: dissolve into background at bottom only so the face at the top isn't masked
          maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)"
        }}
      >
        {/* Base Image with Grayscale and Contrast */}
        <Image 
          src="/images/Fadil_Ahmed.png" 
          alt="Fadil Ahmed" 
          fill 
          className="object-cover object-top grayscale contrast-125 brightness-110"
          priority
        />
        
        {/* Spotlight on face/eyes to bring out light and detail */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-70"
          style={{
            background: "radial-gradient(circle at 50% 35%, rgba(255,255,255,1) 0%, transparent 40%)"
          }}
        ></div>

        {/* Background Blend Vignette: Merges the photo's backdrop into the site's true background color */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, transparent 35%, var(--background) 80%)"
          }}
        ></div>

        {/* Duotone Multiply Overlay (Red highlights) */}
        <div className="absolute inset-0 bg-[var(--accent)] mix-blend-multiply opacity-40 pointer-events-none"></div>

        {/* Noise Texture Overlay to integrate with the site material */}
        <div className="noise-overlay absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"></div>
      </motion.div>
    </motion.div>
  );
}
