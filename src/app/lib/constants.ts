import { CircuitId, TeamName } from "./types";

export const totalRaces = 24;

export const teamColors: { [key in TeamName]: string[] } = {
  "Red Bull Racing": ["#0600EF", "#FF0000"],
  Mercedes: ["#00D2BE"],
  Ferrari: ["#DC0000"],
  McLaren: ["#FF8700"],
  "Aston Martin": ["#006F62"],
  Alpine: ["#0090FF"],
  AlphaTauri: ["#2B4562"],
  "Alfa Romeo": ["#900000"],
  "Haas F1 Team": ["#FF0000", "#FFFFFF"],
  Williams: ["#005AFF"],
};

export const yearImage = "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/year%20icon/2024.png";

export const circuitsImages: { [key in CircuitId]: { banner: string; circuit: string; flag: string; laps: number; circuitLength: number } } = {
  albert_park: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Australia",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_771/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/australia-flag",
    laps: 58,
    circuitLength: 5.278,
  },
  americas: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/USA",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-states-of-america-flag",
    laps: 56,
    circuitLength: 5.513,
  },
  bahrain: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Bahrain",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag",
    laps: 57,
    circuitLength: 5.412,
  },
  baku: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Azerbaijan",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/azerbaijan-flag",
    laps: 51,
    circuitLength: 6.003,
  },
  catalunya: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Spain",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/spain-flag",
    laps: 66,
    circuitLength: 4.657,
  },
  hungaroring: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Hungary",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/hungary-flag",
    laps: 70,
    circuitLength: 4.381,
  },
  imola: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Emilia%20Romagna",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag",
    laps: 63,
    circuitLength: 4.909,
  },
  interlagos: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Brazil",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/brazil-flag",
    laps: 71,
    circuitLength: 4.309,
  },
  jeddah: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Saudi_Arabia",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/saudi-arabia-flag",
    laps: 50,
    circuitLength: 6.174,
  },
  losail: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Qatar",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/qatar-flag",
    laps: 57,
    circuitLength: 5.419,
  },
  marina_bay: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Singapore",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/singapore-flag",
    laps: 62,
    circuitLength: 4.94,
  },
  miami: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Miami",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-states-of-america-flag",
    laps: 57,
    circuitLength: 5.412,
  },
  monaco: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Monaco",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/monaco-flag",
    laps: 78,
    circuitLength: 3.337,
  },
  monza: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Italy",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag",
    laps: 53,
    circuitLength: 5.793,
  },
  red_bull_ring: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Austria",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/austria-flag",
    laps: 71,
    circuitLength: 4.318,
  },
  rodriguez: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Mexico",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/mexico-flag",
    laps: 71,
    circuitLength: 4.304,
  },
  shanghai: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/China",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/china-flag",
    laps: 56,
    circuitLength: 5.451,
  },
  silverstone: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Great%20Britain",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-kingdom-flag",
    laps: 52,
    circuitLength: 5.891,
  },
  spa: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Belgium",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/belgium-flag",
    laps: 44,
    circuitLength: 7.004,
  },
  suzuka: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Japan",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/japan-flag",
    laps: 53,
    circuitLength: 5.807,
  },
  vegas: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Las%20Vegas",
    circuit: "https://www.formula1.com/en/racing/2024/las-vegas/circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-states-of-america-flag",
    laps: 50,
    circuitLength: 6.201,
  },
  villeneuve: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Canada",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/canada-flag",
    laps: 70,
    circuitLength: 4.361,
  },
  yas_marina: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Abu%20Dhabi",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-arab-emirates-flag",
    laps: 58,
    circuitLength: 5.281,
  },
  zandvoort: {
    banner:
      "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Netherlands",
    circuit:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit",
    flag: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/netherlands-flag",
    laps: 72,
    circuitLength: 4.259,
  },
};

export const watch = {
  base: "https://www.formula1.com/assets/racing/_next/static/media/face.d0a95198.svg",
  seconds: "https://www.formula1.com/assets/racing/_next/static/media/seconds.ee938cd7.svg",
  minutes: "https://www.formula1.com/assets/racing/_next/static/media/minutes.15643f3a.svg",
  hours: "https://www.formula1.com/assets/racing/_next/static/media/hours.fed8770d.svg",
};
