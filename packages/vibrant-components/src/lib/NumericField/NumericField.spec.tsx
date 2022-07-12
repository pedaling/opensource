import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { NumericField } from './NumericField';

describe('<NumericField />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when NumericField rendered', () => {
    let inputElement: HTMLInputElement | null;

    beforeEach(() => {
      renderer = render(<NumericField data-testid="numericField" />);

      element = renderer.getByTestId('numericField');

      inputElement = element.querySelector('input');
    });

    it('input element exists', () => {
      expect(inputElement).toBeTruthy();
    });

    it('input value is empty', () => {
      expect(inputElement?.value).toBe('');
    });

    describe('when plus button clicked', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.click(element.querySelectorAll('button')[1]));
      });

      it('input value is 1', () => {
        expect(inputElement?.value).toBe('1');
      });
    });

    describe('when minus button clicked', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.click(element.querySelectorAll('button')[0]));
      });

      it('input value is -1', () => {
        expect(inputElement?.value).toBe('-1');
      });
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
