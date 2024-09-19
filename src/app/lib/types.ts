export type Race = {
  id: number;
  name: string;
  date: string;
  circuit: string;
  status?: string; // Esto es opcional, ya que algunas carreras pueden estar canceladas o tener un estado especial
};

export type Driver = {
  id: number;
  name: string;
  team: TeamName;
  points: number;
};

export type Team = {
  id: number;
  name: TeamName;
  points: number;
};

export type TeamName =
  | "Red Bull Racing"
  | "Mercedes"
  | "Ferrari"
  | "McLaren"
  | "Aston Martin"
  | "Alpine"
  | "AlphaTauri"
  | "Alfa Romeo"
  | "Haas F1 Team"
  | "Williams";
