import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { FilterChip } from './FilterChip';

describe('<FilterChip />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('when href provided', () => {
    beforeEach(() => {
      renderer = render(
        <FilterChip size="md" href="https://www.vibrant-design.com">
          Click me
        </FilterChip>
      );
    });

    it('should render link with href attribute', () => {
      expect(renderer.getByRole('link').getAttribute('href')).toBe('https://www.vibrant-design.com');
    });
  });
});
