import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from './Switch';

export default {
  title: 'Switch',
  component: Switch,
  args: {
    defaultValue: false,
    size: 'sm',
  },
} as ComponentMeta<typeof Switch>;

export const Basic: ComponentStory<typeof Switch> = props => <Switch {...props} />;
