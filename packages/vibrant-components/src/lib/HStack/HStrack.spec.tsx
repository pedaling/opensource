import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { HStack } from './HStack';

describe('<HStack />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when HStack rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <HStack data-testid="hstack" alignment="center">
          <Box width={20} height={20} />
          <Box width={20} height={20} />
        </HStack>
      );

      element = await renderer.findByTestId('hstack');
    });

    it('stack alignItem is center', () => {
      expect(element).toHaveStyleRule('justify-content', 'center');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
