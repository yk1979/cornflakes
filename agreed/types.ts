// 仮
export type SkillData = {
  name: string;
  skills: {
    category: string;
    summary: number;
    detail: {
      text: string;
      score: 0 | 1;
    }[];
  }[];
};

export type Questions = {
  label: string;
  contents: {
    id: string;
    text: string;
  }[];
}[];
