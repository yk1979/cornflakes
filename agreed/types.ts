export type User = {
  name: string;
  skills: {
    label: string;
    summary: number;
    contents: {
      id: string;
      text: string;
      score: number;
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
