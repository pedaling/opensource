import { fireEvent, waitFor } from '@testing-library/react';
import { baseTheme } from '@vibrant-ui/theme';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { ContainedButton } from './ContainedButton';

describe('<ContainedButton />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;
  let mockOnClick: jest.Mock;

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  describe('when primary kind and size sm rendered', () => {
    beforeEach(() => {
      renderer = render(
        <ContainedButton data-testid="primary-sm-button" size="sm" kind="primary" onClick={() => mockOnClick}>
          Click Me
        </ContainedButton>
      );

      element = renderer.getByTestId('primary-sm-button');
    });

    it('should match default layout style', () => {
      renderer.debug();

      expect(element).toHaveStyleRule('border-radius', '2px');

      expect(element.children[1]).toHaveStyleRule('padding-left', '8px');

      expect(element.children[1]).toHaveStyleRule('padding-right', '8px');

      expect(element).toHaveStyleRule('background-color', '#ff5d00');

      expect(element.clientHeight).toBe(30);
    });

    it('body1 bold style applied', () => {
      const themeTypography = baseTheme.typography;

      const text = renderer.getByTestId('button-text');

      expect(text).toHaveStyleRule('font-size', themeTypography.body4.fontSize);

      expect(text).toHaveStyleRule('font-weight', baseTheme.typographyWeight.bold.fontWeight);

      expect(text).toHaveStyleRule('line-height', themeTypography.body4.lineHeight);
    });

    describe('when button clicked', () => {
      beforeEach(() => {
        fireEvent.click(renderer.getByTestId('primary-sm-button'));
      });

      it('onClick called', () => {
        waitFor(() => expect(mockOnClick).toBeCalled());
      });
    });

    describe('when mouse hovers in', () => {
      beforeEach(() => {
        fireEvent.mouseOver(renderer.getByTestId('primary-sm-button'));
      });

      it('overlay color is 0.025', () => {
        expect((element.firstChild as HTMLElement)?.style.opacity).toBe('0.025');
      });
    });
  });
});
