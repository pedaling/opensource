import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { VStack } from './VStack';

describe('<HStack />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when HStack rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <VStack data-testid="vstack" alignment="center">
          <Box width={20} height={20} />
          <Box width={20} height={20} />
        </VStack>
      );

      element = await renderer.findByTestId('vstack');
    });

    it('stack alignItem is center', () => {
      expect(element).toHaveStyleRule('align-items', 'center');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
