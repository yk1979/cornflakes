import axios from "axios";
import React from "react";
import { GraphData } from "../../agreed/types";
import { Graph } from "../components/Graph";
import Table from "../components/Table";

type Props = {
  name: string;
  data: React.ComponentProps<typeof Graph>["data"];
};

// mock data
const tableData = [
  {
    category: "HTML/CSS",
    text: "規約に従ってデザインデータを正しく再現できる",
    score: 1 as const,
  },
  {
    category: "HTML/CSS",
    text: "コーディング規約を作ることができる",
    score: 1 as const,
  },
  {
    category: "JS/TS",
    text: "Object や Array を活用してデータを表現したり操作できる",
    score: 1 as const,
  },
];

const IndexPage: React.FC<Props> = ({ name, data }: Props) => (
  <div>
    <h1>つよさをみる（{name}）</h1>
    <Graph data={data} />
    <Table data={tableData} />
  </div>
);

export default IndexPage;

export const getServerSideProps = async () => {
  // TODO fix
  const API_ENDPOINT = "http://localhost:3010";
  const response = await axios.get<GraphData>(`${API_ENDPOINT}/pchan`);
  const graphData = response.data;

  // TODO エラー処理追加

  // TODO: モック箇所を修正する
  const data = {
    labels: graphData.skills.map(({ key }) => key),
    datasets: [
      {
        label: "さいしょのつよさ",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: [100, 70, 55, 67, 67, 25, 100, 20, 20, 60],
      },
      {
        label: "いまのつよさ",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: graphData.skills.map(({ summary }) => summary),
      },
    ],
  };

  return {
    props: {
      name: graphData.name,
      data,
    },
  };
};
