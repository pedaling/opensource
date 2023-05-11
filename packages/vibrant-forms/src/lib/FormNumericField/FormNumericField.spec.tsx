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
  let element: Element;
  let submit: Element;
  let testNumber: string;
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

      renderer = render(
        <Form formControlMethods={formControl}>
          <FormNumericField data-testid="FormNumericField" name={name} />
          <Pressable data-testid="submit" onClick={formControl.handleSubmit(submitHandler)} />
        </Form>
      );

      element = renderer.getByTestId('FormNumericField');

      submit = renderer.getByTestId('submit');
    });

    describe('when text typed', () => {
      beforeEach(async () => {
        testNumber = '3';

        await waitFor(() => userEvent.type(element, testNumber));

        renderer.debug();
      });

      it('value is changed', () => {
        expect(formControl.getValues(name)).toEqual(testNumber);
      });
    });

    describe('when submit clicked', () => {
      beforeEach(async () => {
        testNumber = 'test2';

        await waitFor(() => userEvent.type(element, testNumber));

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
