import { Radar } from "react-chartjs-2";
import React from "react";
import { rgba } from "polished";

type Props = {
  className?: string;
  data: {
    label: string;
    score: number;
  }[];
};

// TODO tailwind のカラーパレットを定数として利用できないか？
const orange = "#F59E0B"; // colors.amber["500"]

export const Graph: React.FC<Props> = ({ className, data }) => (
  <div className={className}>
    <Radar
      data={{
        labels: data.map(({ label }) => label),
        datasets: [
          {
            label: "いまのつよさ",
            backgroundColor: rgba(orange, 0.2),
            borderColor: orange,
            pointBackgroundColor: orange,
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: orange,
            data: data.map(({ score }) => score),
          },
        ],
      }}
      options={{
        scale: {
          pointLabels: { fontSize: 14 },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
        legend: { labels: { fontSize: 14 } },
      }}
    />
  </div>
);
