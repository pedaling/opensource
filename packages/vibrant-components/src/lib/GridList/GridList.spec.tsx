import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';

describe('<GridList />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when columns set', () => {
    // beforeEach(async () => {
    //   renderer = render(<NotificationBadge data-testid="notificationBadge" kind="number" count={5} />);
    //   element = await renderer.getByTestId('notificationBadge');
    // });
    // it('count rendered', () => {
    //   expect(element.children[0].tagName).toBe('SPAN');
    //   expect(element.children[0].textContent).toBe('5');
    // });
    it('the number of columns should be columns', () => {});
  });

  describe('when maxRows set', () => {
    // beforeEach(async () => {
    //   renderer = render(<NotificationBadge data-testid="notificationBadge" kind="number" count={5} />);
    //   element = await renderer.getByTestId('notificationBadge');
    // });
    // it('count rendered', () => {
    //   expect(element.children[0].tagName).toBe('SPAN');
    //   expect(element.children[0].textContent).toBe('5');
    // });
    it('items in a row after maxRow should not be displayed', () => {});
  });

  describe('when onEndReached provided and scrolled to end item', () => {
    it('onEndReached should be called', () => {});
    // beforeEach(async () => {
    //   renderer = render(<NotificationBadge data-testid="notificationBadge" kind="number" count={5} />);
    //   element = await renderer.getByTestId('notificationBadge');
    // });
    // it('count rendered', () => {
    //   expect(element.children[0].tagName).toBe('SPAN');
    //   expect(element.children[0].textContent).toBe('5');
    // });
  });
});
