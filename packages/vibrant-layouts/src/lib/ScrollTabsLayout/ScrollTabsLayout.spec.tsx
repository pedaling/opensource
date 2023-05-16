import { fireEvent, waitFor } from '@testing-library/react';
import { Title } from '@vibrant-ui/components';
import { Box } from '@vibrant-ui/core';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { ScrollTabsLayout } from './ScrollTabsLayout';

describe('<ScrollTabsLayout />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  describe('when the first tab clicked', () => {
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

      const element = renderer.getByRole('tab', { name: 'Second Tab' });

      fireEvent.click(element);
    });

    it('The first tab should be active', async () => {
      await waitFor(() => expect(renderer.getByRole('tab', { name: 'First Tab', selected: true })).toBeTruthy());
    });

    it('onTabChange should be called with clicked tab id and title', async () => {
      await waitFor(() => expect(mockOnTabChange).toBeCalledWith({ id: 'first', title: 'First Tab' }));
    });
  });
});
