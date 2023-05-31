import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Body } from '../../Body';
import { DrawerFooter } from './DrawerFooter';

describe('<DrawerFooter />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when DrawerFooter is rendering', () => {
    beforeEach(async () => {
      renderer = render(
        <DrawerFooter>
          <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="stretch">
            <Body level={3}>Drawer Footer test</Body>
          </Box>
        </DrawerFooter>
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
