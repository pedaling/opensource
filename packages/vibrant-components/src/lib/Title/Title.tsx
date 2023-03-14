import type { TextElements } from '@vibrant-ui/core';
import { Text } from '@vibrant-ui/core';
import { withTitleVariation } from './TitleProps';

const TitleLevelTagMap: { [level: number]: TextElements } = {
  1: 'h2',
  2: 'h2',
  3: 'h2',
  4: 'h3',
  5: 'h3',
  6: 'h3',
  7: 'h3',
};

export const Title = withTitleVariation(({ level, as, testId = 'title', ...props }) => {
  const minLevel = Math.min(...(Array.isArray(level) ? level.map(level => Number(level)) : [Number(level)]));

  return <Text data-testid={testId} as={as ?? TitleLevelTagMap[minLevel]} {...props} />;
});
