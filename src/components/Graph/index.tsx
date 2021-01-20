import { Radar } from "react-chartjs-2";
import React from "react";

type Props = {
  data: React.ComponentProps<typeof Radar>["data"];
};

export const Graph: React.FC<Props> = ({ data }: Props) => (
  <Radar
    data={data}
    options={{
      scale: { pointLabels: { fontSize: 16 } },
      legend: { labels: { fontSize: 16 } },
    }}
  />
);
