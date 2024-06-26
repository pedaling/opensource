import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { VerificationCodeField } from './VerificationCodeField';

describe('<VerificationCodeField />', () => {
  const { render, rerender } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;
  let inputElement: HTMLInputElement;
  let itemElements: HTMLElement[];

  const mockHandleComplete = jest.fn();

  describe('when VerificationCodeField rendered', () => {
    beforeEach(() => {
      renderer = render(<VerificationCodeField length={6} onComplete={mockHandleComplete} />);

      element = renderer.getByTestId('verification-code-field');

      inputElement = element.getElementsByTagName('input')[0];

      itemElements = renderer.getAllByTestId('verification-code-item');
    });

    afterEach(() => {
      mockHandleComplete.mockClear();
    });

    describe('enter 12345', () => {
      const value = '12345';

      beforeEach(async () => {
        await userEvent.type(inputElement, value);
      });

      it.each(value.split('').map((expected, index) => ({ index, expected })))(
        "'$expected' should be content of itemElements[$index]",
        ({ index, expected }) => {
          expect(itemElements[index].textContent).toStrictEqual(expected);
        }
      );

      it('onComplete is not called', () => {
        expect(mockHandleComplete).not.toBeCalled();
      });

      describe('enter 6 in last value', () => {
        beforeEach(async () => {
          await userEvent.type(inputElement, '6');
        });

        it("'6' should be content of itemElements[5]", () => {
          expect(itemElements[5].textContent).toStrictEqual('6');
        });

        it('onComplete called with value', () => {
          expect(mockHandleComplete).toBeCalledWith('123456');
        });

        it('activeElement is input', () => {
          expect(document.activeElement).toStrictEqual(inputElement);
        });
      });

      describe('if state prop is changed to error', () => {
        beforeEach(() => {
          rerender(renderer, <VerificationCodeField length={6} onComplete={mockHandleComplete} state="error" />);
        });

        it('activeElement is not input', () => {
          expect(document.activeElement).not.toStrictEqual(inputElement);
        });

        it('input value will be clear', async () => {
          await waitFor(() => expect(inputElement.value).toStrictEqual(''));
        });
      });
    });

    describe('enter +-.e123', () => {
      const value = '+-.e123';

      beforeEach(async () => {
        await userEvent.type(inputElement, value);
      });

      it.each(
        value
          .replace(/[^0-9]/g, '')
          .split('')
          .map((expected, index) => ({ index, expected }))
      )("'$expected' should be content of itemElements[$index]", ({ index, expected }) => {
        expect(itemElements[index].textContent).toStrictEqual(expected);
      });
    });
  });

  describe('when blurOnComplete is true', () => {
    beforeEach(() => {
      renderer = render(<VerificationCodeField length={6} onComplete={mockHandleComplete} blurOnComplete={true} />);

      element = renderer.getByTestId('verification-code-field');

      inputElement = element.getElementsByTagName('input')[0];

      itemElements = renderer.getAllByTestId('verification-code-item');
    });

    describe('enter 123456', () => {
      beforeEach(async () => {
        await userEvent.type(inputElement, '123456');
      });

      it('activeElement is not input', () => {
        expect(document.activeElement).not.toStrictEqual(inputElement);
      });
    });
  });
});
