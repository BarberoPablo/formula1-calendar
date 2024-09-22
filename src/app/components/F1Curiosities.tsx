"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { curiosities } from "../lib/utils";

export default function F1Curiosities() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div id="curiosities" className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#e10600]">F1 Curiosities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {curiosities.map((curiosity) => (
          <motion.div
            key={curiosity.id}
            className={`bg-white p-4 rounded-lg shadow-md cursor-pointer ${activeCard === curiosity.id ? "col-span-full" : ""}`}
            onClick={() => setActiveCard(activeCard === curiosity.id ? null : curiosity.id)}
            layout
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="flex items-center mb-2">
              {curiosity.icon}
              <h3 className="text-lg font-semibold ml-2">{curiosity.title}</h3>
            </div>
            <AnimatePresence>
              {activeCard === curiosity.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {curiosity.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
