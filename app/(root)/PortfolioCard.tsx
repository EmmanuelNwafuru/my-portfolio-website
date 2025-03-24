"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PortfolioCard = () => {
  return (
    <div className="relative w-full rounded-2xl border-[20px] border-purple-700/70 pt-[0.8px] px-[0.9px]">
      <div className="absolute -z-10 inset-0 w-full h-[40%] rounded-2xl bg-[#9c40ff]/90 p-4 blur-[200px]"></div>
      <div className="absolute -z-10 inset-0 w-[90%] h-full rounded-2xl bg-[#9c40ff] p-4 blur-3xl"></div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 200, opacity: [1, 0.5, 0.3, 0.5, 1, 0.5] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 2,
          velocity: 1,
        }}
      >
        <Image
          src="/background/circuit.png"
          alt="circuit background"
          width={200}
          height={200}
          className="w-[150%] absolute -top-96 -z-10 mix-blend-exclusion opacity-5"
        />
      </motion.div>

      <div className="relative min-h-[800px] w-full rounded-2xl bg-background/80 backdrop-blur-lg overflow-x-hidden">
        <motion.div
          className="absolute inset-0 h-[2px] w-[50%] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent translate-x-[100px]"
          initial={{ x: -600, opacity: 0 }}
          animate={{
            x: 1300,
            opacity: [1, 0.2, 1],
          }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 2,
            velocity: 1,
          }}
        />
        <Image
          src="/pictures/img.avif"
          alt=""
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default PortfolioCard;
