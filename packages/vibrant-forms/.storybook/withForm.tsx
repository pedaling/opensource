import type { DecoratorFn } from '@storybook/react';
import { Form } from '../src/lib/Form';

export const withForm: DecoratorFn = StoryComponent => (
  <Form>
    <StoryComponent />
  </Form>
);
