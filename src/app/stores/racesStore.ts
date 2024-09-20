import { create } from "zustand";
import { f1Api } from "../api/f1Api";
import { Race } from "../lib/types";

interface State {
  nextRace: Race | null;
}

interface Actions {
  /* setNextRace: (race: Race) => void; */
  fetchNextRace: () => Promise<void>;
}

export const useRacesStore = create<State & Actions>()((set) => ({
  /* State */
  nextRace: null,

  /* Actions */
  /* setNextRace: (race: Race) => set({ nextRace: race }), */

  fetchNextRace: async () => {
    try {
      const nextRace = await f1Api.getNextRace();
      set({ nextRace });
    } catch (error) {
      console.error("Error fetching next race:", error);
    }
  },
}));
