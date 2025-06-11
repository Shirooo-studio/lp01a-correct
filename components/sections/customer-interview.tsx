"use client";

import { motion } from "framer-motion";

export function CustomerInterview() {

  return (
    <section className="container mx-auto px-4 py-8 bg-gradient-to-t from-[#6CC708] to-white">
      <div className="max-w-3xl text-center">
        <img
          src="./images/customerinterview_top.png"
          alt="Customer Interview_top"
          className="w-full h-auto object-contain"
        />
        <img
          src="./images/customerinterview_1.png"
          alt="Customer Interview_1"
          className="w-full h-auto object-contain"
        />
        <img
          src="./images/customerinterview_2.png"
          alt="Customer Interview_2"
          className="w-full h-auto object-contain"
        />
        <img
          src="./images/customerinterview_3.png"
          alt="Customer Interview_3"
          className="w-full h-auto object-contain"
        />
        <img
          src="./images/customerinterview_4.png"
          alt="Customer Interview_4"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}