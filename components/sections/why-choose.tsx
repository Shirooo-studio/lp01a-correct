"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CONSULT_LINK } from "@/lib/constants";

export function WhyChoose() {
  const ctaBgRef = useRef<HTMLImageElement | null>(null);
  const [ctaBgHeight, setCtaBgHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ctaBgRef.current) {
        setCtaBgHeight(ctaBgRef.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const ctaButtonTop = ctaBgHeight * 0.061; // 適宜調整可

  return (
    <section className="bg-green-white">
      <div className="max-w-3xl">
        <div className="text-center mb-12 relative">
          <img
            ref={ctaBgRef}
            src="./images/WhyChoose.png"
            alt="Why Choose"
            className="w-full h-auto object-contain mb-4"
          />

          <motion.div
            className="absolute w-[80%] max-w-[355px] h-auto cursor-pointer drop-shadow-lg -translate-x-1/2"
            style={{
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
              src="./images/button_cta.png"
              alt="CTA Button"
              className="w-full h-auto object-contain absolute -translate-x-1/2"
              style={{
                bottom: `${ctaButtonTop}px`,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
