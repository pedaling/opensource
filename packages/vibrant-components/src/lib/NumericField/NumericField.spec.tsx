import { fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { NumericField } from './NumericField';

describe('<NumericField />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;
  let mockOnValueChange: jest.Mock;

  beforeEach(() => {
    mockOnValueChange = jest.fn();
  });

  describe('when NumericField rendered', () => {
    let plusButtonElement: HTMLButtonElement;
    let minusButtonElement: HTMLButtonElement;

    beforeEach(() => {
      renderer = render(<NumericField data-testid="numericField" onValueChange={mockOnValueChange} />);

      element = renderer.getByTestId('numericField');

      [minusButtonElement, plusButtonElement] = Array.from(element.querySelectorAll('button')) as HTMLButtonElement[];
    });

    it('input value is empty', () => {
      expect(element.querySelector('input')?.value).toBe('');
    });

    it('onValueChange not called', () => {
      expect(mockOnValueChange).not.toBeCalled();
    });

    describe('when plus button clicked', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.click(plusButtonElement));
      });

      it('onChangeValue called with 1', () => {
        expect(mockOnValueChange).toBeCalledWith(expect.objectContaining({ value: 1 }));
      });
    });

    describe('when minus button clicked', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.click(minusButtonElement));
      });

      it('onChangeValue called with -1', () => {
        expect(mockOnValueChange).toBeCalledWith(expect.objectContaining({ value: -1 }));
      });
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when NumberField with min and max rendered', () => {
    let plusButtonElement: HTMLButtonElement;
    let minusButtonElement: HTMLButtonElement;

    beforeEach(() => {
      renderer = render(<NumericField data-testid="numericField" min={3} max={5} onValueChange={mockOnValueChange} />);

      element = renderer.getByTestId('numericField');

      [minusButtonElement, plusButtonElement] = Array.from(element.querySelectorAll('button')) as HTMLButtonElement[];
    });

    it('minus button is disabled', () => {
      expect(minusButtonElement.disabled).toBe(true);
    });

    it('plus button is enabled', () => {
      expect(plusButtonElement.disabled).toBe(false);
    });

    describe('when plus button clicked', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.click(plusButtonElement));
      });

      it('onValueChange called with 4', () => {
        expect(mockOnValueChange).toBeCalledWith(expect.objectContaining({ value: 4 }));
      });

      it('minus button is enabled', () => {
        expect(minusButtonElement.disabled).toBe(false);
      });
    });

    describe('when press 1 to input', () => {
      beforeEach(done => {
        const input = element.querySelector('input');

        if (!input) {
          done.fail();

          return;
        }

        waitFor(() => userEvent.type(input, '1')).then(done);
      });

      it('onValueChange not called', () => {
        expect(mockOnValueChange).not.toBeCalled();
      });

      describe('when blur', () => {
        beforeEach(async () => {
          await waitFor(() => fireEvent.blur(element.querySelector('input')!));
        });

        it('onValueChange called with min value', () => {
          expect(mockOnValueChange).toBeCalledWith(expect.objectContaining({ value: 3 }));
        });
      });
    });
  });
});
