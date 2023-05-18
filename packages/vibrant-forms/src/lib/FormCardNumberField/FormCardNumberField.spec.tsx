import type { UseFormReturn } from 'react-hook-form';
import { renderHook, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pressable } from '@vibrant-ui/components';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Form, useForm } from '../Form';
import { FormCardNumberField } from './FormCardNumberField';

describe('<FormCardNumberField />', () => {
  const { render } = createReactRenderer();

  let formControl: UseFormReturn;
  let renderer: ReactRenderer;
  let element: Element;
  let submit: Element;
  let text: string;
  let name: string;
  const submitHandler = jest.fn<void, [values: any]>();

  describe('when FormCardNumberField rendered', () => {
    beforeEach(async () => {
      formControl = renderHook(() =>
        useForm({
          defaultValues: {},
        })
      ).result.current;

      name = 'email-test';

      renderer = render(
        <Form formControlMethods={formControl}>
          <FormCardNumberField data-testid="FormCardNumberField" name={name} />
          <Pressable data-testid="submit" onClick={formControl.handleSubmit(submitHandler)} />
        </Form>
      );

      element = renderer.getByTestId('FormCardNumberField');

      submit = renderer.getByTestId('submit');
    });

    describe('when number typed', () => {
      beforeEach(async () => {
        text = '12345';

        await waitFor(() => userEvent.type(element, text));
      });

      it('value is changed', () => {
        expect(formControl.getValues(name)).toEqual(text);
      });
    });

    describe('when text typed', () => {
      beforeEach(async () => {
        text = 'text';

        await waitFor(() => userEvent.type(element, text));
      });

      it('value is not changed', () => {
        expect(formControl.getValues(name)).toEqual(undefined);
      });
    });

    describe('when submit clicked', () => {
      beforeEach(async () => {
        text = '12345';

        await waitFor(() => userEvent.type(element, text));

        await waitFor(() => userEvent.click(submit));
      });

      it('submit handler is called', () => {
        expect(submitHandler).toBeCalled();
      });

      it('submit handler got values', () => {
        expect(submitHandler.mock.lastCall[0]).toEqual({ [name]: text });
      });
    });
  });
});
