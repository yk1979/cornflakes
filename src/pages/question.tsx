import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import TableItem from "../components/Table/TableItem";

type Props = {
  // TODO 仮置きなのでもうちょっと考える
  data: {
    category: string;
    text: string[];
  }[];
};

const QuestionPage: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const [dataIndex, setDataIndex] = useState(0);
  const currentData = data[dataIndex];

  // TODO ブラウザの戻る/進むイベントを検知していい感じにしたい
  const handleChangeQuestions = (n: 1 | -1) => {
    if (n > 0) {
      window.history.pushState(null, String(dataIndex + n), "/question");
    } else {
      window.history.back();
    }
    setDataIndex(dataIndex + n);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/user/p-chan");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-semibold">スキルチェック</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Table headers={["category", "description", "check"]}>
          {currentData.text.map((item, i) => (
            <tr key={i}>
              <TableItem className="px-6 py-4 whitespace-nowrap">
                {currentData.category}
              </TableItem>
              <TableItem className="px-6 py-4 whitespace-nowrap">
                {item}
              </TableItem>
              <TableItem className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {/* TODO スタイル調整 */}
                <input type="checkbox" />
              </TableItem>
            </tr>
          ))}
        </Table>
        {dataIndex < data.length - 1 && (
          <Button
            theme="primary"
            type="button"
            onClick={() => handleChangeQuestions(1)}
          >
            次へ
          </Button>
        )}
        {dataIndex !== 0 && (
          <Button
            theme="sub"
            type="button"
            onClick={() => handleChangeQuestions(-1)}
          >
            戻る
          </Button>
        )}
        {dataIndex + 1 === data.length && (
          <Button theme="primary" type="submit">
            送信
          </Button>
        )}
      </form>
    </Layout>
  );
};

export default QuestionPage;

export const getServerSideProps: GetServerSideProps = async () => {
  // mock data
  const mock = [
    {
      category: "HTML/CSS",
      text: [
        "規約に従ってデザインデータを正しく再現できる",
        "コーディング規約を作ることができる",
        "Lighthouseの結果を見て適切にマークアップの問題点を改善できる",
        "DOM王（※必要最低限のDOMでデザイン通りのマークアップができる人）になれる",
        "レスポンシブなマークアップができる",
        "クロスブラウザ対応ができる",
      ],
    },
    {
      category: "JS/TS",
      text: [
        "Object や Array を活用してデータを表現したり操作できる",
        "String.prototype.includes Array.prototype.reduce RegExp.prototype.test などの基本的なメソッドを使える",
        "tc39 proposal で ディスカッションされている実験的なシンタックスがあることをしっている",
        "document.querySelector や document.createElement など DOM に関する関数を使える",
        "devtools を活用して 時間のかかっている関数 や 呼び出し頻度の高い関数を見つけることができる",
        ".tsconfigの内容を理解し、自分で書くことができる",
        "strict modeでTypeScriptが書ける",
        "TypeScript で 外部ライブラリに型を付けることができる",
        "外部ライブラリを用いたTypeScriptが書ける（ex. ReactやStyled Components等を組み合わせて使えるか）",
        "service workerを使ってオフラインでもキャッシュを用いてページをユーザーに見せることができる",
      ],
    },
  ];

  return {
    props: {
      data: mock,
    },
  };
};
