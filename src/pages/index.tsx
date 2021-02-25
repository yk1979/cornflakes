import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { SkillData } from "@/agreed/types";
import { Graph } from "@/src/components/Graph";
import Layout from "@/src/components/Layout";
import Table from "@/src/components/Table";
import TableItem from "@/src/components/Table/TableItem";

type Props = {
  name: string;
  graphData: React.ComponentProps<typeof Graph>["data"];
  tableData: {
    category: string;
    text: string;
    score: 0 | 1;
  }[];
};

const IndexPage: NextPage<Props> = ({ name, graphData, tableData }) => (
  <Layout>
    <h1 className="text-2xl font-semibold">つよさをみる（{name}）</h1>
    <Graph className="mt-6" data={graphData} />
    <Table headers={["category", "description", "your score"]}>
      {tableData.map((d, i) => (
        <tr key={i}>
          <TableItem className="px-6 py-4 whitespace-nowrap">
            {d.category}
          </TableItem>
          <TableItem className="px-6 py-4 whitespace-nowrap">
            {d.text}
          </TableItem>
          <TableItem className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {d.score}
          </TableItem>
        </tr>
      ))}
    </Table>
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

  // TODO APIの戻り値を考え直した方がいいかも？
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
