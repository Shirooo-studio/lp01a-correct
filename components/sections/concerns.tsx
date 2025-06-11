"use client";

import { motion } from "framer-motion";

export function Concerns() {
  return (
    <section
      className="flex py-0 px-0 bg-transparent"
      style={{
        backgroundImage: 'url("./images/concerns_bg.png")',
        backgroundSize: 'cover', // または '100% 100%' でもOK
        backgroundRepeat: 'no-repeat', // 画像が繰り返さないようにする
        backgroundPosition: 'center', // 画像を中央に配置
      }}
    >
      <div className="max-w-3xl mx-auto py-8"> {/* コンテンツを中央寄せにするためmx-autoを追加 */}
        <div className="text-center">
          <img
            src="./images/concerns_1.png"
            alt="お悩み1"
            className="w-[420px] -my-12 z-10" // 背景画像の上に表示するためz-indexを設定
          />
          <img
            src="./images/concerns_2.png"
            alt="お悩み2"
            className="w-[420px] my-12 z-10" 
          />
        </div>
      </div>
    </section>
  );
}