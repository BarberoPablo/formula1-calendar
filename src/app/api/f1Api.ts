import { DriversStandingsAPI, Race, RaceResultAPI, TeamsStandingsAPI } from "../lib/types";

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
  "drivers-standings": (year: string, round?: string) => baseUrl + `${year}/${round ? `${round}/` : ""}driverStandings.json`,
  "teams-standings": (year: string, round?: string) => baseUrl + `${year}/${round ? `${round}/` : ""}constructorStandings.json`,
  "race-results": (year: string, round: string) => baseUrl + `${year}/${round}/results.json`,
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

  async getDriversStandings(year: string): Promise<DriversStandingsAPI[] | []> {
    try {
      const response = await fetch(endpoint["drivers-standings"](year));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    } catch (error) {
      console.error("Error fetching the next race:", error);
      return [];
    }
  },

  async getTeamsStandings(year: string): Promise<TeamsStandingsAPI[] | []> {
    try {
      const response = await fetch(endpoint["teams-standings"](year));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    } catch (error) {
      console.error("Error fetching the next race:", error);
      return [];
    }
  },

  async getRaceDetails(year: string, round: string): Promise<RaceResultAPI[] | []> {
    try {
      const response = await fetch(endpoint["race-results"](year, round));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return data.MRData.RaceTable.Races[0].Results;
    } catch (error) {
      console.error("Error fetching the next race:", error);
      return [];
    }
  },
};
