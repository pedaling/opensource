import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { BreadCrumb } from '../BreadCrumb';
import { VStack } from '../VStack';

export default {
  title: 'BreadCrumb',
  component: BreadCrumb,
  args: {},
} as ComponentMeta<typeof BreadCrumb>;

export const Basic: ComponentStory<typeof BreadCrumb> = props => (
  <VStack p={10}>
    <BreadCrumb {...props}>Title</BreadCrumb>
  </VStack>
);
