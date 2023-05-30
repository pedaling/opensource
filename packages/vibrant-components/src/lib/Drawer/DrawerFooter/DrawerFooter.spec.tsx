import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Body } from '../../Body';
import { VStack } from '../../VStack';
import { DrawerFooter } from './DrawerFooter';

describe('<DrawerFooter />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  describe('when DrawerFooter is rendering', () => {
    beforeEach(async () => {
      renderer = render(
        <DrawerFooter>
          <VStack>
            <Body level={3}>Drawer Footer test</Body>
          </VStack>
        </DrawerFooter>
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
