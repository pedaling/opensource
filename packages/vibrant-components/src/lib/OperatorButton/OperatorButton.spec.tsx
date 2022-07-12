import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Icon } from '@vibrant-ui/icons';
import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { OperatorButton } from './OperatorButton';

describe('<OperatorButton />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;
  let mockOnClick: jest.Mock;

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  describe('when OperatorButton rendered', () => {
    beforeEach(() => {
      renderer = render(
        <OperatorButton data-testid="operatorButton" IconComponent={Icon.Add.Regular} onClick={mockOnClick} />
      );

      element = renderer.getByTestId('operatorButton');
    });

    describe('when button clicked', () => {
      beforeEach(async () => {
        await waitFor(() => userEvent.click(element));
      });

      it('onClick called', () => {
        expect(mockOnClick).toBeCalled();
      });
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
