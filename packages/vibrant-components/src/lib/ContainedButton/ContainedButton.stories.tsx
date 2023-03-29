import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { ContainedButton } from './ContainedButton';

export default {
  title: 'ContainedButton',
  component: ContainedButton,
  args: {
    kind: 'primary',
    size: 'md',
    IconComponent: Icon.Photo.Regular,
    children: 'click me',
  },
} as ComponentMeta<typeof ContainedButton>;

export const Basic: ComponentStory<typeof ContainedButton> = props => <ContainedButton {...props} />;

export const Link: ComponentStory<typeof ContainedButton> = props => (
  <ContainedButton {...props} href="https://www.vibrant-design.com" />
);
