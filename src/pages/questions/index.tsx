import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useReducer, useState } from "react";
import Button from "@/src/components/Button";
import Layout from "@/src/components/Layout";
import Table from "@/src/components/Table";
import TableItem from "@/src/components/Table/TableItem";
import { scoreReducer } from "@/src/reducers/scoreReducer";
import { Questions } from "@/agreed/types";

type Props = {
  questions: Questions;
};

const QuestionPage: NextPage<Props> = ({ questions }) => {
  const router = useRouter();

  const [qIndex, setQIndex] = useState(0);
  const currentQBlock = questions[qIndex];

  const initialScores = questions.flatMap((q) =>
    q.contents.map((c) => ({
      id: c.id,
      score: 0,
    }))
  );
  const [state, dispatch] = useReducer(scoreReducer, initialScores);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = { id: e.target.id, score: e.target.checked ? 1 : 0 };
    dispatch({ payload });
  };

  const handleChangeQuestions = (type: "prev" | "next") => {
    const n = type === "prev" ? -1 : 1;
    // TODO ブラウザの戻る/進むイベントを検知していい感じにしたい（下の処理じゃダメだった）
    // if (n > 0) {
    //   window.history.pushState(null, String(dataIndex + n), "/question");
    // } else {
    //   window.history.back();
    // }
    setQIndex(qIndex + n);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO 中身の実装
    router.push("/");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-semibold">スキルチェック</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Table headers={["category", "description", "check"]}>
          {currentQBlock.contents.map(({ id, text }, i) => (
            <tr key={i}>
              <TableItem className="px-6 py-4">{currentQBlock.label}</TableItem>
              <TableItem className="px-6 py-4">{text}</TableItem>
              <TableItem className="text-sm text-gray-500 text-center">
                <label htmlFor={id} className="block p-4 cursor-pointer">
                  <input
                    className="w-5 h-5 rounded cursor-pointer focus:ring-0"
                    type="checkbox"
                    id={id}
                    checked={state.find((item) => item.id === id)?.score === 1}
                    onChange={handleInputChange}
                  />
                </label>
              </TableItem>
            </tr>
          ))}
        </Table>
        {qIndex < questions.length - 1 && (
          <Button
            theme="primary"
            type="button"
            onClick={() => handleChangeQuestions("next")}
          >
            次へ
          </Button>
        )}
        {qIndex !== 0 && (
          <Button
            theme="sub"
            type="button"
            onClick={() => handleChangeQuestions("prev")}
          >
            戻る
          </Button>
        )}
        {qIndex + 1 === questions.length && (
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
  // TODO fix
  const API_ENDPOINT = "http://localhost:3010";
  const response = await axios.get<Questions>(`${API_ENDPOINT}/entries/`);
  const questions = response.data;

  return {
    props: {
      questions,
    },
  };
};
