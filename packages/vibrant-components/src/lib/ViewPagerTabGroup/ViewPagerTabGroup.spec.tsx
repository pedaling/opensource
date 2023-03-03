import { fireEvent, waitFor } from '@testing-library/react';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { calculateDistance, createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import { ViewPagerTabGroup } from './ViewPagerTabGroup';

describe('<ViewPagerTabGroup />', () => {
  const mockOnTabChange = jest.fn();
  const { render } = createReactRenderer();
  let element: HTMLElement;
  let renderer: ReactRenderer;

  describe('when tabSpacing prop', () => {
    describe('is set with 40', () => {
      beforeEach(() => {
        renderer = render(
          <ViewPagerTabGroup tabSpacing={40}>
            <ViewPagerTabGroup.Item
              tabId="first"
              title="First Tab"
              renderContent={() => <HStack width="100%" height="100%" />}
            />

            <ViewPagerTabGroup.Item
              tabId="second"
              title="Second Tab"
              renderContent={() => <HStack width="100%" height="100%" />}
            />
          </ViewPagerTabGroup>
        );
      });

      it('distance between tabs is 40', () => {
        const firstTopBarItem = renderer.getByTestId('top-bar-first');
        const secondTopBarItem = renderer.getByTestId('top-bar-second');

        expect(calculateDistance(firstTopBarItem, secondTopBarItem)).toEqual(40);
      });
    });

    describe('is unset', () => {
      beforeEach(() => {
        renderer = render(
          <ViewPagerTabGroup>
            <ViewPagerTabGroup.Item
              tabId="first"
              title="First Tab"
              testId="first-tab-item"
              renderContent={() => <HStack width="100%" height="100%" />}
            />

            <ViewPagerTabGroup.Item
              tabId="second"
              title="Second Tab"
              testId="second-tab-item"
              renderContent={() => <HStack width="100%" height="100%" />}
            />
          </ViewPagerTabGroup>
        );
      });

      it('distance between tab is 0', () => {
        const firstTopBarItem = renderer.getByTestId('top-bar-first');
        const secondTopBarItem = renderer.getByTestId('top-bar-second');

        expect(calculateDistance(firstTopBarItem, secondTopBarItem)).toEqual(0);
      });
    });
  });

  describe('when selected tab is changed', () => {
    beforeEach(async () => {
      renderer = render(
        <ViewPagerTabGroup onTabChange={mockOnTabChange}>
          <ViewPagerTabGroup.Item tabId="first" title="First Tab" testId="first-tab" renderContent={() => <VStack />} />
          <ViewPagerTabGroup.Item
            tabId="second"
            title="Second Tab"
            testId="second-tab"
            renderContent={() => <VStack />}
          />
        </ViewPagerTabGroup>
      );

      element = renderer.getByTestId('top-bar-second');

      await waitFor(() => fireEvent.click(element));
    });

    it('onTabChanged function should be called', () => {
      expect(mockOnTabChange).toBeCalled();
    });

    it('selected tab content should be shown', () => {
      expect(renderer.queryByTestId('second-tab')).toBeTruthy();
    });

    it('non-selected tab content should not be shown', () => {
      expect(renderer.queryByTestId('first-tab')).toBeFalsy();
    });
  });
});
