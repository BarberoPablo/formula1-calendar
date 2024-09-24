import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Clock, Lightbulb } from "lucide-react";

const times = {
  oldTyresLap: 0.1,
  newTyresLap: 0.07,
  pitStop: 2,
  pitEntrance: 0.1,
};

export const curiosities = [
  {
    id: 1,
    title: "Pit Stops",
    icon: <Clock className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>
          Pit stops are crucial moments in F1 races where teams change tires and make adjustments to the car. The speed of a pit stop can make or break a
          race strategy.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-bold mb-2">Did you know?</h4>
          <p>The fastest pit stop in F1 history was performed by Red Bull Racing at the 2019 Brazilian Grand Prix, taking just 1.82 seconds!</p>
        </div>
        <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-red-600"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.82, ease: "linear" }}
          />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white">1.82s</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Undercut",
    icon: <ArrowDownRight className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>
          An undercut is a racing strategy where a driver pits earlier than their rival to gain an advantage with fresh tires. This strategy allows the
          driver to set faster lap times while the rival continues on old tires.
        </p>
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
              duration: 10,
              ease: "linear",
              times: [0, 0.1, 0.15, 0.2, 0.3, 0.5, 0.6, 0.65, 0.696, 0.766, 0.836, 0.906, 0.976, 1.046, 1.116, 1.151],
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 4,
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
              duration: 10,
              ease: "linear",
              times: [0, 0.0625, 0.1625, 0.2625, 0.3625, 0.4625, 0.5125, 0.5625, 0.6625, 0.8625, 0.9625, 1.0125, 1.0355, 1.1055, 1.1755, 1.2455],
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 4,
            }}
          />
        </div>
        <p>
          The blue car enters the pit to change tires, then exits and accelerates, overtaking the red car that did more laps under old tires and decided to
          pit later. <br />
          The blue car ends gaining a significant advantage with the fresh tires.
        </p>
      </div>
    ),
  },

  {
    id: 3,
    title: "Overcut",
    icon: <ArrowUpRight className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>An overcut is the opposite of an undercut. It involves staying out longer on older tires while rivals pit, hoping to gain an advantage.</p>
        <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden">
          <motion.div
            className="absolute bottom-0 left-0 w-12 h-12 bg-green-500 rounded-full"
            initial={{ x: 0, y: 0 }}
            animate={{ x: 300, y: 0 }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-12 h-12 bg-yellow-500 rounded-full"
            initial={{ x: 50, y: 0 }}
            animate={{ x: [50, 50, 300], y: [0, -100, 0] }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-gray-300 flex items-center justify-center font-bold">
            PIT
          </div>
        </div>
        <p>The green car stays out longer, potentially gaining an advantage if the yellow car gets held up in traffic after pitting.</p>
      </div>
    ),
  },
  {
    id: 4,
    title: "DRS (Drag Reduction System)",
    icon: <Lightbulb className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>DRS is a system that allows a driver to open a flap on the rear wing, reducing drag and increasing top speed to facilitate overtaking.</p>
        <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden">
          <motion.div
            className="absolute bottom-4 left-4 w-16 h-8 bg-purple-500 rounded-md"
            initial={{ x: 0 }}
            animate={{ x: 280 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          >
            <motion.div
              className="absolute top-0 right-0 w-4 h-8 bg-purple-700"
              animate={{ rotateY: [0, 90, 90, 0] }}
              transition={{ duration: 2, times: [0, 0.4, 0.6, 1], repeat: Infinity }}
            />
          </motion.div>
          <div className="absolute top-4 left-4 font-bold">DRS Zone</div>
        </div>
        <p>When DRS is activated, the rear wing flap opens, reducing drag and allowing for higher top speeds on straights.</p>
      </div>
    ),
  },
];
