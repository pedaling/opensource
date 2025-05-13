import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { Badge } from './Badge';

export default {
  title: 'Badge',
  component: Badge,

  args: {
    kind: 'primary',
    size: 'md',
    pill: true,
    children: 'this is a badge',
    IconComponent: Icon.Pin.Fill,
  },
} as ComponentMeta<typeof Badge>;

export const Basic: ComponentStory<typeof Badge> = props => <Badge {...props} />;
