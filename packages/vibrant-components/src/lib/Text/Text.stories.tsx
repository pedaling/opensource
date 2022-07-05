import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: 'Sample Text',
    kind: 'title1',
  },
} as ComponentMeta<typeof Text>;

export const Basic: ComponentStory<typeof Text> = props => <Text {...props} />;
