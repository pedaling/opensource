import { fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { calculateDistance, createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { ContainedButton } from './ContainedButton';
import { DarkThemeKindVariations, LightThemeKindVariations, SizeVariations } from './ContainedButtonTestSpec';

describe('<ContainedButton />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;
  let iconBox: HTMLElement;
  let textBox: HTMLElement;
  let disclosureBox: HTMLElement;
  let mockOnClick: jest.Mock;

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  describe('In dark theme,', () => {
    describe.each(DarkThemeKindVariations)(
      'when button kind is $kind',
      ({ backgroundColor, contentColor, kind, focusedOpacity, hoverOpacity, pressedOpacity }) => {
        beforeEach(() => {
          renderer = render(
            <ThemeProvider theme={{ mode: 'dark' }}>
              <ContainedButton testId={`${kind}-sm-button`} size="sm" kind={kind} onClick={() => mockOnClick}>
                Click Me
              </ContainedButton>
            </ThemeProvider>
          );

          element = renderer.getByTestId(`${kind}-sm-button`);
        });

        it(`background color should match ${kind}`, () => {
          expect(element).toHaveStyleRule('background-color', backgroundColor);
        });

        it(`text color should match ${kind}`, () => {
          expect(renderer.queryByTestId('button-text')).toHaveStyleRule('color', contentColor);
        });

        describe(`and button clicked`, () => {
          beforeEach(() => {
            fireEvent.click(element);
          });

          it('function should be called', () => {
            waitFor(() => expect(mockOnClick).toBeCalled());
          });

          it('overlay should be shaded', () => {
            waitFor(() => expect(element.firstChild).toHaveStyleRule('opacity', pressedOpacity));
          });
        });

        describe(`and mouse hovered`, () => {
          beforeEach(() => {
            fireEvent.mouseOver(element);
          });

          it('overlay should be shaded', () => {
            waitFor(() => expect(element.firstChild).toHaveStyleRule('opacity', hoverOpacity));
          });

          it('cursor should be pointer', () => {
            expect(element).toHaveStyleRule('cursor', 'pointer');
          });
        });

        describe(`and focused`, () => {
          beforeEach(() => {
            fireEvent.focusIn(element);
          });

          it('overlay should be shaded', () => {
            waitFor(() => expect(element.firstChild).toHaveStyleRule('opacity', focusedOpacity));
          });
        });
      }
    );
  });

  describe('In light theme,', () => {
    describe.each(LightThemeKindVariations)(
      'when button kind is $kind',
      ({ backgroundColor, contentColor, focusedOpacity, hoverOpacity, kind, pressedOpacity }) => {
        beforeEach(() => {
          renderer = render(
            <ThemeProvider theme={{ mode: 'light' }}>
              <ContainedButton testId={`${kind}-sm-button`} size="sm" kind={kind} onClick={() => mockOnClick}>
                Click Me
              </ContainedButton>
            </ThemeProvider>
          );

          element = renderer.getByTestId(`${kind}-sm-button`);
        });

        it(`background color should match ${kind}`, () => {
          expect(element).toHaveStyleRule('background-color', backgroundColor);
        });

        it(`text color should match ${kind}`, () => {
          expect(renderer.queryByTestId('button-text')).toHaveStyleRule('color', contentColor);
        });

        describe(`and button clicked`, () => {
          beforeEach(() => {
            fireEvent.click(element);
          });

          it('function should be called', () => {
            waitFor(() => expect(mockOnClick).toBeCalled());
          });

          it('overlay should be shaded', () => {
            waitFor(() => expect(element.firstChild).toHaveStyleRule('opacity', pressedOpacity));
          });
        });

        describe(`and mouse hovered`, () => {
          beforeEach(() => {
            fireEvent.mouseOver(element);
          });

          it('overlay should be shaded', () => {
            waitFor(() => expect(element.firstChild).toHaveStyleRule('opacity', hoverOpacity));
          });

          it('cursor should be pointer', () => {
            expect(element).toHaveStyleRule('cursor', 'pointer');
          });
        });

        describe(`and focused`, () => {
          beforeEach(() => {
            fireEvent.focusIn(element);
          });

          it('overlay should be shaded', () => {
            waitFor(() => expect(element.firstChild).toHaveStyleRule('opacity', focusedOpacity));
          });
        });
      }
    );
  });

  describe('when only text rendered', () => {
    describe.each(SizeVariations)(
      'and size is $size, ',
      ({ size, fontSize, fontWeight, height, lineHeight, paddingLeft, paddingRight }) => {
        beforeEach(() => {
          renderer = render(
            <ContainedButton testId={`${size}-button`} size={size} kind="primary" onClick={() => mockOnClick}>
              Click Me
            </ContainedButton>
          );

          element = renderer.getByTestId(`${size}-button`);

          textBox = renderer.getByTestId('button-text');
        });

        it('basic layout should be set', () => {
          expect(element.children[1]).toHaveStyleRule('padding-left', paddingLeft);

          expect(element.children[1]).toHaveStyleRule('padding-right', paddingRight);

          expect(element).toHaveStyleRule('border-radius', '2px');

          expect(element.clientHeight).toBe(height);

          expect(textBox).toHaveStyleRule('font-size', fontSize);

          expect(textBox).toHaveStyleRule('font-weight', fontWeight);

          expect(textBox).toHaveStyleRule('line-height', lineHeight);
        });
      }
    );
  });

  describe('when disable', () => {
    beforeEach(() => {
      renderer = render(
        <ContainedButton testId="disable-button" size="sm" kind="primary" onClick={() => mockOnClick} disabled={true}>
          Click Me
        </ContainedButton>
      );

      element = renderer.getByTestId('disable-button');

      textBox = renderer.getByTestId('button-text');
    });

    describe('background and content color', () => {
      it('should be disabled', () => {
        expect(element).toHaveStyleRule('background-color', '#0000001a');

        expect(textBox).toHaveStyleRule('color', '#949494');
      });
    });

    describe(`and button clicked`, () => {
      beforeEach(() => {
        fireEvent.click(element);
      });

      it('function should not be called', () => {
        waitFor(() => expect(mockOnClick).not.toBeCalled());
      });

      it('cursor should be default', () => {
        expect(element).toHaveStyleRule('cursor', 'default');
      });
    });
  });

  describe('when IconComponent and disclosure rendered', () => {
    beforeEach(() => {
      renderer = render(
        <ContainedButton
          testId="disable-button"
          size="xl"
          kind="primary"
          onClick={() => mockOnClick}
          disclosure={true}
          IconComponent={Icon.Photo.Regular}
        >
          Click Me
        </ContainedButton>
      );

      element = renderer.getByTestId('disable-button');

      iconBox = renderer.getByTestId('icon-box');

      textBox = renderer.getByTestId('button-text');

      disclosureBox = renderer.getByTestId('disclosure-box');
    });

    it('icon size should be 20', () => {
      expect(renderer.getByTestId('icon-box').clientHeight).toBe(20);

      expect(renderer.getByTestId('icon-box').clientWidth).toBe(20);
    });

    it('disclosure size should be 18', () => {
      expect(renderer.getByTestId('disclosure-box').clientHeight).toBe(18);

      expect(renderer.getByTestId('disclosure-box').clientWidth).toBe(18);
    });

    it('distance between iconBox and textBox should be 8px', () => {
      expect(calculateDistance(iconBox, textBox)).toBe(8);
    });

    it('distance between textBox and disclosureBox should be 8px', () => {
      expect(calculateDistance(textBox, disclosureBox)).toBe(8);
    });
  });

  describe('when loading status rendered', () => {
    describe.each(SizeVariations)('size is $size', ({ size, spinnerSize }) => {
      beforeEach(() => {
        renderer = render(
          <ContainedButton
            testId="loading-button"
            size={size}
            loading={true}
            kind="primary"
            onClick={() => mockOnClick}
          >
            Click Me
          </ContainedButton>
        );

        element = renderer.getByTestId('loading-box');
      });

      it('spinner should be positioned at center', () => {
        expect(element).toHaveStyleRule('align-items', 'center');

        expect(element).toHaveStyleRule('justify-content', 'center');
      });

      it(`spinner size should be ${spinnerSize}`, () => {
        expect(renderer.getByTestId('loading-box').firstElementChild?.clientHeight).toBe(spinnerSize);
      });
    });
  });
});
