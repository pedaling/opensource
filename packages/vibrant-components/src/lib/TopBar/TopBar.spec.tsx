import { Icon } from '@vibrant-ui/icons';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { TopBar } from './TopBar';

describe('<TopBar />', () => {
  const { render } = createReactRenderer();
  let topBar: HTMLElement;
  let topBarLeftSide: HTMLElement;
  let topBarRightSide: HTMLElement;

  let renderer: ReactRenderer;

  describe("when 'as' prop", () => {
    describe("is set as 'header'", () => {
      beforeEach(() => {
        renderer = render(<TopBar title="My Liked Class" as="header" />);

        topBar = renderer.getByTestId('top-bar');
      });

      it('its as should be set', () => {
        expect(topBar.tagName.toLowerCase()).toEqual('header');
      });

      it('its as should be set', () => {
        expect(topBar.textContent).toEqual('My Liked Class');
      });
    });

    describe("is set as 'div'", () => {
      beforeEach(() => {
        renderer = render(<TopBar title="My Liked Class" as="div" />);

        topBar = renderer.getByTestId('top-bar');
      });

      it('its as should be set', () => {
        expect(topBar.tagName.toLowerCase()).toEqual('div');
      });
    });
  });

  describe("when 'titleAs' prop", () => {
    describe('is unset', () => {
      beforeEach(() => {
        renderer = render(<TopBar title="My Liked Class" />);
      });

      it("its as should be default value 'h1'", () => {
        expect(renderer.getByTestId('top-bar-title').tagName).toEqual('H1');
      });
    });

    describe("is set as 'h3'", () => {
      beforeEach(() => {
        renderer = render(<TopBar title="My Liked Class" titleAs="h3" />);
      });

      it('its as should be set', () => {
        expect(renderer.getByTestId('top-bar-title').tagName).toEqual('H3');
      });
    });
  });

  describe("when 'renderLeft' and 'renderRight' props", () => {
    describe('are rendered', () => {
      beforeEach(() => {
        renderer = render(
          <TopBar
            title="My Liked Class"
            renderRight={() => [<Icon.ChevronLeft.Regular key={1} size={24} />]}
            renderLeft={() => [<Icon.ChevronLeft.Regular key={1} size={24} />]}
          />
        );

        topBarLeftSide = renderer.queryByTestId('top-bar-left-area');

        topBarRightSide = renderer.queryByTestId('top-bar-right-area');
      });

      it('render left should not be shown', () => {
        expect(topBarLeftSide).toBeTruthy();
      });

      it('render right should be shown', () => {
        expect(topBarRightSide).toBeTruthy();
      });

      it('width of left and right area should be same', () => {
        expect(topBarRightSide.clientWidth - topBarLeftSide.clientWidth).toEqual(0);
      });
    });
  });

  describe("when 'kind' prop", () => {
    describe('is set as emphasis', () => {
      beforeEach(() => {
        renderer = render(
          <TopBar
            kind="emphasis"
            title="My Liked Class"
            renderRight={() => [<Icon.ChevronLeft.Regular key={1} size={24} />]}
          />
        );
      });

      it('render right should be shown', () => {
        expect(renderer.queryByTestId('top-bar-right-area')).toBeTruthy();
      });

      it('render left should not be shown', () => {
        expect(renderer.queryByTestId('top-bar-left-area')).toBeFalsy();
      });
    });
  });
});
