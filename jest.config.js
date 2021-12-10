/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ["<rootDir>/src"],
  preset: "jest-puppeteer",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts"],
  testMatch: [
    "<rootDir>/src/**/*.test.ts",
    "<rootDir>/src/*.test.ts",
    "<rootDir>/src/**/*.test.js",
    "<rootDir>/src/*.test.js",
  ],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  globalSetup: "./setup.ts",
  globalTeardown: "./teardown.ts",
  testEnvironment: "./puppeteer_environment.js",
};
