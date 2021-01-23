import axios from "axios";
import React from "react";
import { SkillData } from "../../agreed/types";
import { Graph } from "../components/Graph";
import Table from "../components/Table";

type Props = {
  name: string;
  graphData: React.ComponentProps<typeof Graph>["data"];
  tableData: React.ComponentProps<typeof Table>["data"];
};

const IndexPage: React.FC<Props> = ({ name, graphData, tableData }: Props) => (
  <div>
    <h1>つよさをみる（{name}）</h1>
    <Graph data={graphData} />
    <Table data={tableData} />
  </div>
);

export default IndexPage;

export const getServerSideProps = async () => {
  // TODO fix
  const API_ENDPOINT = "http://localhost:3010";
  const response = await axios.get<SkillData>(`${API_ENDPOINT}/pchan`);
  const data = response.data;

  // TODO エラー処理追加

  // TODO: モック箇所を修正する
  const graphData = {
    labels: data.skills.map(({ key }) => key),
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
        data: data.skills.map(({ summary }) => summary),
      },
    ],
  };

  const tableData = data.skills.flatMap((skill) =>
    skill.detail.map(({ text, score }) => ({
      category: skill.key,
      text,
      score,
    }))
  );

  return {
    props: {
      name: data.name,
      graphData,
      tableData,
    },
  };
};
