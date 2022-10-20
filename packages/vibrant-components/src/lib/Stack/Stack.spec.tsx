import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Stack } from './Stack';

describe('<Stack />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;

  let element: HTMLElement;

  describe('when empty stack rendered', () => {
    beforeEach(async () => {
      renderer = render(<Stack data-testid="stack" direction="vertical" />);

      element = await renderer.findByTestId('stack');
    });

    it('div element created', () => {
      expect(element.tagName).toBe('DIV');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when vertical stack with spacing rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Stack data-testid="stack" spacing={20} direction="vertical">
          <Box width={200} height={200} />
          <Box width={200} height={200} />
        </Stack>
      );

      element = await renderer.findByTestId('stack');
    });

    it('flex-direction is column', async () => {
      expect(element).toHaveStyleRule('flex-direction', 'column');
    });

    it('spacing element with height exists', async () => {
      expect(element.childElementCount).toBe(3);

      expect(element.children[1]).toHaveStyleRule('width', '0');

      expect(element.children[1]).toHaveStyleRule('height', '20px');
    });

    it('match snapshot', async () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when horizontal stack with spacing rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Stack data-testid="stack" direction="horizontal" spacing={20}>
          <Box width={200} height={200} />
          <Box width={200} height={200} />
        </Stack>
      );

      element = await renderer.findByTestId('stack');
    });

    it('flex-direction is row', async () => {
      expect(element).toHaveStyleRule('flex-direction', 'row');
    });

    it('spacing element with width exists', async () => {
      expect(element.childElementCount).toBe(3);

      expect(element.children[1]).toHaveStyleRule('width', '20px');

      expect(element.children[1]).toHaveStyleRule('height', '0');
    });

    it('match snapshot', async () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when responsive direction stack rendered', () => {
    beforeEach(async () => {
      renderer = render(
        <Stack data-testid="stack" direction={['vertical', 'horizontal']} spacing={[20, 30]}>
          <Box width={200} height={200} />
          <Box width={200} height={200} />
        </Stack>
      );

      element = await renderer.findByTestId('stack');
    });

    it('vertical stack used in first breakpoint', () => {
      expect(element).toHaveStyleRule('flex-direction', 'column');

      expect(element.children[1]).toHaveStyleRule('width', '0');

      expect(element.children[1]).toHaveStyleRule('height', '20px');
    });

    it('horizontal stack used in second breakpoint', () => {
      expect(element).toHaveStyleRule('flex-direction', 'row', {
        media: '@media screen and (min-width: 640px)',
      });

      expect(element.children[1]).toHaveStyleRule('width', '30px', {
        media: '@media screen and (min-width: 640px)',
      });

      expect(element.children[1]).toHaveStyleRule('height', '0', {
        media: '@media screen and (min-width: 640px)',
      });
    });

    it('match snapshot', async () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when children is falsy value', () => {
    beforeEach(async () => {
      renderer = render(
        <Stack data-testid="stack" direction="vertical" spacing={20}>
          {false}
          {null}
        </Stack>
      );

      element = await renderer.findByTestId('stack');
    });

    it('space not exists', () => {
      expect(element.childElementCount).toBe(0);
    });
  });
});
