"use client";

import { motion } from "framer-motion";
import { CONSULT_LINK } from "@/lib/constants";

export function FinalCta() {
  return (
    <section>
      <div className="max-w-2xl mx-auto bg-gradient-to-t from-[#6CC708] to-transparent py-8">
        <div className="px-12 pb-4">
          <img
            src="./images/finalcta.png"
            alt="Final CTA"
            className="w-full h-auto object-contain"
          />
        </div>

        <motion.div
          className="h-auto cursor-pointer drop-shadow-lg mx-4"
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
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
