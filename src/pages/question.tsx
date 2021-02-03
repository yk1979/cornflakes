import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useReducer, useState } from "react";
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

  const initialScores = data.map((d) => ({
    category: d.category,
    score: d.text.map(() => 0),
  }));
  const reducer: React.Reducer<
    {
      category: string;
      score: number[];
    }[],
    { payload: number[] }
  > = (state, action) => {
    const [targetCategoryIndex, targetTextIndex] = action.payload;
    const nextState = [...state];
    // ターゲットのスコアは0か1のみなので、現在のスコア-1の絶対値は必ず現在のスコアの反転になる
    nextState[targetCategoryIndex].score[targetTextIndex] = Math.abs(
      nextState[targetCategoryIndex].score[targetTextIndex] - 1
    );
    return nextState;
  };
  const [state, dispatch] = useReducer(reducer, initialScores);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = e.target.id.split("-").map((t) => Number(t));
    dispatch({ payload });
  };

  const handleChangeQuestions = (n: 1 | -1) => {
    // TODO ブラウザの戻る/進むイベントを検知していい感じにしたい（下の処理じゃダメだった）
    // if (n > 0) {
    //   window.history.pushState(null, String(dataIndex + n), "/question");
    // } else {
    //   window.history.back();
    // }
    setDataIndex(dataIndex + n);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO 中身の実装
    router.push("/user/p-chan");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-semibold">スキルチェック</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Table headers={["category", "description", "check"]}>
          {currentData.text.map((item, i) => (
            <tr key={i}>
              <TableItem className="px-6 py-4">
                {currentData.category}
              </TableItem>
              <TableItem className="px-6 py-4">{item}</TableItem>
              <TableItem className="text-sm text-gray-500 text-center">
                <label
                  htmlFor={`${dataIndex}-${i}`}
                  className="block p-4 cursor-pointer"
                >
                  <input
                    className="w-5 h-5 rounded cursor-pointer focus:ring-0"
                    type="checkbox"
                    id={`${dataIndex}-${i}`}
                    checked={state[dataIndex].score[i] === 1}
                    onChange={handleInputChange}
                  />
                </label>
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
