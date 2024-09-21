"use client";

import { circuitsImages, yearImage } from "@/app/lib/constants";
import { Race } from "@/app/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Banner({ nextRace }: { nextRace: Race }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full h-48 lg:h-96 py-6 lg:shadow-lg bg-cover bg-center"
      style={{
        backgroundImage: `url(${circuitsImages[nextRace.Circuit.circuitId]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hidden lg:block absolute inset-0 bg-black opacity-30 hover:opacity-0 z-0"></div>

      <div className="flex flex-col justify-center items-center w-full h-full z-10">
        <h1 className="text-6xl text-white font-black mb-2">{nextRace.Circuit.Location.country.toUpperCase()}</h1>
        <Image src={yearImage} width={176} height={45} alt="Year" />
      </div>
    </motion.div>
  );
}
