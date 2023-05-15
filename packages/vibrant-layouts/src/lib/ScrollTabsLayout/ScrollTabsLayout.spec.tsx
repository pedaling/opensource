import { Title } from '@vibrant-ui/components';
import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { ScrollTabsLayout } from './ScrollTabsLayout';

describe('<ScrollTabsLayout />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('when onTabChange provided', () => {
    let mockOnTabChange: jest.Mock<any, any>;

    beforeEach(() => {
      mockOnTabChange = jest.fn();

      renderer = render(
        <ScrollTabsLayout onTabChange={mockOnTabChange}>
          <ScrollTabsLayout.Item tabId="first" title="First Tab">
            <Box height={500}>
              <Title level={3}>First Page</Title>
            </Box>
          </ScrollTabsLayout.Item>
          <ScrollTabsLayout.Item tabId="second" title="Second Tab">
            <Box width="100%" height={500}>
              <Title level={3}>Second Page</Title>
            </Box>
          </ScrollTabsLayout.Item>
        </ScrollTabsLayout>
      );
    });

    describe('after first tab clicked', () => {
      beforeEach(() => {});

      it('onTabChange should be called with clicked tab id and title', () => {
        expect(renderer.getByRole('link').getAttribute('href')).toBe('https://www.vibrant-design.com');
      });
    });
  });
});
