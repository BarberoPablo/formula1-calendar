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

type Driver = {
  driverId: DriverId;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
};

type Constructor = {
  constructorId: TeamId;
  url: string;
  name: TeamId;
  nationality: string;
};

export type DriversStandingsAPI = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
};

export type TeamsStandingsAPI = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
};

export type RaceResultAPI = {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time: {
    millis: string;
    time: string;
  };
  FastestLap: {
    rank: string;
    lap: string;
    Time: {
      time: string;
    };
    AverageSpeed: {
      units: string;
      speed: string;
    };
  };
};

export type TeamId = "red_bull" | "mercedes" | "ferrari" | "mclaren" | "aston_martin" | "alpine" | "rb" | "sauber" | "haas" | "williams";

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

export type DriverId =
  | "norris"
  | "piastri"
  | "max_verstappen"
  | "perez"
  | "russell"
  | "hamilton"
  | "leclerc"
  | "sainz"
  | "alonso"
  | "stroll"
  | "hulkenberg"
  | "kevin_magnussen"
  | "colapinto"
  | "albon"
  | "tsunoda"
  | "ricciardo"
  | "ocon"
  | "gasly"
  | "zhou"
  | "bottas";
