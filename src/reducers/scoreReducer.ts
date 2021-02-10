export const scoreReducer: React.Reducer<
  {
    title: string;
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
