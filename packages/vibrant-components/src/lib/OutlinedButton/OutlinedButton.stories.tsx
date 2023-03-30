import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { VStack } from '../VStack';
import { OutlinedButton } from './OutlinedButton';

export default {
  title: 'OutlinedButton',
  component: OutlinedButton,
  args: {
    size: ['sm', 'md', 'md'],
    IconComponent: Icon.Photo.Regular,
    children: 'click me',
  },
} as ComponentMeta<typeof OutlinedButton>;

export const Basic: ComponentStory<typeof OutlinedButton> = props => (
  <VStack m={20}>
    <OutlinedButton {...props} />
  </VStack>
);

export const withHref: ComponentStory<typeof OutlinedButton> = props => (
  <OutlinedButton {...props} href="https://www.vibrant-design.com" />
);
