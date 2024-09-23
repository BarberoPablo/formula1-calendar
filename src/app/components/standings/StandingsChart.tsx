import { teamColors } from "@/app/lib/constants";
import { Driver, Team } from "@/app/lib/types";
import { useEffect, useState } from "react";
import type { TooltipProps } from "recharts";
import { Bar, BarChart, Cell, Tooltip, XAxis, YAxis } from "recharts"; // Asegúrate de importar correctamente

export default function StandingsChart({ data }: { data: Driver[] | Team[] }) {
  const [isClient, setIsClient] = useState(false); // Verificar si estamos en el cliente

  useEffect(() => {
    setIsClient(true); // This executes in Client side only
  }, []);

  if (!isClient) {
    return null; // Dont Render graphic in SSR because of hidratation problems
  }

  const xAxisLabel = { value: (data[0] as Driver).team ? "Drivers" : "Teams" };
  const yAxisLabel = { value: "Points", angle: -90, position: "insideLeft", offset: 10 };

  return (
    <BarChart width={420} height={420} data={data} className="hidden md:flex lg:w-[600px] lg:h-[600px]">
      <XAxis label={xAxisLabel} tick={false} />
      <YAxis label={yAxisLabel} />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="points">
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
        ))}
      </Bar>
      <defs>
        {data.map((entry: Driver | Team, index) => {
          const colors = teamColors[(entry as Driver).team] || teamColors[(entry as Team).name] || ["#e10600"];
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
    </BarChart>
  );
}

interface CustomPayload {
  name: string;
  points: number;
  team?: string;
}

function CustomTooltip({ active, payload }: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    const data = payload[0].payload as CustomPayload;
    const { name, points, team } = data;

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
