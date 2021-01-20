import axios from "axios";
import React from "react";
import { Graph } from "../components/Graph";

type Props = {
  name: string;
  data: React.ComponentProps<typeof Graph>["data"];
};

const IndexPage: React.FC<Props> = ({ name, data }: Props) => (
  <div>
    <h1>つよさをみる（{name}）</h1>
    <Graph data={data} />
  </div>
);

export default IndexPage;

export const getServerSideProps = async () => {
  // TODO fix
  const API_ENDPOINT = "http://localhost:3010";
  const response = await axios.get(`${API_ENDPOINT}/pchan`);
  const graphData = response.data;

  // TODO エラー処理追加

  // TODO: モック箇所を修正する
  const data = {
    labels: Object.keys(graphData.skills),
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
        data: Object.values(graphData.skills).map((item: any) => item.summary),
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
