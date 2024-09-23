import { create } from "zustand";
import { f1Api } from "../api/f1Api";
import { Race } from "../lib/types";

interface State {
  nextRace: Race | null;
  allRaces: Race[] | null;
}

interface Actions {
  setNextRace: (race: Race) => void;
  setAllRaces: (races: Race[]) => void;
  fetchNextRace: () => Promise<void>;
}

export const useRacesStore = create<State & Actions>()((set) => ({
  /* Initial State */
  allRaces: null,
  nextRace: null,

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
}));
