import { f1Api } from "./api/f1Api";
import Calendar from "./components/Calendar";
import CountdownTimer from "./components/CountdownTimer";
import F1Curiosities from "./components/F1Curiosities";
import Standings from "./components/Standings";
//import UpdateRaceStore from "./components/UpdateRacesStore"; // Componente cliente para actualizar el store

export default async function Home() {
  const [nextRace, races] = await Promise.all([f1Api.getNextRace(), f1Api.getAllRaces("2024")]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-[#e10600]">F1 Dashboard</h1>
      <span className="text-gray-600">VER: https://gsap.com/community/forums/topic/27544-formula-1-undercut-attempt/</span>

      <div className="w-full max-w-7xl space-y-8 text-gray-700">
        {/* <UpdateRaceStore nextRace={nextRace} /> */}
        {/* I will use props instead of zustand for nextRace so CountdownTimer has instant access to it */}
        <CountdownTimer nextRace={nextRace} />
        <Calendar races={races} />
        <Standings />
        <F1Curiosities />
      </div>
    </main>
  );
}
