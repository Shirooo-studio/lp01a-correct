"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CONSULT_LINK } from "@/lib/constants";

export function Hero() {
  const [mainImage, setMainImage] = useState<string>("/images/Hero_main.png");
  const [textBubbleImage, setTextBubbleImage] = useState<string>("/images/Hero_textbubble.png");
  const [ctaImage, setCtaImage] = useState<string>("/images/Hero_cta.png");
  const [aboutRedpenImage, setAboutRedpenImage] = useState<string>("/images/Hero_aboutredpen.png");
  const [onlineImage, setOnlineImage] = useState<string>("/images/Hero_online.png");

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
      {/* Heroセクション - グラデーション背景 */}
      <section className="pt-20 pb-8 bg-gradient-to-b from-[#6CC708] to-[#9DFF7F]">
        <div className="container mx-auto px-4">
          <div className="max-w-[375px] mx-auto text-center space-y-4">
            {/* テキストバブル画像 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              className="w-full flex -mb-20"
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex justify-center ml-1 -mr-4 mb-20"
            >
              <img
                src={mainImage}
                alt="メイン画像"
                className="w-full h-full object-contain"
              />
              {/* CTA画像（重ねる） */}
              <motion.button
                onClick={() => {
                  window.location.href = CONSULT_LINK;
                }}
                className="absolute bottom-[-80px] w-[370px]"
                style={{
                  left: "50%",
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
                  src={ctaImage}
                  alt="無料相談ボタン"
                  className="w-full h-[110px] object-contain drop-shadow-lg -translate-x-[57%]"
                />
              </motion.button>
            </motion.div>

            {/* スペーサー（CTAの重なり分） */}
            <div className="h-[70px]" />

            {/* 赤ペン先生について */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

      {/* オンライン相談セクション - 白背景 */}
      <section className="bg-white overflow-x-hidden">
        <div className="mx-auto max-w-[680px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
