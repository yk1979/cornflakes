import { NextPage } from "next";
import React from "react";
import Layout from "../components/Layout";
import Table from "../components/Table";

// mock data
const mock = [
  {
    category: "HTML/CSS",
    questions: [
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
    questions: [
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

const QuestionPage: NextPage = () => (
  <Layout>
    <h1 className="text-2xl font-semibold">スキルチェック</h1>
    <Table
      headers={["category", "description", "check"]}
      data={mock.flatMap((data) =>
        data.questions.map((d) => ({
          category: data.category,
          text: d,
          score: "チェックボックスにしたい",
        }))
      )}
    />
  </Layout>
);

export default QuestionPage;
