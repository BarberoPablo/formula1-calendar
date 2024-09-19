"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { races } from "../lib/mockData";
import { Race } from "../lib/types";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleRaceClick = (race: Race) => {
    setSelectedRace(race);
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const race = races.find((r) => new Date(r.date).toDateString() === date.toDateString());

      days.push(
        <div
          key={day}
          className={`h-12 flex items-center justify-center ${race ? "bg-[#e10600] text-white cursor-pointer" : "text-gray-700"}`}
          onClick={() => race && handleRaceClick(race)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#e10600]">2023 F1 Calendar</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="p-2">
            <ChevronLeft className="text-[#e10600]" />
          </button>
          <h3 className="text-xl font-semibold">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button onClick={handleNextMonth} className="p-2">
            <ChevronRight className="text-[#e10600]" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-semibold">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
      </div>
      <AnimatePresence>
        {selectedRace && (
          <motion.div
            key={selectedRace.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="mt-8 bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">{selectedRace.name}</h3>
            <p className="text-gray-600 mb-2">Date: {new Date(selectedRace.date).toLocaleDateString()}</p>
            <p className="text-gray-600">Circuit: {selectedRace.circuit}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
