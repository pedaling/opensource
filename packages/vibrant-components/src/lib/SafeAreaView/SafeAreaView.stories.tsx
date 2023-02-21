import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { SafeAreaView } from './SafeAreaView';

export default {
  title: 'SafeAreaView',
  component: SafeAreaView,
  args: {
    mode: 'margin',
    edges: ['top', 'bottom', 'left', 'right'],
    width: '100%',
    height: '100%',
    minInsets: {
      top: [10, 50],
      left: 50,
      right: 50,
      bottom: 50,
    },
  },
} as ComponentMeta<typeof SafeAreaView>;

export const Basic: ComponentStory<typeof SafeAreaView> = props => (
  <SafeAreaView {...props} backgroundColor="black">
    <Box width={200} height={200} backgroundColor="primary" />
  </SafeAreaView>
);

export const withAutoHeight: ComponentStory<typeof SafeAreaView> = () => (
  <Box width="100%" height={500}>
    <SafeAreaView edges={['top']} backgroundColor="black" width="auto" height="auto">
      <Box width={200} height={200} backgroundColor="primary" />
    </SafeAreaView>
  </Box>
);
