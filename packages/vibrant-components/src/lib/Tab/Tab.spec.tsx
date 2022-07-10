import userEvent from '@testing-library/user-event';
import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { Tab } from './Tab';

describe('<Tab />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when Tab rendered', () => {
    const mockOnClick = jest.fn(() => {});

    beforeEach(async () => {
      renderer = render(<Tab data-testid="tab" id="tab1" title="tab1" onClick={mockOnClick} />);

      element = await renderer.findByTestId('tab');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });

    describe('click tab', () => {
      beforeEach(async () => {
        await userEvent.click(element);
      });

      it('onClick called', () => {
        expect(mockOnClick).toBeCalledWith('tab1');
      });
    });
  });
});
