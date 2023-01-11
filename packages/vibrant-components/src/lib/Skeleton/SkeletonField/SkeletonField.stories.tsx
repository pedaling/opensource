import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonField } from './SkeletonField';

export default {
  title: 'Skeleton.Field',
  component: SkeletonField,
  args: {
    size: 'lg',
    maxWidth: 500,
  },
} as ComponentMeta<typeof SkeletonField>;

export const Basic: ComponentStory<typeof SkeletonField> = props => <SkeletonField {...props} />;
