import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from '../VStack';
import { Callout } from './Callout';

export default {
  title: 'Callout',
  component: Callout,
  args: {
    title: '타이틀을 입력하세요',
    kind: 'warning',
    buttonText: 'Action',
    onButtonClick: () => {},
  },
} as ComponentMeta<typeof Callout>;

export const Basic: ComponentStory<typeof Callout> = props => (
  <VStack width="80%" p={10}>
    <Callout {...props} />
  </VStack>
);
