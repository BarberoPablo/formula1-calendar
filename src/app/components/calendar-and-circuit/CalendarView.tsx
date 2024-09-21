import React, { useState } from "react";
import type { Race } from "../../lib/types";
import { createDate, getDaysInMonth, getFirstDayOfMonth } from "../../lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarViewProps {
  races: Race[];
  onRaceClick: (race: Race, day: number) => void;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const CalendarView: React.FC<CalendarViewProps> = ({ races, onRaceClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
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
              onClick={() => race && onRaceClick(race, day)}
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
    <div className="p-4" id="calendar">
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
    </div>
  );
};

export default CalendarView;
