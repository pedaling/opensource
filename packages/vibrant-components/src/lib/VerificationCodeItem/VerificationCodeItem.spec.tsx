import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { VerificationCodeItem } from './VerificationCodeItem';

describe('<VerificationCodeItem />', () => {
  const mockHandleClick = jest.fn();

  const { render } = createReactRenderer();
  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when VerificationCodeItem rendered', () => {
    beforeEach(async () => {
      renderer = render(<VerificationCodeItem value="1" onClick={mockHandleClick} />);

      element = await renderer.findByTestId('verification-code-item');
    });

    afterEach(() => {
      mockHandleClick.mockClear();
    });

    describe('if element clicked', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.click(element));
      });

      it('onClick should be called', () => {
        expect(mockHandleClick).toBeCalled();
      });
    });
  });
});
