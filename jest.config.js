module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    testEnvironment: 'node',
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: [
      '/node_modules/',
    ],
  };
  