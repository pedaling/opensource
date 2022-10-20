import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { HStack } from './HStack';

describe('<HStack />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;
  let element: HTMLElement;

  describe('when HStack rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <HStack data-testid="hstack" alignHorizontal="center">
          <Box width={20} height={20} />
          <Box width={20} height={20} />
        </HStack>
      );

      element = await renderer.findByTestId('hstack');
    });

    it('stack justifyContent is center', () => {
      expect(element).toHaveStyleRule('justify-content', 'center');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when HStack vertical and horizontal alignment varies', () => {
    beforeEach(async () => {
      renderer = render(
        <HStack data-testid="hstack-alignment" alignVertical="end" alignHorizontal="space-between">
          <Box width={20} height={20} />
          <Box width={20} height={20} />
        </HStack>
      );

      element = await renderer.findByTestId('hstack-alignment');
    });

    it('stack align-items is end', () => {
      expect(element).toHaveStyleRule('align-items', 'flex-end');
    });

    it('stack justify-content is space-between', () => {
      expect(element).toHaveStyleRule('justify-content', 'space-between');
    });
  });
});
