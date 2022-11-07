import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { GhostButton } from './GhostButton';

export default {
  title: 'GhostButton',
  component: GhostButton,
  args: {
    kind: 'primary',
    size: 'md',
    IconComponent: Icon.Photo.Regular,
    children: 'click me',
  },
} as ComponentMeta<typeof GhostButton>;

export const Basic: ComponentStory<typeof GhostButton> = props => <GhostButton {...props} />;
