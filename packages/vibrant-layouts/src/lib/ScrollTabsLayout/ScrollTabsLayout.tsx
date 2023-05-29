import { Children, isValidElement, useCallback, useRef, useState } from 'react';
import { Tab, VStack } from '@vibrant-ui/components';
import type { ComponentWithRef } from '@vibrant-ui/core';
import { Box } from '@vibrant-ui/core';
import { getElementRect } from '@vibrant-ui/utils';
import type { LayoutEvent } from '@vibrant-ui/utils';
import type { ScrollTabPanelProps } from './ScrollTabPanel';
import { ScrollTabPanel } from './ScrollTabPanel';
import { ScrollTabsHeader } from './ScrollTabsHeader';
import type { ScrollTabsHeaderProps } from './ScrollTabsHeader/ScrollTabsHeaderProps';
import type { ScrollTabsLayoutProps } from './ScrollTabsLayoutProps';
import { withScrollTabsLayoutVariation } from './ScrollTabsLayoutProps';
import { ViewableScrollTabPanel } from './ViewableScrollTabPanel';

export const ScrollTabsLayout = withScrollTabsLayoutVariation(
  ({
    testId = 'scroll-tabs-layout',
    children,
    onTabChange,
    TabsComponent,
    tabFlexGrow,
    tabFlexShrink,
    tabsScrollHorizontal,
    tabOverflow,
    tabsHideScroll,
  }) => {
    const headerElement = Children.toArray(children)
      .filter(isValidElement)
      .find(child => child.type === ScrollTabsHeader);
    const tabElements = Children.toArray(children)
      .filter(isValidElement<ScrollTabPanelProps>)
      .filter(child => child.type === ScrollTabPanel);

    const [tabViewableStates, setTabViewableStates] = useState(new Array(tabElements.length).fill(false));
    const activeTabIndex = tabViewableStates.findIndex(state => state === true);

    const [tabsHeight, setTabsHeight] = useState(0);
    const tabElementsRef = useRef<(HTMLElement | null)[]>(new Array(tabElements.length).fill(null));

    const handleTabStateChange = (index: number, viewable: boolean) => {
      setTabViewableStates(value => [...value.slice(0, index), viewable, ...value.slice(index + 1)]);
    };

    const handleContainerLayoutChange = useCallback(({ height }: LayoutEvent) => {
      setTabsHeight(height);
    }, []);

    return (
      <VStack width="100%" data-testid={testId}>
        {headerElement}
        <TabsComponent
          role="tablist"
          width="100%"
          position="web_sticky"
          top={0}
          flexDirection="row"
          px={20}
          zIndex={1}
          backgroundColor="background"
          onLayout={handleContainerLayoutChange}
          horizontal={tabsScrollHorizontal}
          overflow={tabOverflow}
          hideScroll={tabsHideScroll}
        >
          {tabElements.map(({ props: { tabId, title } }, tabIndex) => (
            <Box
              key={tabId}
              flexGrow={tabFlexGrow}
              flexShrink={tabFlexShrink}
              mr={tabIndex !== tabElements.length - 1 ? [20, 20, 28] : 0}
            >
              <Tab
                id={tabId}
                title={title}
                active={activeTabIndex === tabIndex}
                onClick={async () => {
                  const { y } = await getElementRect(tabElementsRef.current[tabIndex]);

                  window.scrollTo({ top: y + window.scrollY - (tabsHeight - 1) });

                  onTabChange?.({ id: tabId, title });
                }}
              />
            </Box>
          ))}
        </TabsComponent>
        {tabElements.map((child, index) => (
          <ViewableScrollTabPanel
            ref={ref => (tabElementsRef.current[index] = ref)}
            key={child.props.tabId}
            offsetTop={tabsHeight}
            onViewableChange={viewable => handleTabStateChange(index, viewable)}
          >
            {child}
          </ViewableScrollTabPanel>
        ))}
      </VStack>
    );
  }
) as ComponentWithRef<ScrollTabsLayoutProps> & {
  Header: ComponentWithRef<ScrollTabsHeaderProps>;
  Item: ComponentWithRef<ScrollTabPanelProps>;
};

ScrollTabsLayout.Header = ScrollTabsHeader;

ScrollTabsLayout.Item = ScrollTabPanel;
