import { baseTheme } from '@vibrant-ui/theme';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Body } from './Body';

describe('<Body />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  let element: HTMLElement;

  describe('when Body with level 3 rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Body data-testid="body" level={3}>
          Hello World
        </Body>
      );

      element = await renderer.findByTestId('body');
    });

    it('body3 style applied', () => {
      const themeTypography = baseTheme.typography;

      expect(element).toHaveStyleRule('font-size', themeTypography.body3.fontSize);

      expect(element).toHaveStyleRule('line-height', themeTypography.body3.lineHeight);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
