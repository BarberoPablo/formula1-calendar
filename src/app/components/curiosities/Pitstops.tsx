import { AnimatePresence, motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function Pitstops({
  activeCard,
  curiosityId,
  setActiveCard,
}: {
  activeCard: string | null;
  curiosityId: string;
  setActiveCard: (activeCard: string | null) => void;
}) {
  return (
    <>
      <button className="flex items-center p-4 w-full" onClick={() => setActiveCard(activeCard === curiosityId ? null : curiosityId)}>
        <Clock className="w-6 h-6" />
        <h3 className="text-lg font-semibold ml-2">Pit Stops</h3>
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
                Pit stops are crucial moments in F1 races where teams change tires and make adjustments to the car. The speed of a pit stop can make or
                break a race strategy.
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
