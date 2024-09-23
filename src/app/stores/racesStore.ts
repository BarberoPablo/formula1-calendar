import { create } from "zustand";
import { f1Api } from "../api/f1Api";
import { DriversStandingsAPI, Race, TeamsStandingsAPI } from "../lib/types";

interface State {
  nextRace: Race | null;
  allRaces: Race[] | null;
  driversStandings: DriversStandingsAPI[] | [];
  teamsStandings: TeamsStandingsAPI[] | [];
}

interface Actions {
  setNextRace: (race: Race) => void;
  setAllRaces: (races: Race[]) => void;
  fetchNextRace: () => Promise<void>;
  setDriversStandings: (standings: DriversStandingsAPI[]) => void;
  setTeamsStandings: (standings: TeamsStandingsAPI[]) => void;
}

export const useRacesStore = create<State & Actions>()((set) => ({
  /* Initial State */
  allRaces: null,
  nextRace: null,
  driversStandings: [],
  teamsStandings: [],

  /* Actions */
  setNextRace: (race: Race) => set({ nextRace: race }),

  setAllRaces: (races: Race[]) => set({ allRaces: races }),

  fetchNextRace: async () => {
    try {
      const nextRace = await f1Api.getNextRace();
      set({ nextRace });
    } catch (error) {
      console.error("Error fetching next race:", error);
    }
  },

  setDriversStandings: (standings: DriversStandingsAPI[]) => set({ driversStandings: standings }),

  setTeamsStandings: (standings: TeamsStandingsAPI[]) => set({ teamsStandings: standings }),
}));
