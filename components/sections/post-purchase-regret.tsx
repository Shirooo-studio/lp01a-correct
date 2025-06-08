"use client";

import { motion } from "framer-motion";

export function PostPurchaseRegret() {
  return (
    <section>
      <div className="relative h-[2540px] md:h-[2900px] bg-[#F8F7F1] overflow-hidden z-0">
        <div className="absolute inset-0">
          <img
            src="./images/postpurchaseregret.png"
            alt="Post Purchase Regret"
            className="absolute w-[1000px] h-[2500px] md:h-[2880px] left-1/2 -translate-x-[48.5%] object-cover z-30"
          />
        </div>
        {/* 白い下地エリア */}
        <div className="absolute bottom-0 left-0 w-full h-[144px] bg-white z-0" />      

        {/* ベージュの三角（下に向かって） */}
        <div className="absolute bottom-20 -left-[10px] w-0 h-0 border-l-[225px] border-r-[0px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#F8F7F1] z-20" />
        <div className="absolute bottom-20 -right-[10px] w-0 h-0 border-l-[0px] border-r-[225px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#F8F7F1] z-20" />
      
      </div>

      <div className="pb-2 bg-transparent -mt-[85px] relative z-10">
        <div className="pr-8 max-w-2xl">
          <div className="text-center mb-12">
            <img
              src="./images/solution.png"
              alt="Solution"
              className="w-full h-auto object-contain mb-4 z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
