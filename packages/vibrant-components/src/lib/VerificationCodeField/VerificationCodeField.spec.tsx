import userEvent from '@testing-library/user-event';
import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { VerificationCodeField } from './VerificationCodeField';

describe('<VerificationCodeField />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;
  let inputElement: HTMLInputElement;
  let labelElements: HTMLLabelElement[];

  const mockHandleComplete = jest.fn();
  const mockHandleBlur = jest.fn();

  HTMLInputElement.prototype.blur = mockHandleBlur;

  describe('when VerificationCodeField rendered', () => {
    beforeEach(() => {
      renderer = render(
        <VerificationCodeField data-testid="verification-code-field" length={6} onComplete={mockHandleComplete} />
      );

      element = renderer.getByTestId('verification-code-field');

      inputElement = element.getElementsByTagName('input')[0];

      labelElements = Array.from(element.getElementsByTagName('label'));
    });

    afterEach(() => {
      mockHandleComplete.mockClear();

      mockHandleBlur.mockClear();
    });

    describe('enter 12345', () => {
      const value = '12345';

      beforeEach(async () => {
        await userEvent.type(inputElement, value);
      });

      it.each(value.split('').map((expected, index) => ({ index, expected })))(
        "'$expected' should be content of labelElements[$index]",
        ({ index, expected }) => {
          expect(labelElements[index].textContent).toStrictEqual(expected);
        }
      );

      it('onComplete is not called', () => {
        expect(mockHandleComplete).not.toBeCalled();
      });

      describe('enter 6 in last value', () => {
        beforeEach(async () => {
          inputElement.value = '12345';

          await userEvent.type(inputElement, '6');
        });

        it("'6' should be content of labelElements[5]", () => {
          expect(labelElements[5].textContent).toStrictEqual('6');
        });

        it('onComplete called with value', () => {
          expect(mockHandleComplete).toBeCalledWith('123456');
        });

        it('onBlur is not called', () => {
          expect(mockHandleBlur).not.toBeCalled();
        });
      });
    });

    describe('if state prop is changed to error', () => {
      beforeEach(() => {
        renderer.rerender(
          <VerificationCodeField
            data-testid="verification-code-field"
            length={6}
            onComplete={mockHandleComplete}
            state="error"
          />
        );

        element = renderer.getByTestId('verification-code-field');

        inputElement = element.getElementsByTagName('input')[0];

        labelElements = Array.from(element.getElementsByTagName('label'));
      });

      it('onBlur is called', () => {
        expect(mockHandleBlur).toBeCalled();
      });

      it('input value will be clear', () => {
        expect(inputElement.value).toStrictEqual('');
      });
    });
  });

  describe('when blurOnComplete is true', () => {
    beforeEach(() => {
      renderer = render(
        <VerificationCodeField
          data-testid="verification-code-field"
          length={6}
          onComplete={mockHandleComplete}
          blurOnComplete={true}
        />
      );

      element = renderer.getByTestId('verification-code-field');

      inputElement = element.getElementsByTagName('input')[0];

      labelElements = Array.from(element.getElementsByTagName('label'));
    });

    describe('enter 123456', () => {
      beforeEach(async () => {
        await userEvent.type(inputElement, '123456');
      });

      it('onBlur called', () => {
        expect(mockHandleBlur).toBeCalled();
      });
    });
  });
});
