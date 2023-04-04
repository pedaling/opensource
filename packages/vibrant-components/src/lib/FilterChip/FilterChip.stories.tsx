import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { HStack } from '../HStack';
import { FilterChip } from './FilterChip';

export default {
  title: 'FilterChip',
  component: FilterChip,
  args: {
    size: 'md',
    startIcon: <Icon.Clip.Regular />,
    endIcon: <Icon.ArrowTriangleDown.Regular />,
    children: 'FilterChip',
    lineLimit: 1,
  },
} as ComponentMeta<typeof FilterChip>;

export const Basic: ComponentStory<typeof FilterChip> = props => <FilterChip {...props} />;

export const withHref: ComponentStory<typeof FilterChip> = props => (
  <FilterChip {...props} href="https://www.vibrant-design.com" />
);

export const withLongText: ComponentStory<typeof FilterChip> = props => (
  <FilterChip {...props} children={'Long Text '.repeat(100)} />
);

export const withMultipleItem: ComponentStory<typeof FilterChip> = props => (
  <HStack flexWrap="wrap" rowGap={8} overflow="hidden" width="100%">
    <FilterChip {...props} children="Item 1" />
    <FilterChip {...props} children="Item 2" />
    <FilterChip {...props} children="Item 3" />
    <FilterChip {...props} children="Item 4" />
    <FilterChip {...props} children={'Item 5 '.repeat(5)} lineLimit={1} />
    <FilterChip {...props} children={'Item 6 is long '.repeat(20)} lineLimit={2} />
    <FilterChip {...props} children={'Item 7 is too long '.repeat(50)} lineLimit={3} />
  </HStack>
);
