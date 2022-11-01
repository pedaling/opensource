import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from './Form';

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>;

export const Basic: ComponentStory<typeof Form> = props => <Form {...props} />;
