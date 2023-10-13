import type {Config} from 'jest';
const config: Config = {
    testEnvironment: 'jsdom',
    coverageDirectory: "./coverage/",
    collectCoverage: true,
    collectCoverageFrom: [
      'src/components/**/*.{tsx,jsx}',
      '!**/node_modules/**',
      '!**/vendor/**',
    ]
  };
  
  module.exports = config;


