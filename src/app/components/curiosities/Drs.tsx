import { AnimatePresence, motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

const animationDuration = 10;
const animationDelay = 3;

export default function DRS({
  activeCard,
  curiosityId,
  setActiveCard,
}: {
  activeCard: string | null;
  curiosityId: string;
  setActiveCard: (activeCard: string | null) => void;
}) {
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
      x: isSmallScreen ? [214 / 2, 0, 0, 214, 214, 214 / 2] : [564 / 2, 0, 0, 564, 564, 564 / 2],
      y: isSmallScreen ? [464, 464, 0, 0, 464, 464] : [264, 264, 0, 0, 264, 264],
      times: [0, 0.085, 0.425, 0.575, 0.915, 1],
    },
    redCar: {
      x: isSmallScreen ? [214 / 3, 0, 0, 214, 214, 214 / 3] : [564 / 3, 0, 0, 564, 564, 564 / 3],
      y: isSmallScreen ? [464, 464, 0, 0, 464, 464] : [264, 264, 0, 0, 264, 264],
      times: [0, 0.113, 0.453, 0.623, 0.963, 1.19],
    },
  };

  return (
    <>
      <button className="flex items-center p-4 w-full" onClick={() => setActiveCard(activeCard === curiosityId ? null : curiosityId)}>
        <Lightbulb className="w-6 h-6" /> <h3 className="text-lg font-semibold ml-2">DRS (Drag Reduction System)</h3>
      </button>
      <AnimatePresence>
        {activeCard === curiosityId && (
          <motion.div
            className="p-4"
            id="drs"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <p>
                The Drag Reduction System (DRS) is a technology used in Formula 1 racing to <b>reduce aerodynamic drag</b> on cars, allowing them to gain
                extra speed on straights. When activated, DRS adjusts the angle of the rear wing, minimizing downforce and enabling higher speeds.
              </p>
              <p>
                DRS is particularly effective in providing a <b>speed boost</b> of around <b>10-12 km/h</b> (approximately 6-7 mph) under optimal
                conditions, making it a powerful tool for overtaking rivals. However, drivers can only use DRS in designated zones on the track, known as
                DRS detection zones.
              </p>
              <p>
                A <b>DRS detection zone</b> is a specific section of the track where drivers must be within <b>one second</b> of the car ahead when
                crossing a timing point to enable DRS. If they meet this requirement, they can activate DRS in the subsequent designated DRS zone, which
                usually occurs on straights.
              </p>
              <div className="flex">
                <div
                  className="relative flex items-center justify-center m-auto w-[250px] h-[500px] md:w-[600px] md:h-[300px] rounded-lg border-2 border-gray-900 bg-gray-400"
                  style={{ background: "linear-gradient(to top, #9CA3AF 60%, #d9f99d 80%)" }}
                >
                  <div className="absolute md:top-[192px] md:left-[260px] w-20 h-10 bg-gray-800 z-10 p-2 text-gray-100 font-semibold">PIT STOP</div>
                  <div className="absolute top-[236px] w-[170px] md:top-[202px] md:w-[520px] h-6 z-0 bg-gray-200 text-gray-100" />
                  <div className="w-[170px] h-[420px] md:w-[520px] md:h-[220px] rounded-lg bg-gray-50 p-2" />
                  <div
                    className="absolute top-[470px] left-[125px] md:top-[264px] md:left-[364px] w-20 h-4 z-10 bg-gray-800 p-2 text-gray-100 font-semibold"
                    style={{
                      backgroundImage: "url(https://t4.ftcdn.net/jpg/05/79/75/39/360_F_579753941_lRNgw6HD8ouKHmam2HYTMW1b0zTCaMng.jpg)",
                      backgroundSize: "cover",
                      transform: `rotate(90deg)`,
                    }}
                  />
                  <div className="absolute flex justify-center top-2 w-full h-6 z-0 font-bold">DRS Detection zone</div>

                  {/* Blue car animation with DRS */}
                  <motion.div
                    className="absolute left-0 top-0 z-50 w-8 h-8 bg-blue-500 rounded-full"
                    animate={animation.blueCar}
                    transition={{
                      duration: animationDuration,
                      ease: "linear",
                      times: [0, 0.127, 0.379, 0.531, 0.783, 1],
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: animationDelay,
                    }}
                  >
                    <motion.div
                      animate={{
                        opacity: [0, 0, 1, 0, 0, 0],
                      }}
                      transition={{
                        duration: animationDuration,
                        ease: "linear",
                        times: [0, 1],
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: animationDelay,
                      }}
                      className="absolute -top-4 -left-1 text-xs w-12 text-blue-950 font-bold"
                    >
                      DRS ON
                    </motion.div>
                  </motion.div>
                  {/* Red car animation for pit stop later */}
                  <motion.div
                    className="absolute left-0 top-0 z-50 w-8 h-8 bg-red-500 rounded-full"
                    animate={animation.redCar}
                    transition={{
                      duration: animationDuration,
                      ease: "linear",
                      times: [0, 0.0833, 0.3333, 0.5833, 0.8333, 1.15],
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: animationDelay,
                    }}
                  />
                </div>
              </div>
              <p>
                The blue car is positioned behind the red car and successfully enters the DRS activation zone.
                <br /> By activating DRS, it gains a speed boost, allowing it to overtake the red car and take the lead, securing the first place.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
