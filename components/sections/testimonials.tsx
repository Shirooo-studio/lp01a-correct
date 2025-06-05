"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {

  return (
    <section className="pt-8 bg-white">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <img
            src="/images/Testimonials.png"
            alt="Testimonials"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}