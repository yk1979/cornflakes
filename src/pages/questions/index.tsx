import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useReducer, useState } from "react";
import Button from "@/src/components/Button";
import Layout from "@/src/components/Layout";
import Table from "@/src/components/Table";
import TableItem from "@/src/components/Table/TableItem";
import { scoreReducer } from "@/src/reducers/scoreReducer";
import { Questions, SkillSummary } from "@/agreed/types";

type Props = {
  questions: Questions;
};

const QuestionPage: NextPage<Props> = ({ questions }) => {
  const router = useRouter();

  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);
  const initialScores = questions.flatMap((q) =>
    q.contents.map((c) => ({
      ...c,
      score: 0,
      label: q.label,
    }))
  );
  const [state, dispatch] = useReducer(scoreReducer, initialScores);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = { id: e.target.id, score: e.target.checked ? 1 : 0 };
    dispatch({ payload });
  };

  const handleChangeQuestions = (type: "prev" | "next") => {
    const n = type === "prev" ? -1 : 1;
    // TODO ブラウザの戻る/進むイベントを検知していい感じにしたい
    setCurrentLabelIndex(currentLabelIndex + n);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const skillSummary: SkillSummary[] = state.reduce<SkillSummary[]>(
      (res, item) => {
        const target = res.findIndex((v) => v.label === item.label);
        if (target < 0) {
          res.push({
            label: item.label,
            summary: item.score,
            contents: [
              {
                id: item.id,
                score: item.score,
                text: item.text,
              },
            ],
          });
          return res;
        }
        res[target].summary += item.score;
        res[target].contents.push({
          id: item.id,
          score: item.score,
          text: item.text,
        });
        return res;
      },
      []
    );

    // TODO fix
    await fetch("http://localhost:3000/api/sample", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(skillSummary),
    });

    // router.push("/");
  };

  const labels = questions.map(({ label }) => label);
  const contents = state.filter(
    (item) => item.label === labels[currentLabelIndex]
  );

  return (
    <Layout>
      <h1 className="text-2xl font-semibold">スキルチェック</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Table headers={["category", "description", "check"]}>
          {contents.map(({ id, text, label }) => (
            <tr key={id}>
              <TableItem className="px-6 py-4">{label}</TableItem>
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
        <div className="flex justify-center gap-8 items-center mt-6 mx-auto">
          {currentLabelIndex !== 0 && (
            <Button
              theme="sub"
              type="button"
              onClick={() => handleChangeQuestions("prev")}
            >
              戻る
            </Button>
          )}
          {currentLabelIndex < questions.length - 1 && (
            <Button
              theme="primary"
              type="button"
              onClick={() => handleChangeQuestions("next")}
            >
              次へ
            </Button>
          )}
          {currentLabelIndex === questions.length - 1 && (
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
