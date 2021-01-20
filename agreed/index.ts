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
      skills: {
        "HTML/CSS": {
          summary: 100,
        },
        "JS/TS": {
          summary: 90,
        },
        React: {
          summary: 91,
        },
        "Node.js": {
          summary: 83,
        },
        AMP: {
          summary: 100,
        },
        "CI/CD": {
          summary: 75,
        },
        Test: {
          summary: 100,
        },
        Backend: {
          summary: 60,
        },
        GCP: {
          summary: 60,
        },
        SEO: {
          summary: 100,
        },
      },
    },
  },
};

module.exports = convert(api);
