import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Box } from '../Box';
import { ConfigProvider } from '../ConfigProvider';
import { Image } from '../Image';
import { ThemeProvider } from '../ThemeProvider';

describe('<Image />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('src prop', () => {
    describe('has value', () => {
      beforeEach(() => {
        renderer = render(<Image src="https://cdn.class101.net/images/58037c45-3716-4eb0-9991-d68b4489215d" />);
      });

      it('it should be rendered', () => {
        expect(renderer.getByTestId('image')).toBeTruthy();
      });
    });

    describe('has responsive values', () => {
      beforeEach(() => {
        window.innerWidth = 500;

        renderer = render(
          <ThemeProvider
            theme={{
              breakpoints: [400, 800],
            }}
          >
            <Image
              src={[
                'https://cdn.class101.net/images/58037c45-3716-4eb0-9991-d68b4489215d',
                'https://cdn.class101.net/images/d86d2ab8-0726-403b-9d60-d133f9c5eacd',
              ]}
            />
          </ThemeProvider>
        );
      });

      it('it should render every src components', () => {
        expect(renderer.getAllByTestId('image').length).toEqual(2);
      });

      it('responsive style apply on div', () => {
        expect(renderer.queryAllByTestId('image')[0]).toHaveStyleRule('display', 'none', {
          media: '@media screen and (min-width: 400px)',
        });
      });

      it('responsive style apply on div', () => {
        expect(renderer.queryAllByTestId('image')[1]).toHaveStyleRule('display', 'flex', {
          media: '@media screen and (min-width: 400px)',
        });
      });
    });
  });

  describe('alt prop', () => {
    describe('is set', () => {
      beforeEach(() => {
        renderer = render(
          <Image
            alt="beige-background-image"
            src="https://cdn.class101.net/images/58037c45-3716-4eb0-9991-d68b4489215d"
          />
        );
      });

      it('it should be rendered', () => {
        expect(renderer.getByAltText('beige-background-image')).toBeTruthy();
      });
    });
  });

  describe('draggable prop', () => {
    describe('is set as true', () => {
      beforeEach(() => {
        renderer = render(
          <Image draggable={true} src="https://cdn.class101.net/images/58037c45-3716-4eb0-9991-d68b4489215d" />
        );
      });

      it('it should be draggable', () => {
        expect(renderer.getByTestId('image')).toHaveProperty('draggable', true);
      });
    });

    describe('is unset', () => {
      beforeEach(() => {
        renderer = render(<Image src="https://cdn.class101.net/images/58037c45-3716-4eb0-9991-d68b4489215d" />);
      });

      it('default value is false', () => {
        expect(renderer.getByTestId('image')).toHaveProperty('draggable', false);
      });
    });
  });

  describe('objectFit prop', () => {
    describe('is set as cover', () => {
      beforeEach(() => {
        renderer = render(
          <Image objectFit="cover" src="https://cdn.class101.net/images/58037c45-3716-4eb0-9991-d68b4489215d" />
        );
      });

      it('it should be rendered', () => {
        expect(renderer.getByTestId('image')).toHaveStyleRule('object-fit', 'cover');
      });
    });

    describe('is set as cover', () => {
      beforeEach(() => {
        renderer = render(
          <Image objectFit="fill" src="https://cdn.class101.net/images/58037c45-3716-4eb0-9991-d68b4489215d" />
        );
      });

      it('it should be rendered', () => {
        expect(renderer.getByTestId('image')).toHaveStyleRule('object-fit', 'fill');
      });
    });
  });

  describe('with dependencies', () => {
    describe('when injected component exists', () => {
      const testSrc = 'https://cdn.class101.net/images/58037c45-3716-4eb0-9991-d68b4489215d';

      beforeEach(() => {
        renderer = render(
          <ConfigProvider
            dependencies={{
              image: ({ src, alt = '', width = '100%', height = '100%' }) => (
                <Box as="img" width={width} height={height} src={src as string} alt={alt} />
              ),
            }}
          >
            <Image draggable={true} src={testSrc} width={200} height={200} />
          </ConfigProvider>
        );
      });

      it('it should be rendered with injected image component', () => {
        expect(renderer.getByRole('img')).toHaveProperty('src', testSrc);
      });

      it('it should have styles passed by Image props', () => {
        expect(renderer.getByRole('img')).toHaveStyle({ width: '200px', height: '200px' });
      });
    });
  });
});
