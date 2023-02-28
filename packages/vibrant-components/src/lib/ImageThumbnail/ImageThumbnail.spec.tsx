import { ImageThumbnail } from '@vibrant-ui/components';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';

describe('<ImageThumbnail />', () => {
  const { render } = createReactRenderer();
  let element: HTMLElement;
  let renderer: ReactRenderer;

  describe('when width prop', () => {
    describe('has no initial values', () => {
      beforeEach(() => {
        renderer = render(
          <ImageThumbnail
            aspectRatio={1}
            src="https://cdn.class101.net/images/eaaf7c33-fafa-44bf-bc5a-a1b426923df1/640xauto.webp"
          />
        );

        element = renderer.getByTestId('image-thumbnail');
      });

      it("image width value is '100%'", () => {
        expect(element).toHaveStyleRule('width', '100%');
      });
    });

    describe("is set as '40%'", () => {
      beforeEach(() => {
        renderer = render(
          <ImageThumbnail
            aspectRatio={1}
            src="https://cdn.class101.net/images/eaaf7c33-fafa-44bf-bc5a-a1b426923df1/640xauto.webp"
            width="40%"
          />
        );

        element = renderer.getByTestId('image-thumbnail');
      });

      it("width value is '40%'", () => {
        expect(element).toHaveStyleRule('width', '40%');
      });
    });
  });

  describe('when aspectRatio prop', () => {
    describe('is set as 1', () => {
      beforeEach(() => {
        renderer = render(
          <ImageThumbnail
            aspectRatio={1}
            src="https://cdn.class101.net/images/eaaf7c33-fafa-44bf-bc5a-a1b426923df1/640xauto.webp"
          />
        );

        element = renderer.getByTestId('image-thumbnail');
      });

      it('aspect ratio should be 1', () => {
        expect(element).toHaveStyleRule('width', '100%');
      });
    });

    describe('is set as 3/4', () => {
      beforeEach(() => {
        renderer = render(
          <ImageThumbnail
            aspectRatio={3 / 4}
            src="https://cdn.class101.net/images/eaaf7c33-fafa-44bf-bc5a-a1b426923df1/640xauto.webp"
          />
        );

        element = renderer.getByTestId('image-thumbnail');
      });

      it('aspect ratio should be 1', () => {
        expect((element.clientWidth / element.clientHeight).toFixed(1)).toEqual((3 / 4).toFixed(1));
      });
    });

    describe('when dim prop', () => {
      describe('is set as true', () => {
        beforeEach(() => {
          renderer = render(
            <ImageThumbnail
              dim={true}
              aspectRatio={1}
              src="https://cdn.class101.net/images/eaaf7c33-fafa-44bf-bc5a-a1b426923df1/640xauto.webp"
            />
          );
        });

        it('overlay box exists', () => {
          expect(renderer.queryByTestId('image-thumbnail-overlay')).toBeTruthy();
        });
      });

      describe('is set as false', () => {
        beforeEach(() => {
          renderer = render(
            <ImageThumbnail
              dim={false}
              aspectRatio={1}
              src="https://cdn.class101.net/images/eaaf7c33-fafa-44bf-bc5a-a1b426923df1/640xauto.webp"
            />
          );
        });

        it('overlay box does not exists', () => {
          expect(renderer.queryByTestId('image-thumbnail-overlay')).toBeFalsy();
        });
      });
    });
  });

  describe('when alt prop', () => {
    describe("is set as 'vibrant-test-code-image'", () => {
      beforeEach(() => {
        renderer = render(
          <ImageThumbnail
            alt="vibrant-test-code-image"
            aspectRatio={1}
            src="https://cdn.class101.net/images/eaaf7c33-fafa-44bf-bc5a-a1b426923df1/640xauto.webp"
          />
        );

        element = renderer.getByTestId('image-thumbnail-content');
      });

      it("image width value is '100%'", () => {
        expect(element).toHaveProperty('alt', 'vibrant-test-code-image');
      });
    });
  });

  describe('when loading prop', () => {
    describe("is set as 'lazy'", () => {
      beforeEach(() => {
        renderer = render(
          <ImageThumbnail
            alt="vibrant-test-code-image"
            loading="lazy"
            aspectRatio={1}
            src="https://cdn.class101.net/images/eaaf7c33-fafa-44bf-bc5a-a1b426923df1/640xauto.webp"
          />
        );

        element = renderer.getByTestId('image-thumbnail-content');
      });

      it("image width value is '100%'", () => {
        expect(element).toHaveProperty('loading', 'lazy');
      });
    });
  });
});
