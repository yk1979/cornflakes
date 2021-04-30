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
  uuid: string;
  name: string;
  skills: SkillSummary[];
};

export type Questions = {
  uuid: string;
  label: string;
  contents: {
    id: string;
    text: string;
  }[];
}[];
