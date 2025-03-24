"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function SparkleButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sparkles, setSparkles] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => [
        ...prev.filter((_, i) => i < 200), // Keep a max of 15 sparkles
        {
          id: Math.random(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.5, 1, 0.5, 0],
            y: -400,
            x: 20,
          }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
          className="absolute bg-purple-300 rounded-full shadow-lg"
          style={{
            width: "4px",
            height: "4px",
            top: `${sparkle.y}%`,
            left: `${sparkle.x}%`,
            filter: "blur(4px)",
          }}
        />
      ))}

      {/* Button */}
      {children}
    </div>
  );
}
