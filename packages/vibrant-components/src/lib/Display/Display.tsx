import type { TextElements } from '@vibrant-ui/core';
import { Text } from '@vibrant-ui/core';
import { withDisplayVariation } from './DisplayProps';

const DisplayLevelTagMap: { [level: number]: TextElements } = {
  2: 'h1',
  3: 'h1',
  4: 'h1',
};

export const Display = withDisplayVariation(({ level, as, testId = 'display', ...props }) => {
  const minLevel = Math.min(...(Array.isArray(level) ? level.map(level => Number(level)) : [Number(level)]));

  return <Text data-testid={testId} as={as ?? DisplayLevelTagMap[minLevel]} {...props} />;
});
