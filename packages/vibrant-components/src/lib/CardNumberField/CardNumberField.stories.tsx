import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CardNumberField } from './CardNumberField';

export default {
  title: 'CardNumberField',
  component: CardNumberField,
  args: {},
} as ComponentMeta<typeof CardNumberField>;

export const Basic: ComponentStory<typeof CardNumberField> = () => <CardNumberField />;
