import { Race } from "../lib/types";

const baseUrl = "https://ergast.com/api/f1/";

//Races
//Next race: https://ergast.com/api/f1/current/next.json
//All races dates and circuit details: https://ergast.com/api/f1/2024.json (should also store round to access race details (winners))
//Details for specific race: https://ergast.com/api/f1/2024/1/results.json

//Standings
//Drivers
//https://ergast.com/api/f1/2024/driverStandings.json //drivers actual points
//https://ergast.com/api/f1/2024/5/driverStandings.json //drivers points at race number 5
//Constructors
//https://ergast.com/api/f1/2024/constructorStandings.json //actual constructorStandings
//https://ergast.com/api/f1/2024/5/constructorStandings.json //actual constructorStandings at race number 5

export const endpoint = {
  //sessions: (year: number) => baseUrl + `sessions?year=${year}`,
  "next-race": baseUrl + "current/next.json",
  "all-races": (year: string) => baseUrl + `${year}.json`,
};

export const f1Api = {
  async getNextRace(): Promise<Race | null> {
    try {
      const response = await fetch(endpoint["next-race"]);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.MRData.RaceTable.Races[0];
    } catch (error) {
      console.error("Error fetching the next race:", error);
      return null;
    }
  },

  async getAllRaces(year: string): Promise<Race[] | []> {
    try {
      const response = await fetch(endpoint["all-races"](year));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.MRData.RaceTable.Races;
    } catch (error) {
      console.error("Error fetching the next race:", error);
      return [];
    }
  },
};
