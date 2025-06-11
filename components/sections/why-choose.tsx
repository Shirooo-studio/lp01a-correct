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

  const ctaButtonTop = ctaBgHeight * 0.25; // 適宜調整可

  return (
    <section className="bg-[#F8F7F1]">
      <div className="max-w-3xl">
        <div className="text-center mb-12 relative">
          <img
            src="./images/whychoose_top.png"
            alt="Why Choose top"
            className="w-full h-auto object-contain mb-4"
          />
          <div className="flex py-0 px-0 bg-transparent"
            style={{
              backgroundImage: 'url("./images/whychoose_bg.png")',
              backgroundSize: 'cover', // または '100% 100%' でもOK
              backgroundRepeat: 'no-repeat', // 画像が繰り返さないようにする
              backgroundPosition: 'center', // 画像を中央に配置
            }}
          >
            <img
              src="./images/whychoose_body.png"
              alt="Why Choose body"
              className="w-full h-auto object-contain mb-4"
            />
          </div>
          <div className="px-4">
            <img
              ref={ctaBgRef}
              src="./images/whychoose_cta.png"
              alt="Why Choose cta"
              className="w-full h-auto object-contain mb-4"
            />
          </div>

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
