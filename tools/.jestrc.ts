import type { Config } from '@jest/types';
import tsConfig from './tsconfig.json';


const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  rootDir: '../',
  modulePaths: [tsConfig.compilerOptions.baseUrl],
  moduleNameMapper: {
    '@server-lib/(.*)$': '<rootDir>/lib/src/$1'
  },
  transform: {
    '^.+\\.yaml$': 'yaml-jest'
  },
  collectCoverageFrom: [
    "<rootDir>/lib/src/**/*.ts",
    "<rootDir>/servers/**/src/**/*.ts",
  ],
};

export default config;
