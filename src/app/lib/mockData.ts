//ALL THIS INFO IS FROM 2023, I REPLACED THE STRING 2023 WITH 2024

import { Driver, Race, Team } from "./types";

export const races: Race[] = [
  { id: 1, name: "Bahrain Grand Prix", date: "2024-03-05", circuit: "Bahrain International Circuit" },
  { id: 2, name: "Saudi Arabian Grand Prix", date: "2024-03-19", circuit: "Jeddah Corniche Circuit" },
  { id: 3, name: "Australian Grand Prix", date: "2024-04-02", circuit: "Albert Park Circuit" },
  { id: 4, name: "Azerbaijan Grand Prix", date: "2024-04-30", circuit: "Baku City Circuit" },
  { id: 5, name: "Miami Grand Prix", date: "2024-05-07", circuit: "Miami International Autodrome" },
  { id: 6, name: "Emilia Romagna Grand Prix", date: "2024-05-21", circuit: "Imola", status: "Canceled" },
  { id: 7, name: "Monaco Grand Prix", date: "2024-05-28", circuit: "Circuit de Monaco" },
  { id: 8, name: "Spanish Grand Prix", date: "2024-06-04", circuit: "Circuit de Barcelona-Catalunya" },
  { id: 9, name: "Canadian Grand Prix", date: "2024-06-18", circuit: "Circuit Gilles Villeneuve" },
  { id: 10, name: "Austrian Grand Prix", date: "2024-07-02", circuit: "Red Bull Ring" },
  { id: 11, name: "British Grand Prix", date: "2024-07-09", circuit: "Silverstone Circuit" },
  { id: 12, name: "Hungarian Grand Prix", date: "2024-07-23", circuit: "Hungaroring" },
  { id: 13, name: "Belgian Grand Prix", date: "2024-07-30", circuit: "Circuit de Spa-Francorchamps" },
  { id: 14, name: "Dutch Grand Prix", date: "2024-08-27", circuit: "Circuit Zandvoort" },
  { id: 15, name: "Italian Grand Prix", date: "2024-09-03", circuit: "Monza" },
  { id: 16, name: "Singapore Grand Prix", date: "2024-09-17", circuit: "Marina Bay Street Circuit" },
  { id: 17, name: "Japanese Grand Prix", date: "2024-09-24", circuit: "Suzuka International Racing Course" },
  { id: 18, name: "Qatar Grand Prix", date: "2024-10-08", circuit: "Losail International Circuit" },
  { id: 19, name: "United States Grand Prix", date: "2024-10-22", circuit: "Circuit of the Americas" },
  { id: 20, name: "Mexico City Grand Prix", date: "2024-10-29", circuit: "Autodromo Hermanos Rodriguez" },
  { id: 21, name: "São Paulo Grand Prix", date: "2024-11-05", circuit: "Interlagos Circuit" },
  { id: 22, name: "Las Vegas Grand Prix", date: "2024-11-18", circuit: "Las Vegas Street Circuit" },
  { id: 23, name: "Abu Dhabi Grand Prix", date: "2024-11-26", circuit: "Yas Marina Circuit" },
];

export const drivers: Driver[] = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing", points: 454 },
  { id: 2, name: "Sergio Perez", team: "Red Bull Racing", points: 305 },
  { id: 3, name: "Lewis Hamilton", team: "Mercedes", points: 226 },
  { id: 4, name: "Fernando Alonso", team: "Aston Martin", points: 200 },
  { id: 5, name: "Carlos Sainz", team: "Ferrari", points: 200 },
  { id: 6, name: "Charles Leclerc", team: "Ferrari", points: 188 },
  { id: 7, name: "Lando Norris", team: "McLaren", points: 170 },
  { id: 8, name: "George Russell", team: "Mercedes", points: 170 },
  { id: 9, name: "Oscar Piastri", team: "McLaren", points: 96 },
  { id: 10, name: "Lance Stroll", team: "Aston Martin", points: 74 },
  { id: 11, name: "Pierre Gasly", team: "Alpine", points: 62 },
  { id: 12, name: "Esteban Ocon", team: "Alpine", points: 58 },
  { id: 13, name: "Alexander Albon", team: "Williams", points: 27 },
  { id: 14, name: "Nico Hulkenberg", team: "Haas F1 Team", points: 9 },
  { id: 15, name: "Valtteri Bottas", team: "Alfa Romeo", points: 6 },
  { id: 16, name: "Zhou Guanyu", team: "Alfa Romeo", points: 6 },
  { id: 17, name: "Yuki Tsunoda", team: "AlphaTauri", points: 3 },
  { id: 18, name: "Kevin Magnussen", team: "Haas F1 Team", points: 3 },
  { id: 19, name: "Liam Lawson", team: "AlphaTauri", points: 2 },
  { id: 20, name: "Logan Sargeant", team: "Williams", points: 0 },
  { id: 21, name: "Daniel Ricciardo", team: "AlphaTauri", points: 0 },
  { id: 22, name: "Nyck de Vries", team: "AlphaTauri", points: 0 },
];

export const teams: Team[] = [
  { id: 1, name: "Red Bull Racing", points: 759 },
  { id: 2, name: "Mercedes", points: 431 },
  { id: 3, name: "Ferrari", points: 406 },
  { id: 4, name: "Aston Martin", points: 274 },
  { id: 5, name: "McLaren", points: 266 },
  { id: 6, name: "Alpine", points: 103 },
  { id: 7, name: "Williams", points: 28 },
  { id: 8, name: "Alfa Romeo", points: 16 },
  { id: 9, name: "Haas F1 Team", points: 12 },
  { id: 10, name: "AlphaTauri", points: 10 },
];
