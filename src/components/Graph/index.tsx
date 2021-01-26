import { Radar } from "react-chartjs-2";
import React from "react";

type Props = {
  className?: string;
  data: {
    label: string;
    score: number;
  }[];
};

export const Graph: React.FC<Props> = ({ className, data }) => (
  <div className={className}>
    <Radar
      data={{
        labels: data.map(({ label }) => label),
        datasets: [
          {
            label: "いまのつよさ",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
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
