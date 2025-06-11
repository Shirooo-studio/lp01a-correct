"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CONSULT_LINK } from "@/lib/constants";

export function ApplicationFlow() {
  const bgRef = useRef<HTMLDivElement | null>(null);
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

  const ctaButtonTop = bgHeight * 0.25;
  const handPointTop = bgHeight * 0.00;

  return (
    <section className="bg-white py-4 pt-12">
      <div className="container mx-auto px-12 max-w-2xl">
        <h2 className="text-center font-extrabold mb-8">
          <span className="text-lg md:text-3xl block">\ 簡単3ステップ！ /</span>
          <span className="text-2xl md:text-2xl block">無料相談に申し込む</span>
        </h2>

        {/* STEP1 */}
        {/* 画像とCTAボタンを重ねるためのコンテナ */}
        <div className="relative w-full mx-auto my-4" ref={bgRef}>
          {/* 埋め込む画像 */}
          <img
          src="./images/applicationflow_1.png"
            alt="STEP1 Background"
            className="w-full mx-auto h-auto object-contain"
          />
          {/* hero_cta.pngを画像の上に重ねる */}
          <motion.div
            className="absolute w-[90%] max-w-[330px] h-auto cursor-pointer drop-shadow-lg"
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
              src="./images/hero_cta.png"
              alt="CTA Button"
              className="w-full h-auto object-contain -translate-x-1/2"
            />
          </motion.div>

          <div className="absolute w-[80%] max-w-[330px] h-auto cursor-pointer drop-shadow-lg"
            style={{
              bottom: `${handPointTop}px`,
              left: "65%",
            }}
          >
            <img
              src="./images/hand_point.png"
              alt="CTA Button"
              className="w-[55%] h-auto object-contain"
            />
          </div>
        </div>

        {/* STEP2 */}
        <div className="flex justify-center my-4">
          <img
            src="./images/applicationflow_2.png"
            alt="LINE Add Screenshot"
            className="w-full mx-auto h-auto object-contain"
            />
          </div>

        {/* STEP3 */}
        <div className="flex justify-center my-4">
          <img
            src="./images/applicationflow_3.png"
            alt="LINE Chat Screenshot"
            className="w-full mx-auto h-auto object-contain"
            />
        </div>
      </div>
    </section>
  );
}