import type { UseFormReturn } from 'react-hook-form';
import { renderHook, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pressable } from '@vibrant-ui/components';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Form, useForm } from '../Form';
import { FormNumericField } from './FormNumericField';

describe('<FormNumericField />', () => {
  const { render } = createReactRenderer();

  let formControl: UseFormReturn;
  let renderer: ReactRenderer;
  let element: HTMLElement;
  let submit: HTMLElement;
  let testNumber: number;
  let name: string;
  const submitHandler = jest.fn<void, [values: any]>();

  describe('when FormNumericField rendered', () => {
    beforeEach(async () => {
      formControl = renderHook(() =>
        useForm({
          defaultValues: {},
        })
      ).result.current;

      name = 'number-test';

      testNumber = 10;

      renderer = render(
        <Form formControlMethods={formControl}>
          <FormNumericField data-testid="FormNumericField" name={name} />
          <Pressable data-testid="submit" onClick={formControl.handleSubmit(submitHandler)} />
        </Form>
      );

      element = (await renderer.findByTestId('FormNumericField')).firstElementChild as HTMLElement;

      submit = renderer.getByTestId('submit');
    });

    describe('when text typed', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.type(element, testNumber.toString()));
      });

      it('value is changed', () => {
        expect(formControl.getValues(name)).toEqual(testNumber);
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
        expect(submitHandler.mock.lastCall[0]).toEqual({ [name]: testNumber });
      });
    });
  });
});
