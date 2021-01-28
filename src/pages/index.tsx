import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { SkillData } from "../../agreed/types";
import { Graph } from "../components/Graph";
import Layout from "../components/Layout";
import Table from "../components/Table";

type Props = {
  name: string;
  graphData: React.ComponentProps<typeof Graph>["data"];
  tableData: React.ComponentProps<typeof Table>["data"];
};

const IndexPage: NextPage<Props> = ({ name, graphData, tableData }) => (
  <Layout>
    <h1 className="text-2xl font-semibold">つよさをみる（{name}）</h1>
    <Graph className="mt-6" data={graphData} />
    <Table data={tableData} />
  </Layout>
);

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  // TODO fix
  const API_ENDPOINT = "http://localhost:3010";
  const response = await axios.get<SkillData>(`${API_ENDPOINT}/pchan`);
  const data = response.data;

  // TODO エラー処理追加

  const graphData = data.skills.map((skill) => ({
    label: skill.category,
    score: skill.summary,
  }));

  const tableData = data.skills.flatMap((skill) =>
    skill.detail.map(({ text, score }) => ({
      category: skill.category,
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
