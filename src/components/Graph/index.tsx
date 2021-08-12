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
        responsive: true,
        scales: {
          // chart.js v3 から scale option がなくなり scale.r が推奨になった
          // scale option was removed in favor of options.scales.r (or any other scale id, with axis: 'r')
          // https://www.chartjs.org/docs/latest/getting-started/v3-migration.html
          // @ts-expect-error 2021年8月現在 @types が古くて対応していないみたい？
          r: {
            pointLabels: {
              font: {
                size: 14,
              },
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
        plugins: {
          legend: {
            labels: { font: { size: 15 } },
          },
        },
      }}
    />
  </div>
);
