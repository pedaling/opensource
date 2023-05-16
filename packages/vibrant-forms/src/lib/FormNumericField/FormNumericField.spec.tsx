import { useEffect } from 'react';
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

  let renderer: ReactRenderer;
  let element: HTMLElement;
  let submit: HTMLElement;
  let testNumber: number;
  let initialNumber: number;
  let formResult: {
    current: UseFormReturn<FormValues, any>;
  };
  let isDirty: boolean;

  const submitHandler = jest.fn<void, [values: any]>();

  describe('when FormNumericField rendered', () => {
    beforeEach(async () => {
      initialNumber = 0;

      const { result } = renderHook(() => {
        const form = useForm<FormValues>({
          defaultValues: {
            numberField: initialNumber,
          },
        });

        useEffect(() => {
          isDirty = form.formState.isDirty;
        }, [form.formState.isDirty]);

        return form;
      });

      formResult = result;

      testNumber = 10;

      renderer = render(
        <Form formControlMethods={formResult.current}>
          <FormNumericField data-testid="FormNumericField" name="numberField" />
          <Pressable data-testid="submit" onClick={formResult.current.handleSubmit(submitHandler)} />
        </Form>
      );

      element = (await renderer.findByTestId('FormNumericField')).firstElementChild as HTMLElement;

      submit = renderer.getByTestId('submit');
    });

    describe('when text typed', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.type(element, testNumber.toString()));

        await waitFor(() => userEvent.click(submit));
      });

      it('value is changed', () => {
        expect(formResult.current.getValues('numberField')).toEqual(testNumber);
      });

      it('dirty is set', async () => {
        await waitFor(() => expect(isDirty).toEqual(true));
      });

      it('watching value should be same with the updated number', async () => {
        await waitFor(() => expect(formResult.current.watch('numberField')).toEqual(testNumber));
      });
    });

    describe('when default value is set as 0', () => {
      it('value should be 0', async () => {
        expect(formResult.current.getValues('numberField')).toEqual(initialNumber);
      });

      it('dirty is not set', async () => {
        expect(isDirty).toEqual(false);
      });
    });

    describe('when submit clicked', () => {
      beforeEach(async () => {
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
