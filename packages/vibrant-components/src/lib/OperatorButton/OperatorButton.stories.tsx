import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@vibrant-ui/icons';
import { OperatorButton } from './OperatorButton';

export default {
  title: 'OperatorButton',
  component: OperatorButton,
  args: {
    IconComponent: Icon.Add.Regular,
  },
} as ComponentMeta<typeof OperatorButton>;

export const Basic: ComponentStory<typeof OperatorButton> = props => <OperatorButton {...props} />;
