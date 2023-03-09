import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Image } from '../Image';

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
        renderer = render(
          <Image
            src={[
              'https://cdn.class101.net/images/58037c45-3716-4eb0-9991-d68b4489215d',
              'https://cdn.class101.net/images/d86d2ab8-0726-403b-9d60-d133f9c5eacd',
            ]}
          />
        );
      });

      it('it should render every src components', () => {
        expect(renderer.getAllByTestId('image').length).toEqual(2);
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

  describe('sizes prop', () => {
    describe('is set as cover', () => {
      beforeEach(() => {
        renderer = render(
          <Image
            sizes={[800, 400]}
            src={[
              'https://dummyimage.com/100x100/000/fff',
              'https://dummyimage.com/400x400/000/fff',
              'https://dummyimage.com/800x800/000/fff',
            ]}
          />
        );
      });

      it('it should be rendered', () => {
        expect(renderer.getByTestId('image')).toHaveStyleRule('object-fit', 'fill');
      });
    });
  });
});
