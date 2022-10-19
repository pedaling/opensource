import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing';
import { createReactRenderer } from '@vibrant-ui/utils/testing';
import { VStack } from './VStack';

describe('<VStack />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when VStack rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <VStack data-testid="vstack" alignVertical="center">
          <Box width={20} height={20} />
          <Box width={20} height={20} />
        </VStack>
      );

      element = await renderer.findByTestId('vstack');
    });

    it('stack alignItem is center', () => {
      expect(element).toHaveStyleRule('justify-content', 'center');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when VStack vertical and horizontal alignment varies', () => {
    beforeEach(async () => {
      renderer = render(
        <VStack data-testid="hstack-alignment" alignVertical="space-between" alignHorizontal="start">
          <Box width={20} height={20} />
          <Box width={20} height={20} />
        </VStack>
      );

      element = await renderer.findByTestId('hstack-alignment');
    });

    it('stack align-items is start', () => {
      expect(element).toHaveStyleRule('align-items', 'flex-start');
    });

    it('stack justify-content is space-between', () => {
      expect(element).toHaveStyleRule('justify-content', 'space-between');
    });
  });
});
