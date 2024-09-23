"use client";

import { useEffect } from "react";
import { DriversStandingsAPI, Race, TeamsStandingsAPI } from "../lib/types";
import { useRacesStore } from "../stores/racesStore";

// This component will not render anything, its purpose is to update the store
export default function UpdateRaceStore({
  nextRace,
  allRaces,
  driversStandings,
  teamsStandings,
}: {
  nextRace: Race | null;
  allRaces: Race[];
  driversStandings: DriversStandingsAPI[];
  teamsStandings: TeamsStandingsAPI[];
}) {
  const { setNextRace, setAllRaces, setDriversStandings, setTeamsStandings } = useRacesStore();

  useEffect(() => {
    if (nextRace) {
      setNextRace(nextRace);
    }
  }, [nextRace, setNextRace]);

  useEffect(() => {
    if (allRaces) {
      setAllRaces(allRaces);
    }
  }, [allRaces, setAllRaces]);

  useEffect(() => {
    if (driversStandings) {
      setDriversStandings(driversStandings);
    }
  }, [driversStandings, setDriversStandings]);

  useEffect(() => {
    if (teamsStandings) {
      setTeamsStandings(teamsStandings);
    }
  }, [teamsStandings, setTeamsStandings]);

  return null;
}
