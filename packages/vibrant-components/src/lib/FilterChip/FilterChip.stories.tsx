import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { FilterChip } from './FilterChip';

export default {
  title: 'FilterChip',
  component: FilterChip,
  args: {
    size: 'md',
    StartIconComponent: Icon.Clip.Regular,
    EndIconComponent: Icon.ArrowTriangleDown.Regular,
    children: 'FilterChip',
  },
} as ComponentMeta<typeof FilterChip>;

export const Basic: ComponentStory<typeof FilterChip> = props => <FilterChip {...props} />;
