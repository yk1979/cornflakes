type Skill = {
  id: string;
  text: string;
  score: number;
};

export type SkillSummary = {
  label: string;
  summary: number;
  contents: Skill[];
};

export type User = {
  name: string;
  skills: SkillSummary[];
};

export type Questions = {
  label: string;
  contents: {
    id: string;
    text: string;
  }[];
}[];
