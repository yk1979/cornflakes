export const scoreReducer: React.Reducer<
  {
    id: string;
    score: number;
  }[],
  {
    payload: {
      id: string;
    };
  }
> = (state, { payload }) =>
  state.map((item) => {
    if (item.id === payload.id) {
      return {
        ...item,
        // ターゲットのスコアは0か1のみなので、現在のスコア-1の絶対値は必ず現在のスコアの反転になる
        score: Math.abs(item.score - 1),
      };
    }
    return item;
  });
