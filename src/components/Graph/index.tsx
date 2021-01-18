import { Radar } from "react-chartjs-2";
import React from "react";

// TODO: モックデータなので差し替える
const data = {
  labels: ["HTML", "CSS", "JavaScript", "TypeScript", "ServerSide", "Design"],
  datasets: [
    {
      label: "さいしょのつよさ",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [20, 15, 20, 10, 40, 20],
    },
    {
      label: "いまのつよさ",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: [50, 60, 80, 60, 90, 70],
    },
  ],
};

export const Graph: React.FC = () => (
  <Radar
    data={data}
    options={{
      scale: { pointLabels: { fontSize: 16 } },
      legend: { labels: { fontSize: 16 } },
    }}
  />
);
