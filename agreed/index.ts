module.exports = [
  {
    request: {
      // TODO エンドポイントは仮
      path: "/:id",
      method: "GET",
      values: {
        id: "pchan",
      },
    },
    response: {
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
  },
];

export {};
