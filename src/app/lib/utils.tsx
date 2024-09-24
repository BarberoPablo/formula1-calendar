import { Race } from "./types";

export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export function createDate(date: string | undefined, time: string | undefined): Date | null {
  if (date && time) {
    return new Date(`${date}T${time}`);
  }
  return null;
}

export function getSessions(race: Race): {
  date: Date;
  event: string;
}[] {
  const sessions = [
    { date: createDate(race.date, race.time), event: "Race Day" },
    { date: createDate(race.Qualifying?.date, race.Qualifying?.time), event: "Qualifying Day" },
    { date: createDate(race.Sprint?.date, race.Sprint?.time), event: "Sprint Day" },
    { date: createDate(race.ThirdPractice?.date, race.ThirdPractice?.time), event: "Third Practice" },
    { date: createDate(race.SecondPractice.date, race.SecondPractice.time), event: "Second Practice" },
    { date: createDate(race.FirstPractice.date, race.FirstPractice.time), event: "First Practice" },
  ].filter((session) => session.date !== null);

  return sessions as { date: Date; event: string }[];
}

export function getNextSession(race: Race) {
  const sessions = getSessions(race);
  const now = new Date();
  const nextSession = sessions.find((session, index) => session.date && session.date > now && (!sessions[index + 1] || sessions[index + 1]?.date < now));

  return nextSession;
}
