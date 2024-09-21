import { f1Api } from "./api/f1Api";
import Banner from "./components/Banner";
import CalendarAndCircuit from "./components/calendar-and-circuit/index";
import CountdownTimer from "./components/CountdownTimer";
import F1Curiosities from "./components/F1Curiosities";
import Standings from "./components/Standings";
//import UpdateRaceStore from "./components/UpdateRacesStore"; // Componente cliente para actualizar el store

export default async function Home() {
  const [nextRace, races] = await Promise.all([f1Api.getNextRace(), f1Api.getAllRaces("2024")]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {nextRace && <Banner nextRace={nextRace} />}
      <div className="w-full max-w-7xl space-y-8 mt-8 text-gray-700">
        {/* <UpdateRaceStore nextRace={nextRace} /> */}

        {nextRace && (
          <div className="block w-fit m-auto lg:fixed lg:top-20 lg:right-4 ">
            <CountdownTimer nextRace={nextRace} />
          </div>
        )}
        <CalendarAndCircuit races={races} />
        <Standings />
        <F1Curiosities />
      </div>
    </main>
  );
}
