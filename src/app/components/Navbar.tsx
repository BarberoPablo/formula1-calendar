"use client";

import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
//import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Calendar", href: "/calendar" },
  { name: "Standings", href: "/standings" },
  { name: "Teams", href: "/teams" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#e10600] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              {/* <Image className="h-8 w-auto" src="https://google.png" width={300} height={300} alt="F1 Logo" /> */}
              F1 Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#ff0000] hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#ff0000] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#ff0000] hover:text-white">
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
