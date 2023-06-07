import { Box, Text } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { DrawerProvider } from '../DrawerContext';
import { DrawerPanel } from './DrawerPanel';

describe('<DrawerPanel />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when component is rendering', () => {
    beforeEach(async () => {
      renderer = render(
        <DrawerPanel defaultSize="30%">
          <Box />
        </DrawerPanel>
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('When size is empty', () => {
    let element: HTMLElement;

    beforeEach(async () => {
      renderer = render(
        <DrawerProvider
          placement="right"
          type="overlay"
          isOpen={true}
          containerSize={1200}
          deliverPanelSize={() => {}}
          panelSizePixel={360}
          togglePanel={() => {}}
        >
          <DrawerPanel>
            <Text>Default is 360</Text>
          </DrawerPanel>
        </DrawerProvider>
      );

      element = await renderer.findByTestId('drawer-panel');
    });

    it('default size is 360', () => {
      expect(element).toHaveStyleRule('width', '360px');
    });
  });
});
