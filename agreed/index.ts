import { APIDef, convert, GET, ResponseDef, Success200 } from "@agreed/typed";
import { GraphData } from "./types";

type Api = APIDef<
  GET, // HTTP method
  [":id"], // path
  Record<string, unknown>, // request header
  Record<string, unknown>, // request query
  undefined, // response body
  Record<string, unknown>, // response header
  ResponseDef<Success200, GraphData>
>;

const api: Api = {
  request: {
    // TODO エンドポイントは仮
    path: [":id"],
    method: "GET",
    body: undefined,
    values: {
      id: "pchan",
    },
  },
  response: {
    status: 200,
    headers: {
      "x-csrf-token": "csrf-token",
    },
    body: {
      name: "pchan",
      skills: [
        {
          key: "HTML/CSS",
          summary: 100,
        },
        {
          key: "JS/TS",
          summary: 90,
        },
        {
          key: "React",
          summary: 91,
        },
        {
          key: "Node.js",
          summary: 83,
        },
        {
          key: "AMP",
          summary: 100,
        },
        {
          key: "CI/CD",
          summary: 75,
        },
        {
          key: "Test",
          summary: 100,
        },
        {
          key: "Backend",
          summary: 60,
        },
        {
          key: "GCP",
          summary: 60,
        },
        {
          key: "SEO",
          summary: 100,
        },
      ],
    },
  },
};

module.exports = convert(api);
