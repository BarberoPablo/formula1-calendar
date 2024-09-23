"use client";

import { motion } from "framer-motion";
import { AlignJustify, BriefcaseBusiness, Github, Linkedin, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { name: "Schedule", href: "#schedule" },
  { name: "Standings", href: "#standings" },
  { name: "Curiosities", href: "#curiosities" },
];

const contact = [
  { href: "https://github.com/BarberoPablo/formula1-calendar", icon: <Github />, name: "github" },
  { href: "https://www.linkedin.com/in/barberopablo/", icon: <Linkedin />, name: "linkedin" },
  { href: "https://barberopablo.github.io/portfolio/", icon: <BriefcaseBusiness />, name: "portfolio" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-[#e10600] text-white">
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#ff0000] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
            </button>
          </div>
          <div className="items-center hidden md:flex">
            <Image
              className="md:block h-8 w-auto hidden"
              src="https://media.formula1.com/image/upload/f_auto,c_limit,w_195,q_auto/etc/designs/fom-website/images/f1_logo"
              width={128}
              height={32}
              alt="Formula1 Logo"
            />
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#ff0000] hover:text-white">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex space-x-4"></div>

        <div className="flex space-x-4">
          {contact.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#ff0000] hover:text-white">
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
