"use client";

import Image from "next/image";
import HeroSection from "./HeroSection";
import PortfolioCard from "./PortfolioCard";
import BriefAbout from "./BriefAbout";
import SparkleButton from "./Sparkles";
import { easeInOut, motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className="relative w-full">
        <div className="flex h-full">
          <motion.div
            className="h-full overflow-hidden flex justify-start"
            initial={{ width: "50%" }}
            whileHover={{ width: "200%", fillOpacity: [1, 0] }}
            transition={{ ease: easeInOut, duration: 2, velocity: 10 }}
          >
            <HeroSection />
          </motion.div>
          <motion.div
            className="relative h-full overflow-hidden flex justify-end"
            initial={{ width: "50%" }}
            whileHover={{ width: "200%" }}
            transition={{ ease: easeInOut, duration: 2, velocity: 10 }}
          >
            <HeroSection />
          </motion.div>
        </div>
      </section>

      {/* About section */}
      <section>
        <BriefAbout />
      </section>
      {/* Portfolio Section */}
      <section className="relative px-8">
        <SparkleButton>
          <PortfolioCard />
        </SparkleButton>
        <div className="absolute bottom-0 left-0 bg-gradient-to-t h-full w-full from-background to-transparent"></div>
      </section>
    </>
  );
}
