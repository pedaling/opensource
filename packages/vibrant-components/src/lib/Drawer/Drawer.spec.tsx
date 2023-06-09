import { waitFor } from '@testing-library/react';
import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Drawer } from './Drawer';

describe('<Drawer />', () => {
  const { render } = createReactRenderer();

  describe('when Drawer is rendering each placement', () => {
    let placementRightRenderer: ReactRenderer;
    let placementLeftRenderer: ReactRenderer;
    let placementTopRenderer: ReactRenderer;
    let placementBottomRenderer: ReactRenderer;

    beforeEach(async () => {
      placementRightRenderer = render(
        <Drawer type="overlay" placement="right" open={true}>
          <Box />
          <Drawer.Panel defaultSize={320}>
            <Box />
          </Drawer.Panel>
        </Drawer>
      );

      placementLeftRenderer = render(
        <Drawer type="overlay" placement="left" open={true}>
          <Box />
          <Drawer.Panel defaultSize={320}>
            <Box />
          </Drawer.Panel>
        </Drawer>
      );

      placementTopRenderer = render(
        <Drawer type="overlay" placement="top" open={true}>
          <Box />
          <Drawer.Panel defaultSize={320}>
            <Box />
          </Drawer.Panel>
        </Drawer>
      );

      placementBottomRenderer = render(
        <Drawer type="overlay" placement="bottom" open={true}>
          <Box />
          <Drawer.Panel defaultSize={320}>
            <Box />
          </Drawer.Panel>
        </Drawer>
      );
    });

    it('match snapshot', () => {
      expect(placementRightRenderer.container).toMatchSnapshot();

      expect(placementLeftRenderer.container).toMatchSnapshot();

      expect(placementTopRenderer.container).toMatchSnapshot();

      expect(placementBottomRenderer.container).toMatchSnapshot();
    });
  });

  describe('when Drawer type is standard', () => {
    let renderer: ReactRenderer;
    let container: HTMLElement;
    let computedStyle: CSSStyleDeclaration;

    beforeEach(async () => {
      renderer = render(
        <Box width={880}>
          <Drawer type="standard" placement="right" open={true}>
            <Box />
            <Drawer.Panel defaultSize={400}>
              <Box />
            </Drawer.Panel>
          </Drawer>
        </Box>
      );

      container = renderer.getByTestId('drawer-content-container');

      computedStyle = getComputedStyle(container);
    });

    it('content size is shrink', async () => {
      await waitFor(() => expect(computedStyle.width).toEqual('480px'));
    });
  });

  describe('when Drawer type is modal', () => {
    let renderer: ReactRenderer;

    beforeEach(async () => {
      renderer = render(
        <Drawer type="modal" placement="right" open={true}>
          <Box />
          <Drawer.Panel defaultSize={320}>
            <Box />
          </Drawer.Panel>
        </Drawer>
      );
    });

    it('dim element is activate', () => {
      expect(renderer.getByTestId('dim-background')).toHaveStyleRule('background-color', '#000000b2');
    });
  });
});
