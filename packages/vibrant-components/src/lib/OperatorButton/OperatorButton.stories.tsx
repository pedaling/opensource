import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { OperatorButton } from './OperatorButton';

export default {
  title: 'OperatorButton',
  component: OperatorButton,
  args: {
    operator: 'plus',
  },
} as ComponentMeta<typeof OperatorButton>;

export const Basic: ComponentStory<typeof OperatorButton> = props => <OperatorButton {...props} />;
