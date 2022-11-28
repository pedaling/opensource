import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from '../Form';
import { FormTextField } from './FormTextField';

export default {
  title: 'FormTextField',
  component: FormTextField,
  args: {
    name: 'test',
  },
} as ComponentMeta<typeof FormTextField>;

export const Basic: ComponentStory<typeof FormTextField> = props => (
  <Form>
    <FormTextField {...props} />
  </Form>
);
