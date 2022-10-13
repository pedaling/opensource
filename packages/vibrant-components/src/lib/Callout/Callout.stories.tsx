import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Callout } from './Callout';

export default {
  title: 'Callout',
  component: Callout,
  args: {
    title: '타이틀을 입력하세요',
    type: 'warning',
    action: 'Action',
    onActionClick: () => {},
  },
} as ComponentMeta<typeof Callout>;

export const Basic: ComponentStory<typeof Callout> = props => <Callout {...props} />;
