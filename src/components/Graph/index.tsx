import { Radar } from "react-chartjs-2";
import React from "react";

type Props = {
  className?: string;
  data: React.ComponentProps<typeof Radar>["data"];
};

export const Graph: React.FC<Props> = ({ className, data }) => (
  <div className={className}>
    <Radar
      data={data}
      options={{
        scale: { pointLabels: { fontSize: 16 } },
        legend: { labels: { fontSize: 16 } },
      }}
    />
  </div>
);
