"use client";

import { AnimatePresence } from "framer-motion";
import { AlertCircle, Gamepad2, Zap } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const NUM_LIGHTS = 5;
const MIN_DELAY = 1000;
const MAX_DELAY = 6000;

export default function LightsReactionTime({
  activeCard,
  curiosityId,
  setActiveCard,
}: {
  activeCard: string | null;
  curiosityId: string;
  setActiveCard: (activeCard: string | null) => void;
}) {
  const [lights, setLights] = useState<boolean[]>(Array(NUM_LIGHTS).fill(false));
  const [gameState, setGameState] = useState<"ready" | "starting" | "waiting" | "finished">("ready");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [bestTime, setBestTime] = useState<number | null>(Number(window.localStorage.getItem("f1BestTime")) || null); //local storage
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const updateBestTime = useCallback(
    (time: number) => {
      if (bestTime === null || time < bestTime) {
        setBestTime(time);
        localStorage.setItem("f1BestTime", time.toString());
      }
    },
    [bestTime]
  );

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  useEffect(() => {
    // If false start => stop game
    if (reactionTime === -1) {
      clearAllTimeouts();
    }
  }, [reactionTime]);

  const startGame = useCallback(() => {
    setGameState("starting");
    setLights(Array(NUM_LIGHTS).fill(false));
    setReactionTime(null);

    const lightSequence = Array.from({ length: NUM_LIGHTS }, (_, i) => i);
    lightSequence.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setLights((prev) => {
          const newLights = [...prev];
          newLights[index] = true;
          return newLights;
        });

        if (index === NUM_LIGHTS - 1) {
          const randomDelay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1) + MIN_DELAY);
          const finalTimeoutId = setTimeout(() => {
            setLights(Array(NUM_LIGHTS).fill(false));
            setStartTime(Date.now());
            setGameState("waiting");
          }, randomDelay);
          timeoutsRef.current.push(finalTimeoutId);
        }
      }, index * 1000);
      timeoutsRef.current.push(timeoutId);
    });
  }, []);

  const handleReaction = useCallback(() => {
    if (gameState === "waiting" && startTime) {
      const endTime = Date.now();
      const reaction = endTime - startTime;

      setReactionTime(reaction);
      setGameState("finished");
      if (bestTime === null || reaction < bestTime) {
        setBestTime(reaction);
        localStorage.setItem("f1BestTime", reaction.toString());
      }
    } else if (gameState === "starting") {
      setGameState("finished");
      setReactionTime(-1); // Indicates a false start
    }
  }, [gameState, startTime, updateBestTime]);

  return (
    <>
      <button className="flex items-center p-4 w-full" onClick={() => setActiveCard(activeCard === curiosityId ? null : curiosityId)}>
        <Gamepad2 className="w-6 h-6" /> <h3 className="text-lg font-semibold ml-2">Lights Out!</h3>
      </button>
      <AnimatePresence>
        {activeCard === curiosityId && (
          <div className="relative h-[412px] sm:h-auto flex flex-col items-center justify-center p-4">
            <div className="mb-8 text-center">
              <h1 className="font-bold mb-2">F1 Reaction Game</h1>
              <p>Test your reflexes like an F1 driver!</p>
              <p>
                <b>Hit the lights</b> to start and <b>wait</b> for all of them to <b>turn off</b>
              </p>
            </div>

            <div className="bg-[#222222] rounded-xl p-2" onClick={gameState === "ready" || gameState === "finished" ? startGame : handleReaction}>
              <div className="flex gap-2">
                {lights.map((on, index) => (
                  <div key={index + "light-row"} className={`space-y-2 ${index !== 4 && "border-r-2 border-white pr-2"}`}>
                    <div className={`w-8 h-8 md:w-16 md:h-16 rounded-full ${on ? "bg-[#e10600]" : "bg-gray-200"}`} />
                    <div className={`w-8 h-8 md:w-16 md:h-16 rounded-full ${on ? "bg-[#e10600]" : "bg-gray-200"}`} />
                    <div className={`w-8 h-8 md:w-16 md:h-16 rounded-full ${on ? "bg-[#e10600]" : "bg-gray-200"}`} />
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-[#e10600] font-bold">{gameState === "ready" ? "Start Game" : gameState === "finished" ? "Play Again" : "Go!"}</p>

            <div className="text-center">
              {reactionTime !== null ? (
                <div className="mb-4">
                  {reactionTime === -1 ? (
                    <div className="flex mt-2 items-center justify-center text-red-500">
                      <AlertCircle className="mr-2" />
                      <span>False Start!</span>
                    </div>
                  ) : (
                    <div className="">
                      <p>
                        <b>{reactionTime}ms</b>, you could be a F1 driver! <br />
                        {reactionTime > 220 && "But not a good one..."}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <p>The average time for a F1 driver is 200ms</p>
              )}
              {bestTime !== null && (
                <div className="flex items-center justify-center text-yellow-400">
                  <Zap className="mr-2" />
                  <span className="text-xl">Best time: {bestTime} ms</span>
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
