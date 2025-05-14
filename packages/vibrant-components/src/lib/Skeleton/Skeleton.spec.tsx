import { baseTheme } from '@vibrant-ui/theme';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Skeleton } from './Skeleton';

describe('<Skeleton />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when basic Skeleton is rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Skeleton data-testid="skeleton" width={100} height={50} rounded="md" />
      );

      element = await renderer.findByTestId('skeleton');
    });

    it('should have correct dimensions and styles', () => {
      expect(element).toHaveStyleRule('width', '100px');
      expect(element).toHaveStyleRule('height', '50px');
      expect(element).toHaveStyleRule('background-color', baseTheme.colors.light.overlay);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when Skeleton.Text is rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Skeleton.Text data-testid="skeleton-text" lines={3} typography="body1" />
      );
    });

    it('should render correct number of lines', async () => {
      const lines = await renderer.findAllByRole('generic');
      // VStack + (3 lines * 2 components per line)
      expect(lines.length).toBeGreaterThan(3);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when Skeleton.Avatar is rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Skeleton.Avatar data-testid="skeleton-avatar" size="md" />
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when Skeleton.Button is rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Skeleton.Button data-testid="skeleton-button" size="md" />
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when Skeleton.Image is rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Skeleton.Image data-testid="skeleton-image" width={200} ratio={1.5} />
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
}); 