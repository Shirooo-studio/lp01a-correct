"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CONSULT_LINK } from "@/lib/constants";

export function BeforeAfter() {
  const ctaBgRef = useRef<HTMLImageElement | null>(null);
  const [ctaBgHeight, setCtaBgHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeights = () => {
      if (ctaBgRef.current) {
        setCtaBgHeight(ctaBgRef.current.clientHeight);
      }
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  const ctaButtonTop = ctaBgHeight * 0.26;

  return (
    <>
      <section className="bg-gradient-to-t from-[#D9F0FD] to-transparent pb-12 -mt-8 relative">
        {/* Before 図面 */}
        <div className="w-[98%] mx-auto">
          <img
            src="./images/before.png"
            alt="Before Plan"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* ▼ 三角アイコン */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] w-0 h-0 border-l-[28px] border-r-[28px] border-t-[32px] border-l-transparent border-r-transparent border-t-orange-600 opacity-1" />
      </section>

      <section className="bg-gradient-to-b from-[rgba(255,139,38,0.3)] to-transparent h-auto py-4 relative">
        {/* コメント吹き出し */}
        <div className="w-full max-w-[400px] mx-auto">
          <img
            src="./images/after_top.png"
            alt="After星"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* After プラン */}
        <div className="w-full max-w-[500px] mx-auto -mt-4">
          <motion.div
            className="w-[95%] mx-auto"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
          >
            <img
              src="./images/beforeafter_afterplan.png"
              alt="After Plan"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div
            className="w-[95%] mx-auto -mt-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 3.0 }}
          >
            <img
              src="./images/beforeafter_afterparse.png"
              alt="After Parse"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* コメント吹き出し */}
        <div className="w-full mx-auto my-4">
          <img
            src="./images/after_bottom.png"
            alt="感想エリア"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      <section className="bg-white py-6 relative mx-4">
        {/* コメント吹き出し */}
        <img
          ref={ctaBgRef}
          src="./images/beforeafter_cta.png"
          alt="beforeafter_cta"
          className="w-full max-w-[500px] mx-auto object-contain"
        />

        {/* CTAボタン */}
        <motion.div
          className="absolute w-[80%] max-w-[360px] h-auto cursor-pointer drop-shadow-lg"
          style={{ 
            left: "50%",
            bottom: `${ctaButtonTop}px`
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
            className="w-full h-auto object-contain -translate-x-1/2"
          />
        </motion.div>
      </section>
    </>
  );
}
