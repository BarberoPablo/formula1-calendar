//ALL THIS INFO IS FROM 2023, I REPLACED THE STRING 2023 WITH 2024

import { Driver, Team } from "./types";

export const drivers: Driver[] = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing", points: 454, "short-name": "VER" },
  { id: 2, name: "Sergio Perez", team: "Red Bull Racing", points: 305, "short-name": "PER" },
  { id: 3, name: "Lewis Hamilton", team: "Mercedes", points: 226, "short-name": "HAM" },
  { id: 4, name: "Fernando Alonso", team: "Aston Martin", points: 200, "short-name": "ALO" },
  { id: 5, name: "Carlos Sainz", team: "Ferrari", points: 200, "short-name": "SAI" },
  { id: 6, name: "Charles Leclerc", team: "Ferrari", points: 188, "short-name": "LEC" },
  { id: 7, name: "Lando Norris", team: "McLaren", points: 170, "short-name": "NOR" },
  { id: 8, name: "George Russell", team: "Mercedes", points: 170, "short-name": "RUS" },
  { id: 9, name: "Oscar Piastri", team: "McLaren", points: 96, "short-name": "PIA" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin", points: 74, "short-name": "STR" },
  { id: 11, name: "Pierre Gasly", team: "Alpine", points: 62, "short-name": "GAS" },
  { id: 12, name: "Esteban Ocon", team: "Alpine", points: 58, "short-name": "OCO" },
  { id: 13, name: "Alexander Albon", team: "Williams", points: 27, "short-name": "ALB" },
  { id: 14, name: "Nico Hulkenberg", team: "Haas F1 Team", points: 9, "short-name": "HUL" },
  { id: 15, name: "Valtteri Bottas", team: "Alfa Romeo", points: 6, "short-name": "BOT" },
  { id: 16, name: "Zhou Guanyu", team: "Alfa Romeo", points: 6, "short-name": "ZHO" },
  { id: 17, name: "Yuki Tsunoda", team: "AlphaTauri", points: 3, "short-name": "TSU" },
  { id: 18, name: "Kevin Magnussen", team: "Haas F1 Team", points: 3, "short-name": "MAG" },
  { id: 19, name: "Liam Lawson", team: "AlphaTauri", points: 2, "short-name": "LAW" },
  { id: 20, name: "Logan Sargeant", team: "Williams", points: 0, "short-name": "SAR" },
  { id: 21, name: "Daniel Ricciardo", team: "AlphaTauri", points: 0, "short-name": "RIC" },
  { id: 22, name: "Nyck de Vries", team: "AlphaTauri", points: 0, "short-name": "VRI" },
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
