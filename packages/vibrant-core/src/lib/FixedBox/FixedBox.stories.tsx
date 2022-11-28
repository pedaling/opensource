import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FixedBox } from './FixedBox';

export default {
  title: 'FixedBox',
  component: FixedBox,
  args: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'dim',
  },
} as ComponentMeta<typeof FixedBox>;

export const Basic: ComponentStory<typeof FixedBox> = props => <FixedBox {...props} />;
