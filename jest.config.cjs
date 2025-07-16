module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(svg|png|jpg|jpeg|gif|webp|avif|ico)$': '<rootDir>/__mocks__/svgMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}; 