import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { Graph } from "../../components/Graph";
import Layout from "../../components/Layout";

type Props = {
  graphData: React.ComponentProps<typeof Graph>["data"];
};

const UserPage: NextPage<Props> = ({ graphData }) => (
  <Layout>
    <h1 className="text-2xl font-semibold">てすと</h1>
    <Graph className="mt-6" data={graphData} />
  </Layout>
);

export default UserPage;

export const getServerSideProps: GetServerSideProps = async () => {
  // TODO セッションストレージの中身かreduxのstore dataを接続する
  return {
    props: {
      graphData: [],
    },
  };
};
