import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spinner } from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
  args: {
    size: 'md',
  },
} as ComponentMeta<typeof Spinner>;

export const Basic: ComponentStory<typeof Spinner> = props => <Spinner {...props} />;
