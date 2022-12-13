import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { IconButton } from './IconButton';

export default {
  title: 'IconButton',
  component: IconButton,
  args: {
    size: 'md',
    IconComponent: Icon.Play.Fill,
  },
} as ComponentMeta<typeof IconButton>;

export const Basic: ComponentStory<typeof IconButton> = props => <IconButton {...props} />;
