"use client";

import { motion } from "framer-motion";

export function PostPurchaseRegret() {
  return (
    <section>
      <div className="container mx-auto px-4 -mb-4 pt-8 bg-[#F8F7F1] max-w-3xl text-center">
        <div className="px-4 mb-8">
          <img
            src="./images/post-purchase-regret_regret.png"
            alt="Post Purchase Regret regret"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="px-4 -mx-8">
          <img
            src="./images/post-purchase-regret_percent.png"
            alt="Post Purchase Regret percent"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="px-4 -mt-8 mb-4 -mx-8">
          <img
            src="./images/post-purchase-regret_top3.png"
            alt="Post Purchase Regret top3"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="-mr-12 text-center">
          <img
            src="./images/post-purchase-regret_voices.png"
            alt="Post Purchase Regret voices"
            className="w-full h-auto object-contain mb-2"
          />
        </div>
      </div>
      <div className="-mx-8 bg-white max-w-3xl text-center mb-8">
        <img
          src="./images/post-purchase-regret_bottom.png"
          alt="Post Purchase Regret bottom"
          className="w-full h-auto object-contain"
        />
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
