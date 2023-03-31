import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { GhostButton } from './GhostButton';

describe('<GhostButton />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('when href provided', () => {
    beforeEach(() => {
      renderer = render(
        <GhostButton size="md" href="https://www.vibrant-design.com">
          Click me
        </GhostButton>
      );
    });

    it('should render link with href attribute', () => {
      expect(renderer.getByRole('link').getAttribute('href')).toBe('https://www.vibrant-design.com');
    });
  });
});
