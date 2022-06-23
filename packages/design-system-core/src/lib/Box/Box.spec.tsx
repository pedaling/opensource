import { createRenderer } from '@class101/design-system-utils';
import { ThemeProvider } from '../ThemeProvider';
import { Box } from './Box';

describe('<Box />', () => {
  const { render } = createRenderer();
  let container: HTMLElement;

  describe('as prop', () => {
    describe('when empty box created', () => {
      beforeEach(() => {
        container = render(<Box />).container;
      });

      it('div element created', () => {
        expect(container.querySelector('div')).toBeTruthy();
      });

      it('match snapshot', () => {
        expect(container).toMatchSnapshot();
      });
    });

    describe('when span box created', () => {
      beforeEach(() => {
        container = render(<Box as="span" />).container;
      });

      it('span element created', () => {
        expect(container.querySelector('span')).toBeTruthy();
      });

      it('match snapshot', () => {
        expect(container).toMatchSnapshot();
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

        container = render(<Box base={Component} id="component" />).container;
      });

      it('custom element created', () => {
        expect(container.querySelector('span')).toBeTruthy();

        expect(container.querySelector('span > div')).toBeTruthy();
      });

      it('id prop injected', () => {
        expect(container.querySelector('span')?.id).toBe('component');
      });

      it('match snapshot', () => {
        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('default style', () => {
    describe('when styled box created', () => {
      beforeEach(() => {
        container = render(<Box width={300} height={300} backgroundColor="red" />).container;
      });

      it('css apply on div', () => {
        expect(container.querySelector('div')).toHaveStyleRule('width', '300px');

        expect(container.querySelector('div')).toHaveStyleRule('height', '300px');

        expect(container.querySelector('div')).toHaveStyleRule('background-color', 'red');
      });

      it('match snapshot', () => {
        expect(container).toMatchSnapshot();
      });
    });

    describe('when themed box created', () => {
      beforeEach(() => {
        container = render(
          <ThemeProvider theme={{ breakpoints: ['200px', '400px'], colors: { primary: 'orange', secondary: 'black' } }}>
            <Box width={[300, 400]} height={[200, 300]} backgroundColor={['primary', 'secondary']} />
          </ThemeProvider>
        ).container;
      });

      it('default style apply on div', () => {
        expect(container.querySelector('div')).toHaveStyleRule('width', '300px');

        expect(container.querySelector('div')).toHaveStyleRule('height', '200px');

        expect(container.querySelector('div')).toHaveStyleRule('background-color', 'orange');
      });

      it('responsive style apply on div', () => {
        expect(container.querySelector('div')).toHaveStyleRule('width', '400px', {
          media: '@media screen and (min-width: 200px)',
        });

        expect(container.querySelector('div')).toHaveStyleRule('height', '300px', {
          media: '@media screen and (min-width: 200px)',
        });

        expect(container.querySelector('div')).toHaveStyleRule('background-color', 'black', {
          media: '@media screen and (min-width: 200px)',
        });
      });

      it('match snapshot', () => {
        expect(container).toMatchSnapshot();
      });
    });
  });
});
