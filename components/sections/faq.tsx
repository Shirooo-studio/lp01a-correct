"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef, useEffect, useState } from "react";
import { CONSULT_LINK } from "@/lib/constants";

export function Faq() {
  const ctaBgRef = useRef<HTMLImageElement | null>(null);
  const [ctaBgHeight, setCtaBgHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ctaBgRef.current) {
        setCtaBgHeight(ctaBgRef.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const ctaButtonTop = ctaBgHeight * 0.22; // 調整が必要なら変更可

  const faqCategories = [
    {
      title: "サービス内容の詳細",
      items: [
        {
          question: ["図面チェックプラン（設計士語らわせ無）は", "どのような流れで図面修正がされますか？"],
          answer: ["図面をアップロードいただいた後、専門の設計士が詳細にチェックを行います。", "問題点や改善点を赤ペンで明確に指摘し、具体的な修正案を提案させていただきます。"]
        },
        {
          question: ["その他プラン（設計士語らわせ有）は", "どのような内容の相談ができますか？"],
          answer: ["間取りの相談はもちろん、デザイン、収納計画、動線計画など、住まいに関するあらゆる相談が可能です。", "経験豊富な設計士が丁寧にアドバイスいたします。"]
        },
        {
          question: ["「図面修正」では、","どの程度まで修正を依頼できますか？"],
          answer: ["基本的な間取りの変更から、細かいディテールの調整まで、幅広い修正に対応可能です。", "具体的な修正内容は、ご要望をお伺いした上で提案させていただきます。"]
        },
        {
          question: ["オンライン同席プランの「オンライン同席」は", "どのような場面で利用するのが効果的ですか？"],
          answer: ["工務店との打ち合わせや、展示場見学時など、重要な決定を行う場面での同席が効果的です。", "プロの視点からその場でアドバイスを受けられます。"]
        },
        {
          question: ["フル設計プランの「プラン提案」では", "どのような提案を受けることができますか？"],
          answer: ["お客様のライフスタイルや要望を詳しくヒアリングした上で、完全オリジナルの間取り提案を行います。", "デザイン性と機能性を両立した、理想の住まいをご提案します。"]
        },
        {
          question: ["追加の修正を依頼する場合", "どのような情報が必要ですか？"],
          answer: ["追加修正の内容や範囲によって費用は異なります。", "まずはご相談いただき、必要な修正内容を確認した上で、適切な費用をご案内させていただきます。"]
        }
      ]
    },
    {
      title: "利用対象者について",
      items: [
        {
          question: ["現在、工務店と間取りの打ち合わせ中ですが、","セカンドオピニオンを受けることはできますか？"],
          answer: ["はい、可能です。", "むしろ契約前の段階でのセカンドオピニオンをお勧めしています。", "後からの大きな変更は難しくなる場合が多いためです。"]
        },
        {
          question: ["まだハウスメーカーや工務店と契約していない", "ですが、間取りの相談をしても良いですか？"],
          answer: ["もちろん大歓迎です。", "むしろ、ハウスメーカー選びの前に相談いただくことで、より良い選択につながる可能性が高くなります。"]
        }
      ]
    },
    {
      title: "サービスの流れと期間について",
      items: [
        {
          question: ["サービスの申し込みから最初の提案まで", "どのくらいの期間がかかりますか？"],
          answer: ["通常、図面チェックプランの場合、お申し込みから3営業日程度でご提案させていただきます。", "他のプランについては、サービス内容によって期間が異なります。"]
        },
        {
          question: ["顔合わせありのプランの場合は", "打ち合わせはどのように行われますか？"],
          answer: ["オンラインビデオ通話を使用して、ご都合の良い時間に打ち合わせを行います。", "画面共有機能を使って図面を確認しながら、具体的なアドバイスを提供します。"]
        }
      ]
    },
    {
      title: "その他",
      items: [
        {
          question: ["現在の設計担当者にセカンドオピニオンを", "受けたことを伝える必要はありますか？"],
          answer: ["必ずしも伝える必要はありませんが、より良い家づくりのために、オープンなコミュニケーションをお勧めしています。"]
        },
        {
          question: ["契約についてはどのように進めますか？"],
          answer: ["オンラインでの契約となり、クレジットカードまたは銀行振込でのお支払いが可能です。", "詳細な契約内容は、サービス選択後にご案内させていただきます。"]
        },
        {
          question: ["セカンドオピニオンを受けた後、どのように", "家づくりを進めていくのが一般的ですか？"],
          answer: ["セカンドオピニオンで得られたアドバイスを基に、現在の設計担当者と相談しながら進めていくのが一般的です。", "必要に応じて、継続的なサポートも可能です。"]
        }
      ]
    }
  ];

  function renderLines(text: string | string[], className = "") {
    if (Array.isArray(text)) {
      return text.map((line, idx) => <p key={line + idx} className={className}>{line}</p>);
    }
    return <p className={className}>{text}</p>;
  }

  return (
    <section id="faq" className="py-12 bg-[#FFFDF7]">
      <div className="container mx-auto px-8 max-w-3xl">
        <div className="text-center mb-12 mt-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            よくある質問
          </h2>
          <div className="mx-auto w-28 h-0.5 bg-gray-400 mb-8" />
        </div>

        <div className="space-y-8 mb-16">
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.title || categoryIndex}>
              <div className="flex justify-center mb-4">
                <h3 className="text-lg font-bold text-gray-800 border-2 border-gray-800 px-6 py-2 mt-4">
                  {category.title}
                </h3>
              </div>
              <Accordion type="multiple" className="w-full">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`item-${categoryIndex}-${itemIndex}`}
                    className="border-b border-black"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 group">
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 bg-[#6CC708] rounded-full flex items-center justify-center text-white text-lg font-bold">
                          ？
                        </div>
                        <span className="text-black">
                          {renderLines(item.question, "text-xs font-bold")}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="py-4 px-9 text-black bg-white">
                      {renderLines(item.answer, "text-xs")}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-3xl relative">
        <img
          ref={ctaBgRef}
          src="./images/Faq_cta.png"
          alt="FAQ CTA"
          className="w-full h-auto object-contain mt-8"
        />

        <motion.div
          className="absolute w-[80%] max-w-[360px] h-auto cursor-pointer drop-shadow-lg"
          style={{
            bottom: `${ctaButtonTop}px`,
            left: "50%",
          }}
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
            src="./images/button_cta.png"
            alt="CTA Button"
            className="w-full h-auto object-contain -translate-x-1/2"
          />
        </motion.div>
      </div>
    </section>
  );
}
