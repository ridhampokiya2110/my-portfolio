import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Path to your Next.js app so it can load next.config.ts and .env files
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: [
    "<rootDir>/__tests__/**/*.test.{ts,tsx}",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/*.d.ts",
    "!app/page.tsx",
  ],
  coverageThreshold: {
    global: {
      lines: 50,
      functions: 50,
      branches: 40,
      statements: 50,
    },
  },
  // Transform — next/jest handles this
  transform: {},
};

export default createJestConfig(config);
