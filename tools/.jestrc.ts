import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  rootDir: '../',
  modulePaths: ['../'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@server-lib/(.*)$': '<rootDir>/lib/src/$1',
  },
  transform: {
    '^.+\\.yaml$': 'yaml-jest'
  },
};

export default config;