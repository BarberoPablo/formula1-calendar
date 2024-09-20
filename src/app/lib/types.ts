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
  session_type: "Race" | "Qualifying" | "Practice";
  year: number;
};

export type Race = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: {
      lat: string;
      long: string;
      locality: string;
      country: string;
    };
  };
  date: string;
  time: string;
  FirstPractice: {
    date: string;
    time: string;
  };
  SecondPractice: {
    date: string;
    time: string;
  };
  ThirdPractice?: {
    date: string;
    time: string;
  };
  Qualifying?: {
    date: string;
    time: string;
  };
  Sprint?: {
    date: string;
    time: string;
  };
};
