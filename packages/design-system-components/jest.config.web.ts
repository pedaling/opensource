export default {
  displayName: 'design-system-components-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/design-system-components',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
