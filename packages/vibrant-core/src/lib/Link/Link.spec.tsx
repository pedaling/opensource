import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Box } from '../Box';
import { ConfigProvider } from '../ConfigProvider';
import { Text } from '../Text';
import { Link } from './Link';

describe('<Link />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('when href provided', () => {
    beforeEach(() => {
      renderer = render(<Link href="https://www.vibrant-design.com" />);
    });

    it('should render link with href attribute', () => {
      expect(renderer.getByRole('link').getAttribute('href')).toBe('https://www.vibrant-design.com');
    });
  });

  describe('when isExternal is true', () => {
    beforeEach(() => {
      renderer = render(<Link href="https://www.vibrant-design.com" isExternal={true} />);
    });

    it('should open link with new tab', () => {
      expect(renderer.getByRole('link').getAttribute('target')).toBe('_blank');
    });
  });

  describe('when link component provided through ConfigProvider', () => {
    beforeEach(() => {
      renderer = render(
        <ConfigProvider
          dependencies={{
            link: ({ href }) => (
              <Box>
                <Text data-testid="link-text">{href}</Text>
              </Box>
            ),
          }}
        >
          <Link href="https://www.vibrant-design.com" />
        </ConfigProvider>
      );
    });

    it('it should be rendered with injected link component', () => {
      expect(renderer.getByTestId('link-text').textContent).toEqual('https://www.vibrant-design.com');
    });
  });
});
