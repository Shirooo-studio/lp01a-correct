"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[#50AD00] py-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-0.5"
        >
          <nav className="flex flex-col items-center text-xs text-white my-0">
            <a
              href="https://your-company-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-gray-100 transition-all min-h-0 py-1"
            >
              ＞ 運営会社
            </a>
            <a
              href="https://your-legal-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-gray-100 transition-all min-h-0 py-1"
            >
              ＞ 特定商取引法に基づく表示
            </a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
