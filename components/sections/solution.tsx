"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Solution() {

  return (
    <section className="pb-16 bg-red-100 -mt-20">
      <div className="pr-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <img
            src="./images/Solution.png"
            alt="Solution"
            className="w-full h-auto object-contain mb-4 z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}