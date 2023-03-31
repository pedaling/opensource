import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { BrowserTesting, createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { OutlinedButton } from './OutlinedButton';
import type { OutlinedButtonProps } from './OutlinedButtonProps';

describe('<OutlinedButton />', () => {
  const { render } = createReactRenderer();

  let props: OutlinedButtonProps = {
    size: 'md',
    disabled: false,
    full: false,
    disclosure: false,
    children: 'OutlinedButton',
  };

  let subject = () => {
    const renderer = render(<OutlinedButton {...props} />);

    return renderer.container;
  };

  describe('when the size property is responsive', () => {
    subject = () => {
      const renderer = render(<OutlinedButton {...props} />);

      return renderer.getByText(props.children?.toString() ?? '');
    };

    beforeEach(async () => {
      props = {
        ...props,
        size: ['sm', 'md', 'lg'],
      };
    });

    describe('and the viewport is mobile', () => {
      beforeAll(async () => {
        await BrowserTesting.resize(320, 768);
      });

      it('should have bold font weight', async () => {
        expect(subject()).toHaveStyleRule('font-weight', '700');
      });

      it('should not have font weight in media query', async () => {
        expect(subject()).not.toHaveStyleRule('font-weight', expect.any(String), {
          media: '(min-width: 0px)',
        });
      });
    });

    describe('and the viewport is tablet', () => {
      beforeAll(async () => {
        await BrowserTesting.resize(640, 768);
      });

      it('should have bold font weight', async () => {
        expect(subject()).toHaveStyleRule('font-weight', '700');
      });

      it('should not have font weight in media query', async () => {
        expect(subject()).not.toHaveStyleRule('font-weight', expect.any(String), {
          media: '(min-width: 640px)',
        });
      });
    });
  });

  describe('when href provided', () => {
    let renderer: ReactRenderer;

    beforeEach(() => {
      renderer = render(<OutlinedButton {...props} href="https://www.vibrant-design.com" />);
    });

    it('should render link with href attribute', () => {
      expect(renderer.getByRole('link').getAttribute('href')).toBe('https://www.vibrant-design.com');
    });
  });

  it('match snapshot', async () => {
    expect(subject()).toMatchSnapshot();
  });
});
