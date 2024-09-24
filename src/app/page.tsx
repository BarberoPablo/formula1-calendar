import { f1Api } from "./api/f1Api";
import Banner from "./components/Banner";
import CalendarAndCircuit from "./components/calendar-and-circuit/index";
import CountdownTimer from "./components/CountdownTimer";
import Curiosities from "./components/curiosities";
import Standings from "./components/standings";
import UpdateRaceStore from "./components/UpdateRacesStore"; // Componente cliente para actualizar el store
import { apiYear } from "./lib/constants";

export default async function Home() {
  const [nextRace, races, driversStandings, teamsStandings] = await Promise.all([
    f1Api.getNextRace(),
    f1Api.getAllRaces(apiYear),
    f1Api.getDriversStandings(apiYear),
    f1Api.getTeamsStandings(apiYear),
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <UpdateRaceStore nextRace={nextRace} allRaces={races} driversStandings={driversStandings} teamsStandings={teamsStandings} />

      {nextRace && <Banner nextRace={nextRace} />}
      <div className="w-full max-w-7xl space-y-8 mt-8 text-gray-700 overflow-x-hidden">
        {nextRace && (
          <div className="block w-fit z-50 m-auto lg:fixed lg:top-20 lg:right-4 ">
            <CountdownTimer nextRace={nextRace} />
          </div>
        )}

        <CalendarAndCircuit races={races} />
        <Standings />
        <Curiosities />
      </div>
    </main>
  );
}
