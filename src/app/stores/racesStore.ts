import { create } from "zustand";
import { f1Api } from "../api/f1Api";
import { Race } from "../lib/types";

interface State {
  nextRace: Race | null;
}

interface Actions {
  fetchNextRace: () => Promise<void>;
}

export const useRacesStore = create<State & Actions>()((set) => ({
  nextRace: null,

  fetchNextRace: async () => {
    try {
      const nextRace = await f1Api.getNextRace();
      set({ nextRace }); // Actualizar el estado con la próxima carrera
    } catch (error) {
      console.error("Error fetching next race:", error);
    }
  },
}));
