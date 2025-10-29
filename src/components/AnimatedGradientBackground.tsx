import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedGradientBackgroundProps {
  colors: string[];
  children: React.ReactNode;
}

export function AnimatedGradientBackground({ colors, children }: AnimatedGradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden group"
    >
      {/* Base cream background */}
      <div className="absolute inset-0 bg-[#f5f1e8]" />

      {/* Animated gradient that follows mouse */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: 0.55,
          background: `radial-gradient(circle 700px at ${mousePosition.x}% ${mousePosition.y}%, ${colors[0]}70, ${colors[1]}50, ${colors[2]}30, transparent 70%)`,
        }}
        animate={{
          background: [
            `radial-gradient(circle 700px at ${mousePosition.x}% ${mousePosition.y}%, ${colors[0]}70, ${colors[1]}50, ${colors[2]}30, transparent 70%)`,
            `radial-gradient(circle 700px at ${mousePosition.x}% ${mousePosition.y}%, ${colors[1]}70, ${colors[2]}50, ${colors[0]}30, transparent 70%)`,
            `radial-gradient(circle 700px at ${mousePosition.x}% ${mousePosition.y}%, ${colors[2]}70, ${colors[0]}50, ${colors[1]}30, transparent 70%)`,
            `radial-gradient(circle 700px at ${mousePosition.x}% ${mousePosition.y}%, ${colors[0]}70, ${colors[1]}50, ${colors[2]}30, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
