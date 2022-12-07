import { baseTheme } from '@vibrant-ui/theme';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Display } from './Display';

describe('<Display />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  let element: HTMLElement;

  describe('when Display with level 3 rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Display data-testid="display" level={3}>
          Hello World
        </Display>
      );

      element = await renderer.findByTestId('display');
    });

    it('display3 style applied', () => {
      const themeTypography = baseTheme.typography;

      expect(element).toHaveStyleRule('font-size', themeTypography.display3.fontSize);

      expect(element).toHaveStyleRule('line-height', themeTypography.display3.lineHeight);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
