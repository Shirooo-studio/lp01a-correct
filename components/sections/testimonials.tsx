"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {

  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl">
        <div className="mx-4 pb-2">
          <img
            src="./images/testimonials_top.png"
            alt="Testimonials top"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="mx-0 text-center">
          <img
            src="./images/testimonials_body.png"
            alt="Testimonials body"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}