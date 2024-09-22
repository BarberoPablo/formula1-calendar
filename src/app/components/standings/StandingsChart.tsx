import { teamColors } from "@/app/lib/constants";
import { Driver, Team } from "@/app/lib/types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts"; // Asegúrate de importar correctamente
import type { TooltipProps } from "recharts";

export default function StandingsChart({ data }: { data: Driver[] | Team[] }) {
  const xAxisDataKey = data.length === 10 ? "name" : "short-name"; // Parámetro predeterminado para XAxis
  const yAxisLabel = { value: "Points", angle: -90, position: "insideLeft", offset: 10 }; // Parámetro predeterminado para YAxis

  return (
    <BarChart width={300} height={300} data={data}>
      <XAxis dataKey={xAxisDataKey} /> {/* Se usa la variable en lugar de defaultProps */}
      <YAxis label={yAxisLabel} /> {/* Se usa la variable en lugar de defaultProps */}
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
                <stop key={`color-${colorIndex}`} offset={`${(colorIndex / (colors.length - 1)) * 100}%`} stopColor={color} />
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
