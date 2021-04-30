import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useReducer, useState } from "react";
import Button from "@/src/components/Button";
import Layout from "@/src/components/Layout";
import Table from "@/src/components/Table";
import TableItem from "@/src/components/Table/TableItem";
import { scoreReducer as reducer } from "@/src/reducers/scoreReducer";
import { Questions } from "@/agreed/types";

type Props = {
  questions: Questions;
};

const QuestionPage: NextPage<Props> = ({ questions }) => {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];
  const initialScores = questions.map((q) => ({
    ...q,
    contents: q.contents.map((c) => ({
      ...c,
      score: 0,
    })),
  }));
  const [score, dispatch] = useReducer(reducer, initialScores);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = {
      labelId: questions[currentIndex].uuid,
      contentsId: e.target.id,
    };
    dispatch({ type: e.target.checked ? "increase" : "decrease", payload });
  };

  const handleChangeQuestions = (type: "prev" | "next") => {
    const n = type === "prev" ? -1 : 1;
    // TODO ブラウザの戻る/進むイベントを検知していい感じにしたい
    setCurrentIndex(currentIndex + n);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO fix
    const res = await fetch("http://localhost:3000/api/sample", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(score),
    }).then((d) => d.json());

    // router.push("/");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-semibold">スキルチェック</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Table headers={["category", "description", "check"]}>
          {currentQuestion.contents.map(({ id, text }) => (
            <tr key={id}>
              <TableItem className="px-6 py-4">
                {currentQuestion.label}
              </TableItem>
              <TableItem className="px-6 py-4">{text}</TableItem>
              <TableItem className="text-sm text-gray-500 text-center">
                <label htmlFor={id} className="block p-4 cursor-pointer">
                  <input
                    className="w-5 h-5 rounded cursor-pointer focus:ring-0"
                    type="checkbox"
                    id={id}
                    // checked={state.find((item) => item.id === id)?.score === 1}
                    onChange={handleInputChange}
                  />
                </label>
              </TableItem>
            </tr>
          ))}
        </Table>
        <div className="flex justify-center gap-8 items-center mt-6 mx-auto">
          {currentIndex !== 0 && (
            <Button
              theme="sub"
              type="button"
              onClick={() => handleChangeQuestions("prev")}
            >
              戻る
            </Button>
          )}
          {currentIndex < questions.length - 1 && (
            <Button
              theme="primary"
              type="button"
              onClick={() => handleChangeQuestions("next")}
            >
              次へ
            </Button>
          )}
          {currentIndex === questions.length - 1 && (
            <Button theme="primary" type="submit">
              送信
            </Button>
          )}
        </div>
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
