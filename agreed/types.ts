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

// 仮
export type Questions = {
  items: {
    fields: {
      title: string;
      questions: string[];
    };
  }[];
};
