"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CONSULT_LINK } from "@/lib/constants";

export function ApplicationFlow() {
  const bgRef = useRef<HTMLImageElement | null>(null);
  const [bgHeight, setBgHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (bgRef.current) {
        setBgHeight(bgRef.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const ctaButtonTop = bgHeight * 0.25; // ボタンの位置調整（調整可能）

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 max-w-2xl relative">
        <img
          ref={bgRef}
          src="./images/ApplicationFlow_bg.png"
          alt="Application Flow Background"
          className="w-full h-auto object-contain mb-4"
        />

        <motion.div
          className="absolute w-[80%] max-w-[330px] h-auto cursor-pointer drop-shadow-lg"
          style={{
            top: `${ctaButtonTop}px`,
            left: "50%",
          }}
          onClick={() => {
            window.location.href = CONSULT_LINK;
          }}
          animate={{
            y: [0, -2, 2, -2, 2, -2, 2, -1, 1, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeInOut",
          }}
        >
          <img
            src="./images/Hero_cta.png"
            alt="CTA Button"
            className="w-full h-auto object-contain -translate-x-1/2"
          />
        </motion.div>
      </div>
    </section>
  );
}
