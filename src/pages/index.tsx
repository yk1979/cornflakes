import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { User } from "@/agreed/types";
import { Graph } from "@/src/components/Graph";
import Layout from "@/src/components/Layout";
import Table from "@/src/components/Table";
import TableItem from "@/src/components/Table/TableItem";

type Props = {
  user: User;
};

const IndexPage: NextPage<Props> = ({ user }) => (
  <Layout>
    <h1 className="text-2xl font-semibold">つよさをみる（{user.name}）</h1>
    <Graph
      className="mt-6"
      data={user.skills.map((skill) => ({
        label: skill.label,
        score: skill.summary,
      }))}
    />
    <Table headers={["category", "description", "your score"]}>
      {user.skills.flatMap((skill) =>
        skill.contents.map(({ id, text, score }) => (
          <tr key={id}>
            <TableItem className="px-6 py-4 whitespace-nowrap">
              {skill.label}
            </TableItem>
            <TableItem className="px-6 py-4 whitespace-nowrap">
              {text}
            </TableItem>
            <TableItem className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {score}
            </TableItem>
          </tr>
        ))
      )}
    </Table>
  </Layout>
);

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  // TODO fix
  const API_ENDPOINT = "http://localhost:3010";
  const response = await axios.get<User>(`${API_ENDPOINT}/pchan`);
  const user = response.data;

  // TODO エラー処理追加

  return {
    props: {
      user,
    },
  };
};
