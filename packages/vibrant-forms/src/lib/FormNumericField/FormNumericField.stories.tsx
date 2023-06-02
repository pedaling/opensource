import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from '../Form';
import { FormNumericField } from './FormNumericField';

export default {
  title: 'FormNumericField',
  component: FormNumericField,
  args: {
    name: 'test',
  },
} as ComponentMeta<typeof FormNumericField>;

export const Basic: ComponentStory<typeof FormNumericField> = props => (
  <Form>
    <FormNumericField {...props} />
  </Form>
);
