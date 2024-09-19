import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Clock, Lightbulb } from "lucide-react";
import { TeamName } from "./types";

export const teamColors: { [key in TeamName]: string[] } = {
  "Red Bull Racing": ["#0600EF", "#FF0000"],
  Mercedes: ["#00D2BE"],
  Ferrari: ["#DC0000"],
  McLaren: ["#FF8700"],
  "Aston Martin": ["#006F62"],
  Alpine: ["#0090FF"],
  AlphaTauri: ["#2B4562"],
  "Alfa Romeo": ["#900000"],
  "Haas F1 Team": ["#FF0000", "#FFFFFF"],
  Williams: ["#005AFF"],
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
        <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden">
          {/* Blue car animation for pit stop and overtaking */}
          <motion.div
            className="absolute bottom-0 left-0 z-20 w-12 h-12 bg-blue-500 rounded-full"
            initial={{ x: "0vw", y: -90 }}
            animate={{
              x: ["0vw", "0vw", "0vw", "12.5vw", "25vw", "37.5vw", "50vw", "62.5vw", "75vw", "87.5vw", "100vw"],
              y: [-90],
            }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity, repeatType: "loop" }}
          />
          {/* Yellow car animation as the blue car overtakes */}
          <motion.div
            className="absolute bottom-0 left-0 z-10 w-12 h-12 bg-yellow-500 rounded-full"
            initial={{ x: 0, y: 0 }}
            animate={{
              x: ["0vw", "8vw", "16vw", "24vw", "32vw", "40vw", "48vw", "56vw", "64vw", "72vw", "80vw"],
              y: [0],
            }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity, repeatType: "loop" }}
          />
          <div className="absolute top-10 left-[30px] transform -translate-x-1/2 -translate-y-1/2 w-16 h-1/2 z-0 bg-gray-300 flex  justify-center font-bold">
            PIT
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-full px-2 bg-gray-300 flex items-center justify-center font-bold">
            Finish Line
          </div>
        </div>
        <p>
          The blue car enters the pit, simulating a pit stop by moving up slightly, then exits and accelerates to the right, overtaking the yellow car that
          is still on older tires. The blue car gains a significant advantage with the fresh tires.
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
