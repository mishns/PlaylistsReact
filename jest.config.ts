import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/mocks/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.ts",
  },
};

export default config;
