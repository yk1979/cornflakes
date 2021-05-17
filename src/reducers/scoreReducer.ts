type InitialState = {
  contents: {
    score: number;
    uuid: string;
    text: string;
  }[];
  uuid: string;
  label: string;
}[];

export const scoreReducer: React.Reducer<
  InitialState,
  {
    type: "increase" | "decrease";
    payload: {
      labelId: string;
      contentsId: string;
    };
  }
> = (prevState, { type, payload }) => {
  const { labelId, contentsId } = payload;
  const num = type === "increase" ? 1 : -1;

  return prevState.map((question) =>
    question.uuid === labelId
      ? {
          ...question,
          contents: question.contents.map((c) =>
            c.uuid === contentsId ? { ...c, score: c.score + num } : c
          ),
        }
      : question
  );
};
