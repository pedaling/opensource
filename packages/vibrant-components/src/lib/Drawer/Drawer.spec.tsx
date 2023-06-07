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
});
