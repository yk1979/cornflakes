// 仮
export type SkillData = {
  name: string;
  skills: {
    key: string;
    summary: number;
    detail: {
      text: string;
      score: 0 | 1;
    }[];
  }[];
};
