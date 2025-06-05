"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CONSULT_LINK } from "@/lib/constants";

export function BeforeAfter() {
  const bgRef = useRef<HTMLImageElement | null>(null);
  const ctaBgRef = useRef<HTMLImageElement | null>(null);
  const [bgHeight, setBgHeight] = useState<number>(0);
  const [ctaBgHeight, setCtaBgHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeights = () => {
      if (bgRef.current) {
        setBgHeight(bgRef.current.clientHeight);
      }
      if (ctaBgRef.current) {
        setCtaBgHeight(ctaBgRef.current.clientHeight);
      }
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  const afterPlanTop = bgHeight * 0.383;
  const afterParseTop = bgHeight * 0.583;
  const ctaButtonTop = ctaBgHeight * 0.19; // CTA画像に対するボタンの位置（調整可）

  return (
    <section className="py-4 bg-transparent">
      <div className="relative w-full max-w-[500px] mx-auto">
        <img
          ref={bgRef}
          src="/images/BeforeAfter_bg.png"
          alt="Before After"
          className="w-full h-auto object-contain"
        />

        <motion.div
          className="absolute w-[95%] max-w-[410px] object-contain"
          style={{
            left: "50%",
            top: `${afterPlanTop}px`,
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/images/BeforeAfter_afterplan.png"
            alt="After Plan"
            className="w-full h-auto absolute -translate-x-1/2"
          />
        </motion.div>

        <motion.div
          className="absolute w-[95%] max-w-[410px] object-contain"
          style={{
            left: "50%",
            top: `${afterParseTop}px`,
          }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/images/BeforeAfter_afterparse.png"
            alt="After Parse"
            className="w-full h-auto absolute -translate-x-1/2"
          />
        </motion.div>
      </div>

      <div className="container relative w-full max-w-[500px] mx-auto -mt-24">
        <img
          ref={ctaBgRef}
          src="/images/BeforeAfter_cta.png"
          alt="Before After CTA"
          className="w-full h-auto object-contain"
        />
        <motion.div
          className="absolute w-[80%] max-w-[360px] h-auto cursor-pointer drop-shadow-lg"
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
            src="/images/button_cta.png"
            alt="CTA Button"
            className="w-full h-auto object-contain absolute -translate-x-1/2"
            style={{
              bottom: `${ctaButtonTop}px`,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
