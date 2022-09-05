import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SafeAreaView } from './SafeAreaView';

export default {
  title: 'SafeAreaView',
  component: SafeAreaView,
  args: {
    mode: 'margin',
    edges: {
      top: 60,
      left: 10,
      right: 10,
      bottom: 10,
    },
    width: '100%',
    height: '100%',
    insets: ['top', 'bottom'],
  },
} as ComponentMeta<typeof SafeAreaView>;

export const Basic: ComponentStory<typeof SafeAreaView> = props => <SafeAreaView {...props} />;
