require("dotenv").config();

module.exports = {
  env: {
    PROJECT_ENV: process.env.PROJECT_ENV,
    CONTENTFUL_SPACE_ID: "dojktgqqvjkl",
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
};
