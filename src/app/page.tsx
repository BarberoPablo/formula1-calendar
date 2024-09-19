import CountdownTimer from "./components/CountdownTimer";
import Calendar from "./components/Calendar";
import Standings from "./components/Standings";
import F1Curiosities from "./components/F1Curiosities";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-[#e10600]">F1 Dashboard</h1>
      <div className="w-full max-w-7xl space-y-8 text-gray-700">
        <CountdownTimer />
        <Calendar />
        <Standings />
        <F1Curiosities />
      </div>
    </main>
  );
}
