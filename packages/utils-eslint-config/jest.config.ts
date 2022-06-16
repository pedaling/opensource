/* eslint-disable */
export default {
  displayName: "shared-utils-eslint-config",
  preset: "../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]s$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../../coverage/libs/shared/utils-eslint-config",
};
