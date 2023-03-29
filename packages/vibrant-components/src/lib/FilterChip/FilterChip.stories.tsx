import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { FilterChip } from './FilterChip';

export default {
  title: 'FilterChip',
  component: FilterChip,
  args: {
    size: 'md',
    startIcon: <Icon.Clip.Regular />,
    endIcon: <Icon.ArrowTriangleDown.Regular />,
    children: 'FilterChip',
  },
} as ComponentMeta<typeof FilterChip>;

export const Basic: ComponentStory<typeof FilterChip> = props => <FilterChip {...props} />;

export const Link: ComponentStory<typeof FilterChip> = props => (
  <FilterChip {...props} href="https://www.vibrant-design.com" />
);
