"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function OurStory() {
  return (
    <section className="py-0 bg-white">
      <div className="max-w-3xl">
        <img
          src="./images/OurStory.png"
          alt="Our Story"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}