import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { NumericField } from './NumericField';

export default {
  title: 'NumericField',
  component: NumericField,
} as ComponentMeta<typeof NumericField>;

export const Basic: ComponentStory<typeof NumericField> = props => <NumericField {...props} />;
