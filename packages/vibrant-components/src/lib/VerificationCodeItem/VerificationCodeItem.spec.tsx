import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { VerificationCodeItem } from './VerificationCodeItem';

describe('<VerificationCodeItem />', () => {
  const mockHandleFocus = jest.fn();

  const { render } = createReactRenderer();
  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when VerificationCodeItem rendered', () => {
    beforeEach(async () => {
      const inputId = 'input';

      renderer = render(
        <>
          <input data-testid="input" id={inputId} onFocus={mockHandleFocus} />
          <VerificationCodeItem data-testid="verification-code-item" inputId={inputId} value="1" />
        </>
      );

      element = await renderer.findByTestId('verification-code-item');
    });

    afterEach(() => {
      mockHandleFocus.mockClear();
    });

    it('label element created', () => {
      expect(element.tagName).toStrictEqual('LABEL');
    });

    describe('if element clicked', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.click(element));
      });

      it('input element should be focused', () => {
        expect(mockHandleFocus).toBeCalled();
      });
    });

    describe('even if element clicked twice', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.click(element));

        await waitFor(() => userEvent.click(element));
      });

      it('onFocus should be called only once', () => {
        expect(mockHandleFocus).toBeCalledTimes(1);
      });
    });
  });
});
