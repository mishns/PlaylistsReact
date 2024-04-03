import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";
import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "<rootDir>", "./src"],
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/mocks/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.ts",
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  },
};

export default config;
