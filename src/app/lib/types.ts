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
  "short-name": string;
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

export type Session = {
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  date_end: string;
  date_start: string;
  gmt_offset: string;
  location: string;
  meeting_key: number;
  session_key: number;
  session_name: string;
  session_type: string;
  year: number;
};
