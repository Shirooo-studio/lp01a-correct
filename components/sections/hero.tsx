"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CONSULT_LINK } from "@/lib/constants";

export function Hero() {
  const [mainImage, setMainImage] = useState("./images/hero_main.png");
  const [textBubbleImage, setTextBubbleImage] = useState("./images/hero_textbubble.png");
  const [ctaImage, setCtaImage] = useState("./images/hero_cta.png");
  const [aboutRedpenImage, setAboutRedpenImage] = useState("./images/hero_aboutredpen.png");
  const [onlineImage, setOnlineImage] = useState("./images/hero_online.png");

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: (url: string) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <>
      <section className="pt-20 pb-8 bg-gradient-to-b from-[#6CC708] to-[#9DFF7F]">
        <div className="container mx-auto px-4">
          <div className="max-w-[375px] mx-auto text-center space-y-4">
            {/* テキストバブル画像 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              className="w-full flex -mb-20 overflow-hidden"
            >
              <img
                src={textBubbleImage}
                alt="テキストバブル"
                className="w-[310px] h-[80px] object-contain"
              />
            </motion.div>

            {/* メイン画像 & CTA画像 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex justify-center ml-1 -mr-4 mb-20"
            >
              <img
                src={mainImage}
                alt="メイン画像"
                className="w-full h-full object-contain"
              />
              <motion.button
                onClick={() => {
                  window.location.href = CONSULT_LINK;
                }}
                className="absolute bottom-[-80px] w-[370px]"
                style={{ left: "50%" }}
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
                  src={ctaImage}
                  alt="無料相談ボタン"
                  className="w-full h-[110px] object-contain drop-shadow-lg -translate-x-[57%]"
                />
              </motion.button>
            </motion.div>

            <div className="h-[70px]" />

            {/* 赤ペン先生について */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-[400px]"
            >
              <img
                src={aboutRedpenImage}
                alt="赤ペン先生について"
                className="w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* オンライン相談セクション */}
      <section className="bg-white overflow-x-hidden">
        <div className="mx-auto max-w-[680px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={onlineImage}
              alt="オンライン相談"
              className="w-[1000px] h-[160px] object-contain mt-4"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
