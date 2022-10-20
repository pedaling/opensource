import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { NotificationBadge } from './NotificationBadge';

describe('<NotificationBadge />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when NotificationBadge with number rendered', () => {
    beforeEach(async () => {
      renderer = render(<NotificationBadge data-testid="notificationBadge" kind="number" count={5} />);

      element = await renderer.getByTestId('notificationBadge');
    });

    it('count rendered', () => {
      expect(element.children[0].tagName).toBe('SPAN');

      expect(element.children[0].textContent).toBe('5');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when NotificationBadge with dot rendered', () => {
    beforeEach(async () => {
      renderer = render(<NotificationBadge data-testid="notificationBadge" kind="dot" size="md" />);

      element = await renderer.findByTestId('notificationBadge');
    });

    it('children is empty', () => {
      expect(element.childElementCount).toBe(0);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
