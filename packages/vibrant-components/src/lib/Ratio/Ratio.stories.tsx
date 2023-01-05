import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Ratio } from './Ratio';

export default {
  title: 'Ratio',
  component: Ratio,
  args: {
    ratio: 1,
    width: 300,
  },
} as ComponentMeta<typeof Ratio>;

export const Basic: ComponentStory<typeof Ratio> = props => (
  <Ratio {...props}>
    <Box width="100%" height="100%" backgroundColor="primary" />
  </Ratio>
);
