import { Race } from "@/app/lib/types";
import { createDate } from "@/app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function CircuitView({ selectedRace }: { selectedRace: Race | null }) {
  console.log({ selectedRace });
  return (
    <AnimatePresence>
      {selectedRace && (
        <motion.div
          id="race-info"
          key={selectedRace.raceName}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex flex-col justify-between lg:flex-row mt-14 py-10 lg:py-6 space-y-4 rounded-tr-3xl lg:shadow-lg border-t-[10px] border-r-[10px] border-[#e10600] bg-cover bg-center"
        >
          <div className="absolute flex flex-col lg:flex-row lg:bg-gray-100 -top-5 left-0">
            <div className="bg-gray-100 w-28 lg:w-14 pl-4 lg:pl-0">
              <Image
                className="max-w-14 rounded-s"
                width={56}
                height={32}
                src="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/singapore-flag"
                alt="Singapore flag"
              />
            </div>
            <h2 className="lg:mx-5 text-2xl text-black font-bold">{selectedRace.Circuit.circuitName}</h2>
          </div>

          <div>
            <Image
              layout="responsive"
              src="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit"
              alt="Singapore Circuit"
              width={732}
              height={412}
            />
          </div>

          <div className="flex flex-col w-full lg:max-w-[500px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-fit gap-x-2 gap-y-5 pr-5 mb-4">
              <FramedInfo title="Number of Laps" bigContent="62" />
              <FramedInfo title="Circuit Length" bigContent="4.94" smallContent="km" />
              <FramedInfo title="Circuit Length" bigContent="4.94" smallContent="km" />
              <FramedInfo title="Circuit Length" bigContent="4.94" smallContent="km" />
            </div>
            <SessionDates race={selectedRace} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FramedInfo({ title, bigContent, smallContent }: { title: string; bigContent: string; smallContent?: string }) {
  return (
    <div className="flex flex-col w-full h-fit pb-5 pr-5 text-black rounded-br-2xl border-b-2 border-r-2 border-gray-300">
      <div>
        <span className="text-base">{title}</span>
      </div>
      <div>
        <h2 className="text-4xl font-black">
          {bigContent} <span className="text-base font-normal">{smallContent}</span>
        </h2>
      </div>
    </div>
  );
}

function SessionDates({ race }: { race: Race }) {
  const sessions = [
    { date: createDate(race.date, race.time), event: "Race Day" },
    { date: createDate(race.Qualifying?.date, race.Qualifying?.time), event: "Qualifying Day" },
    { date: createDate(race.Sprint?.date, race.Sprint?.time), event: "Sprint Day" },
    { date: createDate(race.ThirdPractice?.date, race.ThirdPractice?.time), event: "Third Practice" },
    { date: createDate(race.SecondPractice.date, race.SecondPractice.time), event: "Second Practice" },
    { date: createDate(race.FirstPractice.date, race.FirstPractice.time), event: "First Practice" },
  ];
  return (
    <div className="flex flex-col w-full h-fit space-y-4">
      {sessions.map(
        (session) =>
          session.date && (
            <div key={session.event} className="flex flex-col pb-1 text-black rounded-br-2xl border-b-2  border-gray-300">
              <h2 className="text-xl font-black">
                {session.event}: <span className="text-base font-normal">{session.date.toLocaleString()}</span>
              </h2>
            </div>
          )
      )}
    </div>
  );
}
