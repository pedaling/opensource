import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Callout } from './Callout';

export default {
  title: 'Callout',
  component: Callout,
  args: {
    title: '타이틀을 입력하세요',
    description:
      '설명을 입력하세요. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque ipsum eget lectus maximus finibus.',
    type: 'warning',
  },
} as ComponentMeta<typeof Callout>;

export const Basic: ComponentStory<typeof Callout> = props => <Callout {...props} />;
