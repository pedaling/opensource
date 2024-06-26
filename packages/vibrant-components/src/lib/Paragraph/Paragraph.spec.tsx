import { baseTheme } from '@vibrant-ui/theme';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Paragraph } from './Paragraph';

describe('<Paragraph />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  let element: HTMLElement;

  describe('when Paragraph with level 3 rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Paragraph data-testid="paragraph" level={3}>
          Hello World
        </Paragraph>
      );

      element = await renderer.findByTestId('paragraph');
    });

    it('paragraph3 style applied', () => {
      const themeTypography = baseTheme.typography;

      expect(element).toHaveStyleRule('font-size', themeTypography.paragraph3.fontSize);

      expect(element).toHaveStyleRule('line-height', themeTypography.paragraph3.lineHeight);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
