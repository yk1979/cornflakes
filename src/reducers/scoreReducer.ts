export const scoreReducer: React.Reducer<
  {
    id: string;
    text: string;
    score: number;
    label: string;
  }[],
  {
    payload: {
      id: string;
      score: number;
    };
  }
> = (state, { payload }) =>
  state.map((item) => {
    if (item.id === payload.id) {
      return {
        ...item,
        score: payload.score,
      };
    }
    return item;
  });
