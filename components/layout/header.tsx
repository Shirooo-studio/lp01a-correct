"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CONSULT_LINK } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-x-hidden",
        isScrolled
          ? "py-0"
          : "py-0"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn(
        "max-w-[430px] mx-auto px-1 relative",
        isScrolled
          ? "bg-gradient-to-r from-[#6CC708] to-[#9DFF7F] shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      )}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="./images/header_icon.png"
              alt="赤ペン先生"
              className="w-20 h-10 object-contain drop-shadow-[0_0_20px_white]"
            />
          </Link>

          <div className="flex items-center">
            {isScrolled && (
              <motion.button
                onClick={() => {
                  window.location.href = CONSULT_LINK;
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="./images/header_cta.png"
                  alt="無料相談"
                  className="w-60 h-16 object-contain"
                />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}