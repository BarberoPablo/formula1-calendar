import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";
import type { Race } from "../../lib/types";
import { createDate, getDaysInMonth, getFirstDayOfMonth } from "../../lib/utils";
import { motion } from "framer-motion";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function CalendarView({ races, onRaceClick }: { races: Race[]; onRaceClick: (race: Race /* trackId: number */) => void }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const renderCalendar = useCallback(() => {
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
      const race = races.find((race) => createDate(race.date, race.time)?.toDateString() === date.toDateString());

      days.push(
        <div key={day} className="flex justify-center items-center h-10">
          {race ? (
            <>
              {/* Does not render on lg screens: */}
              <a
                href="#race-info"
                className="lg:hidden h-[29px] w-[29px] flex items-center justify-center rounded-full bg-[#e10600] text-white "
                onClick={() => race && onRaceClick(race)}
              >
                {day}
              </a>
              {/* Only renders on lg screens: */}
              <button
                className="hidden lg:flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#e10600] text-white"
                onClick={() => race && onRaceClick(race)}
              >
                {day}
              </button>
            </>
          ) : (
            <div className={"h-10 w-10 flex items-center justify-center rounded-full"}>{day}</div>
          )}
        </div>
      );
    }

    return days;
  }, [currentDate, races, onRaceClick]);

  return (
    <motion.div id="schedule" key={"schedule-section"} initial={{ opacity: 0, x: 300 }} animate={{ opacity: 1, x: 0 }} className="lg:p-4">
      <div className="m-auto w-72 lg:w-80 bg-white p-4 rounded-lg shadow-md">
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
    </motion.div>
  );
}
