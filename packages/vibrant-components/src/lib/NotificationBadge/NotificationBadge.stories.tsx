import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationBadge } from './NotificationBadge';

export default {
  title: 'NotificationBadge',
  component: NotificationBadge,
  args: {
    kind: 'dot',
    size: 'md',
    borderColor: 'background',
  },
} as ComponentMeta<typeof NotificationBadge>;

export const Basic: ComponentStory<typeof NotificationBadge> = props => <NotificationBadge {...props} />;
