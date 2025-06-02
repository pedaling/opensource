import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from '../VStack';
import { FieldLayout } from './FieldLayout';

export default {
  title: 'FieldLayout',
  component: FieldLayout,
  args: {
    label: '이메일',
  },
} as ComponentMeta<typeof FieldLayout>;

export const Basic: ComponentStory<typeof FieldLayout> = props => (
  <VStack width="100%" p={20}>
    <FieldLayout {...props} renderField={() => null} size={['sm', 'md']} />
  </VStack>
);
