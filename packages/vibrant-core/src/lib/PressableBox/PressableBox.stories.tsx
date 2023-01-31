import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { PressableBox } from './PressableBox';

export default {
  title: 'PressableBox',
  component: PressableBox,
} as ComponentMeta<typeof PressableBox>;

export const Basic: ComponentStory<typeof PressableBox> = props => (
  <PressableBox width={200} height={200} backgroundColor="primary" hitSlop={[10, 50]} {...props} />
);
