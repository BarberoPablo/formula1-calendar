import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const animationDuration = 20;

const animationDelay = 6;

const times = {
  oldTyresLap: (0.1 * 4 * animationDuration).toFixed(0) + "sec",
  newTyresLap: (0.07 * 4 * animationDuration).toFixed(1) + "sec",
  pitStop: (0.2 * animationDuration).toFixed(0) + "sec",
  pitEntrance: (0.1 * animationDuration).toFixed(0) + "sec",
  pitExit: (0.1 * animationDuration).toFixed(0) + "sec",
  blueTime: (1.151 * animationDuration).toFixed(3) + "sec",
  redTime: (1.2455 * animationDuration).toFixed(3) + "sec",
};

const curiosityId = "undercut";

export default function Undercut({ activeCard, setActiveCard }: { activeCard: string | null; setActiveCard: (activeCard: string | null) => void }) {
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
              <div className="flex">
                <div className="flex flex-col font-semibold text-gray-600">
                  <span>Lap times:</span>
                  <span>Old tires: {times.oldTyresLap}</span>
                  <span>New tires: {times.newTyresLap}</span>
                  <span>Pit stop time: {times.pitStop}</span>
                  <span>Pit entrance/exit time: {times.pitExit}</span>
                  <span className="font-bold text-blue-900">Blue time: {times.blueTime}</span>
                  <span className="font-bold text-red-900">Red time: {times.redTime}</span>
                </div>
                <div className="relative flex items-center justify-center m-auto lg:w-[600px] lg:h-[300px] rounded-lg border-2 border-gray-900 bg-gray-400">
                  {/* Pit Stop */}
                  <div
                    className="absolute top-[192px] left-[260px] w-20 h-10 bg-gray-800 z-10 p-2 text-gray-100 font-semibold"
                    style={{ transform: `rotate(90deg)` }}
                  >
                    PIT STOP
                  </div>
                  {/* Pit lane */}
                  <div className="absolute top-[202px] w-[520px] h-6 z-0 bg-gray-200 text-gray-100" />

                  {/* white background */}
                  <div className="w-[520px] h-[220px] rounded-lg bg-gray-50 p-2" />

                  {/* Finish line */}
                  <div
                    className="absolute top-[264px] left-[364px] w-20 h-4 z-10 bg-gray-800 p-2 text-gray-100 font-semibold"
                    style={{
                      backgroundImage: "url(https://t4.ftcdn.net/jpg/05/79/75/39/360_F_579753941_lRNgw6HD8ouKHmam2HYTMW1b0zTCaMng.jpg)",
                      backgroundSize: "cover",
                      transform: `rotate(90deg)`,
                    }}
                  />

                  {/* Blue car animation for pit stop and overtaking */}
                  <motion.div
                    className="absolute left-0 top-0 z-50 w-8 h-8 bg-blue-500 rounded-full"
                    animate={{
                      // Ruta: track -> boxes -> finishes first lap on boxes -> back on track -> finishes second lap faster with new tires.
                      x: [0, 564, 564, (564 * 5) / 6, 564 / 2, 564 / 2, 564 / 6, 0, 0, 564, 564, 0, 0, 564, 564, 564 / 2],
                      y: [0, 0, 264 / 2, (264 * 3) / 4, (264 * 3) / 4, (264 * 3) / 4, (264 * 3) / 4, (264 * 2) / 3, 0, 0, 264, 264, 0, 0, 264, 264],
                    }}
                    transition={{
                      duration: animationDuration,
                      ease: "linear",
                      times: [0, 0.1, 0.15, 0.2, 0.3, 0.5, 0.6, 0.65, 0.696, 0.766, 0.836, 0.906, 0.976, 1.046, 1.116, 1.151],
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: animationDelay,
                    }}
                  />
                  {/* Red car animation for pit stop later */}
                  <motion.div
                    className="absolute left-0 top-0 z-50 w-8 h-8 bg-red-500 rounded-full"
                    animate={{
                      // Ruta: track -> finishes a lap under old tyres -> boxes -> back on track -> finishes second lap behind blue car.
                      x: [(564 * 3) / 8, 564, 564, 0, 0, 564, 564, (564 * 5) / 6, 564 / 2, 564 / 2, (564 * 1) / 6, 0, 0, 564, 564, 564 / 2],
                      y: [0, 0, 264, 264, 0, 0, 264 / 2, (264 * 3) / 4, (264 * 3) / 4, (264 * 3) / 4, (264 * 3) / 4, (264 * 2) / 3, 0, 0, 264, 264],
                    }}
                    transition={{
                      duration: animationDuration,
                      ease: "linear",
                      times: [0, 0.0625, 0.1625, 0.2625, 0.3625, 0.4625, 0.5125, 0.5625, 0.6625, 0.8625, 0.9625, 1.0125, 1.0355, 1.1055, 1.1755, 1.2455],
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
