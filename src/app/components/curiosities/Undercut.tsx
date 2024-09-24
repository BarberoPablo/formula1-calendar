import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";

const animationDuration = 20;

const animationDelay = 6;

const times = {
  oldTyresLap: (0.1 * 4 * animationDuration).toFixed(0) + "sec",
  newTyresLap: (0.07 * 4 * animationDuration).toFixed(1) + "sec",
  pitStop: (0.2 * animationDuration).toFixed(0) + "sec",
  pitExit: (0.2 * animationDuration).toFixed(0) + "sec",
  blueTime: (1.151 * animationDuration).toFixed(3) + "sec",
  redTime: (1.2455 * animationDuration).toFixed(3) + "sec",
};

const curiosityId = "undercut";

const tableHead = ["Old tires", "New tires", "Pit stop time", "Pit entrance/exit time", "Blue time", "Red time"];
const tableBody = [times.oldTyresLap, times.newTyresLap, times.pitStop, times.pitExit, times.blueTime, times.redTime];

export default function Undercut({ activeCard, setActiveCard }: { activeCard: string | null; setActiveCard: (activeCard: string | null) => void }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const animation = {
    /* small screen: 214x464 */
    /* big screen:   564x264 */
    blueCar: {
      x: isSmallScreen
        ? [0, 214, 214, (214 * 5) / 6, 214 / 2, 214 / 2, 214 / 6, 0, 0, 214, 214, 0, 0, 214, 214, 214 / 2]
        : [0, 564, 564, (564 * 5) / 6, 564 / 2, 564 / 2, 564 / 6, 0, 0, 564, 564, 0, 0, 564, 564, 564 / 2],
      y: isSmallScreen
        ? [0, 0, 464 / 2, (464 * 3) / 4, (464 * 3) / 4, (464 * 3) / 4, (464 * 3) / 4, (464 * 2) / 3, 0, 0, 464, 464, 0, 0, 464, 464]
        : [0, 0, 264 / 2, (264 * 3) / 4, (264 * 3) / 4, (264 * 3) / 4, (264 * 3) / 4, (264 * 2) / 3, 0, 0, 264, 264, 0, 0, 264, 264],
      times: isSmallScreen
        ? [0, 0.1, 0.15, 0.2, 0.3, 0.5, 0.6, 0.65, 0.696, 0.766, 0.836, 0.906, 0.976, 1.046, 1.116, 1.151]
        : [0, 0.1, 0.15, 0.2, 0.3, 0.5, 0.6, 0.65, 0.696, 0.766, 0.836, 0.906, 0.976, 1.046, 1.116, 1.151],
    },
    redCar: {
      x: isSmallScreen
        ? [(214 * 3) / 8, 214, 214, 0, 0, 214, 214, (214 * 5) / 6, 214 / 2, 214 / 2, (214 * 1) / 6, 0, 0, 214, 214, 214 / 2]
        : [(564 * 3) / 8, 564, 564, 0, 0, 564, 564, (564 * 5) / 6, 564 / 2, 564 / 2, (564 * 1) / 6, 0, 0, 564, 564, 564 / 2],
      y: isSmallScreen
        ? [0, 0, 464, 464, 0, 0, 464 / 2, (464 * 3) / 4, (464 * 3) / 4, (464 * 3) / 4, (464 * 3) / 4, (464 * 2) / 3, 0, 0, 464, 464]
        : [0, 0, 264, 264, 0, 0, 264 / 2, (264 * 3) / 4, (264 * 3) / 4, (264 * 3) / 4, (264 * 3) / 4, (264 * 2) / 3, 0, 0, 264, 264],
      times: isSmallScreen
        ? [0, 0.0625, 0.1625, 0.2625, 0.3625, 0.4625, 0.5125, 0.5625, 0.6625, 0.8625, 0.9625, 1.0125, 1.0355, 1.1055, 1.1755, 1.2455]
        : [0, 0.0625, 0.1625, 0.2625, 0.3625, 0.4625, 0.5125, 0.5625, 0.6625, 0.8625, 0.9625, 1.0125, 1.0355, 1.1055, 1.1755, 1.2455],
    },
  };

  return (
    <>
      <button className="flex items-center p-4 w-full" onClick={() => setActiveCard(activeCard === curiosityId ? null : curiosityId)}>
        <ArrowDownRight className="w-6 h-6" />
        <h3 className="text-lg font-semibold ml-2">Undercut</h3>
      </button>
      <AnimatePresence>
        {activeCard === curiosityId && (
          <motion.div
            className="p-4"
            id="undercut"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <p>
                An undercut is a racing strategy where a driver pits earlier than their rival to gain an advantage with fresh tires. This strategy allows
                the driver to set faster lap times while the rival continues on old tires.
              </p>
              <div className="flex flex-col items-center">
                <h3 className="font-bold">Lap times</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full bg-white border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100 text-gray-600">
                        {tableHead.map((head, index) => (
                          <th key={head} className={`py-2 px-4 border-b ${(index === 2 || index === 3) && "hidden md:table-cell"}`}>
                            {head}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        {tableBody.map((time, index) => (
                          <td key={time + index} className={`py-2 px-4 border-b ${(index === 2 || index === 3) && "hidden md:table-cell"}`}>
                            {time}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="relative flex items-center justify-center m-auto w-[250px] h-[500px] md:w-[600px] md:h-[300px] rounded-lg border-2 border-gray-900 bg-gray-400">
                  {/* Pit Stop */}
                  <div className="absolute top-[344px] md:top-[192px] md:left-[260px] w-20 h-10 bg-gray-800 z-10 p-2 text-gray-100 font-semibold">
                    PIT STOP
                  </div>
                  {/* Pit lane */}
                  <div className="absolute top-[350px] w-[170px] md:top-[202px] md:w-[520px] h-6 z-0 bg-gray-200 text-gray-100" />

                  {/* white background */}
                  <div className="w-[170px] h-[420px] md:w-[520px] md:h-[220px] rounded-lg bg-gray-50 p-2" />

                  {/* Finish line */}
                  <div
                    className="absolute top-[470px] left-[125px] md:top-[264px] md:left-[364px] w-20 h-4 z-10 bg-gray-800 p-2 text-gray-100 font-semibold"
                    style={{
                      backgroundImage: "url(https://t4.ftcdn.net/jpg/05/79/75/39/360_F_579753941_lRNgw6HD8ouKHmam2HYTMW1b0zTCaMng.jpg)",
                      backgroundSize: "cover",
                      transform: `rotate(90deg)`,
                    }}
                  />

                  {/* Blue car animation for pit stop and overtaking */}
                  <motion.div
                    className="absolute left-0 top-0 z-50 w-8 h-8 bg-blue-500 rounded-full"
                    animate={animation.blueCar}
                    transition={{
                      duration: animationDuration,
                      ease: "linear",
                      times: animation.blueCar.times,
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: animationDelay,
                    }}
                  />
                  {/* Red car animation for pit stop later */}
                  <motion.div
                    className="absolute left-0 top-0 z-50 w-8 h-8 bg-red-500 rounded-full"
                    animate={animation.redCar}
                    transition={{
                      duration: animationDuration,
                      ease: "linear",
                      times: animation.redCar.times,
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: animationDelay,
                    }}
                  />
                </div>
              </div>
              <p>
                The blue car enters the pit to change tires, then exits and accelerates, overtaking the red car that did more laps under old tires and
                decided to pit later. <br />
                The blue car ends gaining a significant advantage with the fresh tires.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
