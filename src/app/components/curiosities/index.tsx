"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Pitstops from "./Pitstops";
import Undercut from "./Undercut";
import DRS from "./Drs";
import LightsReactionTime from "./LightsReactionTime";

export default function Curiosities() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const curiosities = [
    { component: <Pitstops key="pitstops-animation" activeCard={activeCard} curiosityId="pitstops" setActiveCard={setActiveCard} />, id: "pitstops" },
    { component: <Undercut key="undercut-animation" activeCard={activeCard} curiosityId="undercut" setActiveCard={setActiveCard} />, id: "undercut" },
    { component: <DRS key="drs-animation" activeCard={activeCard} setActiveCard={setActiveCard} curiosityId="drs" />, id: "drs" },
    {
      component: <LightsReactionTime key="lights-reaction" activeCard={activeCard} setActiveCard={setActiveCard} curiosityId="lights-game" />,
      id: "lights-game",
    },
  ];

  return (
    <div id="curiosities" className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#e10600]">F1 Curiosities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {curiosities.map((curiosity) => (
          <motion.div
            key={curiosity.id}
            className={`bg-white rounded-lg shadow-md ${activeCard === curiosity.id ? "col-span-full" : ""}`}
            layout
            transition={{ duration: 0.5, type: "spring" }}
          >
            {curiosity.component}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
