export type oldDriver = {
  id: number;
  name: string;
  "short-name": string;
  team: TeamId;
  points: number;
};

export type Team = {
  id: number;
  name: TeamId;
  points: number;
};

export type TeamId = "red_bull" | "mercedes" | "ferrari" | "mclaren" | "aston_martin" | "alpine" | "rb" | "sauber" | "haas" | "williams";

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
    circuitId: CircuitId;
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

export type CircuitId =
  | "albert_park"
  | "americas"
  | "bahrain"
  | "baku"
  | "catalunya"
  | "hungaroring"
  | "imola"
  | "interlagos"
  | "jeddah"
  | "losail"
  | "marina_bay"
  | "miami"
  | "monaco"
  | "monza"
  | "red_bull_ring"
  | "rodriguez"
  | "shanghai"
  | "silverstone"
  | "spa"
  | "suzuka"
  | "vegas"
  | "villeneuve"
  | "yas_marina"
  | "zandvoort";

export type DriversStandingsAPI = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
  };
  Constructors: [
    {
      constructorId: TeamId;
      url: string;
      name: TeamId;
      nationality: string;
    }
  ];
};

export type TeamsStandingsAPI = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: {
    constructorId: TeamId;
    url: string;
    name: string;
    nationality: string;
  };
};
