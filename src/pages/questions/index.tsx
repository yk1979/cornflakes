import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useReducer, useState } from "react";
import { Questions } from "../../../agreed/types";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import TableItem from "../../components/Table/TableItem";
import { API_BASE_URL } from "../../constants";
import { scoreReducer } from "../../reducers/scoreReducer";

type Props = {
  data: {
    title: string;
    questions: string[];
  }[];
};

const QuestionPage: NextPage<Props> = ({ data }) => {
  const router = useRouter();

  const [dataIndex, setDataIndex] = useState(0);
  const currentData = data[dataIndex];

  const initialScores = data.map((d) => ({
    title: d.title,
    score: d.questions.map(() => 0),
  }));
  const [state, dispatch] = useReducer(scoreReducer, initialScores);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = e.target.id.split("-").map((t) => Number(t));
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
    setDataIndex(dataIndex + n);
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
          {currentData.questions.map((item, i) => (
            <tr key={i}>
              <TableItem className="px-6 py-4">{currentData.title}</TableItem>
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
            onClick={() => handleChangeQuestions("next")}
          >
            次へ
          </Button>
        )}
        {dataIndex !== 0 && (
          <Button
            theme="sub"
            type="button"
            onClick={() => handleChangeQuestions("prev")}
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
  const env = process.env.PROJECT_ENV;
  // TODO fix
  const API_ENDPOINT =
    env === "local"
      ? "http://localhost:3010"
      : `${API_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
  const response = await axios.get<Questions>(
    `${API_ENDPOINT}/entries/?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  );
  const data = response.data.items.map(({ fields }) => fields);

  return {
    props: {
      data,
    },
  };
};
