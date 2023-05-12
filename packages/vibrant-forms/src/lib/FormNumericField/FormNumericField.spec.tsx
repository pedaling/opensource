import type { UseFormReturn } from 'react-hook-form';
import { renderHook, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pressable } from '@vibrant-ui/components';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Form, useForm } from '../Form';
import { FormNumericField } from './FormNumericField';

type FormValues = {
  numberField: number;
};
describe('<FormNumericField />', () => {
  const { render } = createReactRenderer();

  let formControl: UseFormReturn<FormValues>;
  let renderer: ReactRenderer;
  let element: HTMLElement;
  let submit: HTMLElement;
  let testNumber: number;
  let initialNumber: number;
  const submitHandler = jest.fn<void, [values: any]>();

  describe('when FormNumericField rendered', () => {
    beforeEach(async () => {
      formControl = renderHook(() =>
        useForm<FormValues>({
          defaultValues: {
            numberField: 0,
          },
        })
      ).result.current;

      testNumber = 10;

      initialNumber = 0;

      renderer = render(
        <Form formControlMethods={formControl}>
          <FormNumericField data-testid="FormNumericField" name="numberField" />
          <Pressable data-testid="submit" onClick={formControl.handleSubmit(submitHandler)} />
        </Form>
      );

      element = (await renderer.findByTestId('FormNumericField')).firstElementChild as HTMLElement;

      submit = renderer.getByTestId('submit');

      formControl.watch('numberField');
    });

    describe('when default value is set as 0', () => {
      it('value should be 0', async () => {
        expect(formControl.getValues('numberField')).toEqual(initialNumber);
      });

      it('dirty is not set', async () => {
        expect(formControl.formState.isDirty).toBe(false);
      });
    });

    describe('when text typed', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.type(element, testNumber.toString()));
      });

      it('value is changed', () => {
        expect(formControl.getValues('numberField')).toEqual(testNumber);
      });

      it('watch is executed', () => {
        expect(formControl.watch('numberField')).toEqual(testNumber);
      });
    });

    describe('when reset executed', () => {
      beforeEach(async () => {
        await waitFor(() => formControl.reset({ numberField: initialNumber }));
      });

      it('value is set as defaultValue', () => {
        expect(formControl.getValues('numberField')).toEqual(initialNumber);
      });
    });

    describe('when submit clicked', () => {
      beforeEach(async () => {
        testNumber = 2;

        await waitFor(() => userEvent.type(element, testNumber.toString()));

        await waitFor(() => userEvent.click(submit));
      });

      it('submit handler is called', () => {
        expect(submitHandler).toBeCalled();
      });

      it('submit handler got values', () => {
        expect(submitHandler.mock.lastCall[0]).toEqual({ numberField: testNumber });
      });
    });
  });
});
