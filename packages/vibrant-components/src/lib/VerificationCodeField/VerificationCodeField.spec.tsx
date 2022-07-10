import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { VerificationCodeField } from './VerificationCodeField';

describe('<VerificationCodeField />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;
  let element: HTMLElement;
  let labelElements: HTMLLabelElement[];

  describe('when VerificationCodeField rendered', () => {
    beforeEach(() => {
      renderer = render(<VerificationCodeField data-testid="verification-code-field" length={6} />);

      element = renderer.getByTestId('verification-code-field');

      labelElements = Array.from(element.getElementsByTagName('label'));
    });

    describe('if typing 123456', () => {
      const value = '123456';

      beforeEach(async () => {
        await waitFor(() => userEvent.type(renderer.getByRole('textbox'), value));
      });

      it('each character should be content of label', async () => {
        labelElements.map((labelElement, index) => expect(labelElement.textContent).toStrictEqual(value[index]));
      });
    });
  });
});
