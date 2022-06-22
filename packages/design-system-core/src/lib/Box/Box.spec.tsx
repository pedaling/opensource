import { createRenderer } from '@class101/design-system-utils';
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
});
