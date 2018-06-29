const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname, "../../"),
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.css$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFiles: ["<rootDir>/tests/unit/setup"],
  mapCoverage: true,
  coverageDirectory: "<rootDir>/tests/unit/coverage",
  collectCoverageFrom: [
    "src/**/*.{js,ts,tsx}",
    "!src/index.tsx",
    "!**/node_modules/**"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
