import { constructorsInformation } from "@/app/lib/constants";
import type { DriversStandingsAPI, TeamsStandingsAPI } from "@/app/lib/types";
import { useRacesStore } from "@/app/stores/racesStore";
import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, Cell, Tooltip, XAxis, YAxis } from "recharts"; // Asegúrate de importar correctamente
import { Payload } from "recharts/types/component/DefaultTooltipContent";

export default function StandingsChart({ showDrivers }: { showDrivers: boolean }) {
  const [isClient, setIsClient] = useState(false); // Verificar si estamos en el cliente
  const { driversStandings, teamsStandings } = useRacesStore();

  useEffect(() => {
    setIsClient(true); // This executes in Client side only
  }, []);

  const driversStandingsData = useMemo(
    () =>
      driversStandings.map((driver) => ({
        ...driver,
        points: Number(driver.points), // Convert points to number
      })),
    [driversStandings]
  );

  const teamsStandingsData = useMemo(
    () =>
      teamsStandings.map((team) => ({
        ...team,
        points: Number(team.points), // Convert points to number
      })),
    [teamsStandings]
  );

  if (!isClient) {
    return null; // Dont Render chart in SSR because of hidratation problems
  }

  const xAxisLabel = { value: showDrivers ? "Drivers" : "Teams" };
  const yAxisLabel = { value: "Points", angle: -90, position: "insideLeft", offset: 10 };

  return (
    <BarChart width={420} height={420} data={showDrivers ? driversStandingsData : teamsStandingsData} className="hidden md:flex lg:w-[600px] lg:h-[600px]">
      <XAxis label={xAxisLabel} tick={false} />
      <YAxis label={yAxisLabel} />
      <Tooltip content={<CustomTooltip active={true} payload={[]} showDrivers={showDrivers} />} />
      {showDrivers ? DriversChart(driversStandings) : TeamsChart(teamsStandings)}
    </BarChart>
  );
}

function DriversChart(driversStandings: DriversStandingsAPI[]) {
  return (
    <>
      <Bar dataKey="points">
        {driversStandings.map((_, index) => (
          <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
        ))}
      </Bar>
      <defs>
        {driversStandings.map((standing, index) => {
          const colors = constructorsInformation[standing.Constructors?.[standing.Constructors.length - 1].constructorId]?.colors || ["#e10600"];
          return (
            <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
              {colors.map((color, colorIndex) => (
                /* + 1 to avoid 0/0 */
                <stop key={`color-${colorIndex}`} offset={`${((colorIndex + 1) / (colors.length + 1)) * 100}%`} stopColor={color} />
              ))}
            </linearGradient>
          );
        })}
      </defs>
    </>
  );
}

function TeamsChart(teamsStandings: TeamsStandingsAPI[]) {
  return (
    <>
      <Bar dataKey="points">
        {teamsStandings.map((_, index) => (
          <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
        ))}
      </Bar>
      <defs>
        {teamsStandings.map((standing, index) => {
          const colors = constructorsInformation[(standing as TeamsStandingsAPI).Constructor?.constructorId]?.colors || ["#e10600"];

          return (
            <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
              {colors.map((color, colorIndex) => (
                /* + 1 to avoid 0/0 */
                <stop key={`color-${colorIndex}`} offset={`${((colorIndex + 1) / (colors.length + 1)) * 100}%`} stopColor={color} />
              ))}
            </linearGradient>
          );
        })}
      </defs>
    </>
  );
}

interface DriverPayload {
  points: string;
  Driver: {
    givenName: string;
    familyName: string;
  };
  Constructors: [
    {
      name: string;
    }
  ];
}

interface TeamPayload {
  points: string;
  Constructor: {
    name: string;
  };
}

function CustomTooltip({
  active,
  payload,
  showDrivers,
}: {
  active: boolean | undefined;
  payload: Payload<number, string>[] | undefined;
  showDrivers: boolean;
}) {
  if (active && payload && payload.length) {
    let name = "";
    let team = "";
    let points = "";

    if (showDrivers) {
      const data = payload[0].payload as DriverPayload;

      name = data.Driver.givenName + " " + data.Driver.familyName;
      team = data.Constructors[data.Constructors.length - 1].name;
      points = data.points;
    } else {
      const data = payload[0].payload as TeamPayload;

      name = data.Constructor.name;
      points = data.points;
    }

    return (
      <div className="custom-tooltip bg-white p-2 shadow-md rounded">
        <p className="label font-bold">{`${name}`}</p>
        {team && <p className="intro">{`${team}`}</p>}
        <p className="desc">{`Points: ${points}`}</p>
      </div>
    );
  }
  return null;
}
