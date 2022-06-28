import type { ReactRenderer } from '@class101/design-system-utils';
import { createReactRenderer } from '@class101/design-system-utils';
import { ThemeProvider } from '../ThemeProvider';
import { Box } from './Box';

describe('<Box />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('as prop', () => {
    describe('when empty box created', () => {
      beforeEach(() => {
        renderer = render(<Box />);
      });

      it('div element created', () => {
        expect(renderer.container.querySelector('div')).toBeTruthy();
      });

      it('match snapshot', () => {
        expect(renderer.container).toMatchSnapshot();
      });
    });

    describe('when span box created', () => {
      beforeEach(() => {
        renderer = render(<Box as="span" />);
      });

      it('span element created', () => {
        expect(renderer.container.querySelector('span')).toBeTruthy();
      });

      it('match snapshot', () => {
        expect(renderer.container).toMatchSnapshot();
      });
    });
  });

  describe('base prop', () => {
    describe('when function component box created', () => {
      beforeEach(() => {
        const Component = (props: any) => (
          <span {...props}>
            <div />
          </span>
        );

        renderer = render(<Box base={Component} id="component" />);
      });

      it('custom element created', () => {
        expect(renderer.container.querySelector('span')).toBeTruthy();

        expect(renderer.container.querySelector('span > div')).toBeTruthy();
      });

      it('id prop injected', () => {
        expect(renderer.container.querySelector('span')?.id).toBe('component');
      });

      it('match snapshot', () => {
        expect(renderer.container).toMatchSnapshot();
      });
    });
  });

  describe('default style', () => {
    describe('when styled box created', () => {
      beforeEach(() => {
        renderer = render(<Box width={300} height={300} backgroundColor="red" />);
      });

      it('css apply on div', () => {
        expect(renderer.container.querySelector('div')).toHaveStyleRule('width', '300px');

        expect(renderer.container.querySelector('div')).toHaveStyleRule('height', '300px');

        expect(renderer.container.querySelector('div')).toHaveStyleRule('background-color', 'red');
      });

      it('match snapshot', () => {
        expect(renderer.container).toMatchSnapshot();
      });
    });

    describe('when themed box created', () => {
      beforeEach(() => {
        renderer = render(
          <ThemeProvider
            theme={{ breakpoints: [200, 400], colors: { light: { primary: 'orange', informative: 'black' } } }}
          >
            <Box width={[300, 400]} height={[200, 300]} backgroundColor={['primary', 'informative']} />
          </ThemeProvider>
        );
      });

      it('default style apply on div', () => {
        expect(renderer.container.querySelector('div')).toHaveStyleRule('width', '300px');

        expect(renderer.container.querySelector('div')).toHaveStyleRule('height', '200px');

        expect(renderer.container.querySelector('div')).toHaveStyleRule('background-color', 'orange');
      });

      it('responsive style apply on div', () => {
        expect(renderer.container.querySelector('div')).toHaveStyleRule('width', '400px', {
          media: '@media screen and (min-width: 200px)',
        });

        expect(renderer.container.querySelector('div')).toHaveStyleRule('height', '300px', {
          media: '@media screen and (min-width: 200px)',
        });

        expect(renderer.container.querySelector('div')).toHaveStyleRule('background-color', 'black', {
          media: '@media screen and (min-width: 200px)',
        });
      });

      it('match snapshot', () => {
        expect(renderer.container).toMatchSnapshot();
      });
    });
  });
});
