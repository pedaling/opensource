import { baseTheme } from '@vibrant-ui/theme';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Title } from './Title';

describe('<Title />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  let element: HTMLElement;

  describe('when Title with level 3 rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Title data-testid="title" level={3}>
          Hello World
        </Title>
      );

      element = await renderer.findByTestId('title');
    });

    it('title3 style applied', () => {
      const themeTypography = baseTheme.typography;
      const themeTypographyWeight = baseTheme.typographyWeight;

      expect(element).toHaveStyleRule('font-size', themeTypography.title3.fontSize);

      expect(element).toHaveStyleRule(
        'font-weight',
        themeTypographyWeight[themeTypography.title3.fontWeight].fontWeight.toString()
      );

      expect(element).toHaveStyleRule('line-height', themeTypography.title3.lineHeight);
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
