"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { CONSULT_LINK } from "@/lib/constants";

export function Plans() {
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

  const ctaButtonTop = ctaBgHeight * 0.19; // CTA画像内でのボタンの位置調整

  return (
    <section className="py-2 bg-[#F8F7F1]">
      <div className="pl-4 max-w-4xl">
        <div className="text-center mb-12">
          <img
            src="./images/Plans_bg.png"
            alt="Plans Background"
            className="w-full h-[320px] object-contain mx-3 -my-6"
          />

          {[ // 各プラン画像スライダーをループで表現（可読性向上のため）
            { src1: "./images/Plans_plancheck.png", src2: "./images/Plans_plancheck_2.png" },
            { src1: "./images/Plans_1on1.png", src2: "./images/Plans_1on1_2.png" },
            { src1: "./images/Plans_onlinemeet.png", src2: "./images/Plans_onlinemeet_2.png" },
            { src1: "./images/Plans_fulldesign.png", src2: "./images/Plans_fulldesign_2.png" }
          ].map((group, index) => (
            <div key={index} className="overflow-x-auto scrollbar-hide h-[390px] my-4">
              <div className="flex gap-4 min-w-max">
                <img
                  src={group.src1}
                  alt={`Plan Image ${index * 2 + 1}`}
                  className="w-full h-[380px] object-contain"
                />
                <img
                  src={group.src2}
                  alt={`Plan Image ${index * 2 + 2}`}
                  className="w-full h-[380px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-4xl mb-4 relative">
        <img
          ref={ctaBgRef}
          src="./images/Plans_cta.png"
          alt="Plans CTA"
          className="w-full h-auto object-contain"
        />

        <motion.div
          className="absolute w-[80%] max-w-[360px] h-auto cursor-pointer drop-shadow-lg -translate-x-1/2"
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
    </section>
  );
}
