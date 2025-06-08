"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Monitor } from "lucide-react";
import { CONSULT_LINK } from "@/lib/constants";

export function FinalCta() {
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

  const ctaButtonTop = ctaBgHeight * 0.09; // お好みに応じて係数調整可能

  return (
    <section className="pt-8">
      <div className="max-w-2xl relative mx-auto">
        <img
          ref={ctaBgRef}
          src="./images/FinalCta.png"
          alt="Final CTA"
          className="w-full h-auto object-contain"
        />

        <motion.div
          className="absolute w-[90%] max-w-[390px] h-auto cursor-pointer drop-shadow-lg"
          style={{
            bottom: `${ctaButtonTop}px`,
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
