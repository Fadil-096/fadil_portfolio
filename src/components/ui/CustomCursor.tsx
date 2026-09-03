"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!hasMoved) setHasMoved(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor]")) {
        setIsHovered(true);
        const text = target.closest("[data-cursor]")?.getAttribute("data-cursor");
        setCursorText(text || "View");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [hasMoved]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center rounded-full bg-[var(--accent)] text-[var(--background)] font-mono text-[10px] uppercase font-bold"
      animate={{
        x: mousePosition.x - (isHovered ? 32 : 8),
        y: mousePosition.y - (isHovered ? 32 : 8),
        width: isHovered ? 64 : 16,
        height: isHovered ? 64 : 16,
        opacity: hasMoved ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      {isHovered && <span className="absolute text-center">{cursorText}</span>}
    </motion.div>
  );
}
