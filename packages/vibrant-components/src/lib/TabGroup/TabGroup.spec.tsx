import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as VibrantCore from '@vibrant-ui/core';
import { baseTheme } from '@vibrant-ui/theme';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Tab } from '../Tab';
import { TabGroup } from './TabGroup';

jest.mock('@vibrant-ui/core', () => ({
  ...jest.requireActual('@vibrant-ui/core'),
  useResponsiveValue: jest.fn().mockReturnValue({ breakpointIndex: 2 }),
}));

describe('<TabGroup />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let element: HTMLElement;

  let mockScrollTo: () => void;

  beforeEach(() => {
    mockScrollTo = jest.fn();

    Element.prototype.scrollTo = mockScrollTo;
  });

  describe('when TabGroup rendered', () => {
    const mockTabChange = jest.fn(() => {});

    beforeEach(() => {
      renderer = render(
        <TabGroup data-testid="tabGroup" tabId="tab1" type="fullWidth" onTabChange={mockTabChange}>
          <Tab data-testid="tab1" id="tab1" title="tab1" />
          <Tab data-testid="tab2" id="tab2" title="tab2" />
          <Tab data-testid="hidden-tab" id="hiddenTab" title="hiddenTab" hidden={true} />
          <Tab data-testid="tab3" id="tab3" title="tab3" />
        </TabGroup>
      );

      element = renderer.getByTestId('tabGroup');
    });

    it('tab1 border bottom rendered', () => {
      const tab1 = renderer.getByTestId('tab1');

      expect(tab1).toHaveStyleRule('border-bottom-color', baseTheme.colors.light.outlineNeutral);
    });

    describe('when tab2 clicked', () => {
      beforeEach(async () => {
        const tab2 = renderer.getByTestId('tab2');

        await waitFor(() => userEvent.click(tab2));
      });

      it('onTabChange with tab2 called', () => {
        expect(mockTabChange).toBeCalledWith('tab2');
      });
    });

    it('hidden tab spacing is hidden', () => {
      expect(element.children[3]).toHaveStyleRule('display', 'none');
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('given viewport width smaller than laptop', () => {
    const mockTabChange = jest.fn(() => {});

    beforeEach(async () => {
      (jest.spyOn(VibrantCore, 'useResponsiveValue') as jest.SpyInstance<{ breakpointIndex: number }>).mockReturnValue({
        breakpointIndex: 1,
      });

      renderer = render(
        <TabGroup data-testid="tabGroup" tabId="tab1" type="fullWidth" onTabChange={mockTabChange}>
          <Tab data-testid="tab1" id="tab1" title="tab1" />
          <Tab data-testid="tab2" id="tab2" title="tab2" />
        </TabGroup>
      );
    });

    it('scrollIntoView not called', async () => {
      expect(mockScrollTo).not.toBeCalled();
    });
  });

  describe('given viewport width bigger than laptop', () => {
    const mockTabChange = jest.fn(() => {});

    beforeEach(async () => {
      (jest.spyOn(VibrantCore, 'useResponsiveValue') as jest.SpyInstance<{ breakpointIndex: number }>).mockReturnValue({
        breakpointIndex: 2,
      });

      renderer = render(
        <TabGroup data-testid="tabGroup" tabId="tab1" type="fullWidth" onTabChange={mockTabChange}>
          <Tab data-testid="tab1" id="tab1" title="tab1" />
          <Tab data-testid="tab2" id="tab2" title="tab2" />
        </TabGroup>
      );
    });

    it('scrollIntoView called', async () => {
      expect(mockScrollTo).toBeCalled();
    });
  });
});
