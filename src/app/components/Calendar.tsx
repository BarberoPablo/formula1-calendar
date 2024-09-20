"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { Race } from "../lib/types";
import { createDate, getDaysInMonth, getFirstDayOfMonth } from "../lib/utils";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Calendar({ races }: { races: Race[] }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleRaceClick = (race: Race, day: number) => {
    /* If day is different from race.day => its a qualy || practice || sprint 
      show all data from that day, all that matches, if 2 practices matches, array and set a state with array of things to show
    */
    setSelectedRace(race);
    console.log({ race });
    console.log({ day });
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const race = races.find(
        (race) =>
          createDate(race.date, race.time).toDateString() === date.toDateString() ||
          createDate(race.FirstPractice.date, race.FirstPractice.time).toDateString() === date.toDateString() ||
          createDate(race.SecondPractice.date, race.SecondPractice.time).toDateString() === date.toDateString() ||
          (race.ThirdPractice && createDate(race.ThirdPractice.date, race.ThirdPractice.time).toDateString() === date.toDateString()) ||
          (race.Qualifying && createDate(race.Qualifying.date, race.Qualifying.time).toDateString() === date.toDateString()) ||
          (race.Sprint && createDate(race.Sprint.date, race.Sprint.time).toDateString() === date.toDateString())
      );
      days.push(
        <div key={day} className="flex justify-center items-center h-10">
          {race ? (
            <a
              href="#race-info"
              className={"h-10 w-10 flex items-center justify-center rounded-full bg-[#e10600] text-white"}
              onClick={() => race && handleRaceClick(race, day)}
            >
              {day}
            </a>
          ) : (
            <div className={"h-10 w-10 flex items-center justify-center rounded-full"}>{day}</div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#e10600]">2024 F1 Calendar</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-200">
            <ChevronLeft className="text-[#e10600]" />
          </button>
          <h3 className="text-xl font-semibold">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-200">
            <ChevronRight className="text-[#e10600]" />
          </button>
        </div>
        <div className="grid grid-cols-7 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-semibold">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
      </div>
      <AnimatePresence>
        {selectedRace && (
          <motion.div
            id="race-info"
            key={selectedRace.raceName}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 space-y-2 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold">{selectedRace.raceName}</h3>
            <p>Date: {createDate(selectedRace.date, selectedRace.time).toLocaleDateString()}</p>
            <p>Time: {createDate(selectedRace.date, selectedRace.time).toLocaleTimeString()}</p>
            <p>Circuit: {selectedRace.Circuit.circuitName}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
