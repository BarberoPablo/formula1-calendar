// src/app/page.tsx
import Calendar from "./components/Calendar";
import CountdownTimer from "./components/CountdownTimer";
import Standings from "./components/Standings";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-[#e10600]">F1 Dashboard</h1>
      <div className="w-full max-w-7xl space-y-8">
        <CountdownTimer />
        <Calendar />
        <Standings />
      </div>
    </main>
  );
}
