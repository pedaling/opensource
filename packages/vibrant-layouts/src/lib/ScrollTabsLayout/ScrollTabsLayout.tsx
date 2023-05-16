import { Children, isValidElement, useCallback, useRef, useState } from 'react';
import { Tab, VStack } from '@vibrant-ui/components';
import type { ComponentWithRef } from '@vibrant-ui/core';
import { Box } from '@vibrant-ui/core';
import { getElementRect } from '@vibrant-ui/utils';
import type { LayoutEvent } from '@vibrant-ui/utils';
import type { ScrollTabPanelProps } from './ScrollTabPanel';
import { ScrollTabPanel } from './ScrollTabPanel';
import type { ScrollTabsLayoutProps } from './ScrollTabsLayoutProps';
import { withScrollTabsLayoutVariation } from './ScrollTabsLayoutProps';
import { ViewableScrollTabPanel } from './ViewableScrollTabPanel';

export const ScrollTabsLayout = withScrollTabsLayoutVariation(
  ({
    testId = 'scroll-tabs-layout',
    header,
    children,
    onTabChange,
    TabsComponent,
    tabFlexGrow,
    tabFlexShrink,
    tabsScrollHorizontal,
    tabOverflow,
  }) => {
    const elementChildren = Children.toArray(children).filter(isValidElement<ScrollTabPanelProps>);
    const tabs = elementChildren.map(({ props }) => props) ?? [];

    const [tabViewableStates, setTabViewableStates] = useState(new Array(tabs.length).fill(false));
    const activeTabIndex = tabViewableStates.findIndex(state => state === true);

    const [tabsHeight, setTabsHeight] = useState(0);
    const tabItemElementsRef = useRef<(HTMLElement | null)[]>(new Array(tabs.length).fill(null));

    const handleTabStateChange = (index: number, viewable: boolean) => {
      setTabViewableStates(value => [...value.slice(0, index), viewable, ...value.slice(index + 1)]);
    };

    const handleContainerLayoutChange = useCallback(({ height }: LayoutEvent) => {
      setTabsHeight(height);
    }, []);

    return (
      <VStack width="100%" data-testid={testId}>
        {header}
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
        >
          {tabs?.map(({ title, tabId }, tabIndex) => (
            <Box key={tabId} flexGrow={tabFlexGrow} flexShrink={tabFlexShrink}>
              <Tab
                id={tabId}
                title={title}
                active={activeTabIndex === tabIndex}
                onClick={async () => {
                  const { y } = await getElementRect(tabItemElementsRef.current[tabIndex]);

                  window.scrollTo({ top: y + window.scrollY - (tabsHeight - 1) });

                  onTabChange?.({ id: tabId, title });
                }}
              />
            </Box>
          ))}
        </TabsComponent>
        {elementChildren.map((child, index) => (
          <ViewableScrollTabPanel
            ref={ref => (tabItemElementsRef.current[index] = ref)}
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
  Item: ComponentWithRef<ScrollTabPanelProps>;
};

ScrollTabsLayout.Item = ScrollTabPanel;
