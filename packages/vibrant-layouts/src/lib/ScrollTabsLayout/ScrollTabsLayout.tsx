import { Children, isValidElement, useCallback, useRef, useState } from 'react';
import { Tab, VStack } from '@vibrant-ui/components';
import { Box } from '@vibrant-ui/core';
import { getElementRect } from '@vibrant-ui/utils';
import type { LayoutEvent } from '@vibrant-ui/utils';
import type { ScrollTabPanelProps } from './ScrollTabPanel';
import { withScrollTabGroupLayoutVariation } from './ScrollTabsLayoutProps';
import { ViewableScrollTabPanel } from './ViewableScrollTabPanel';

export const ScrollTabGroupLayout = withScrollTabGroupLayoutVariation(
  ({ testId, header, children, tabSpacing, onTabChange }) => {
    const elementChildren = Children.toArray(children).filter(isValidElement<ScrollTabPanelProps>);
    const tabs = elementChildren.map(({ props }) => props) ?? [];

    const [tabStates, setTabStates] = useState(new Array(tabs.length).fill(false));
    const activeTabIndex = tabStates.findIndex(state => state === true);

    const [tabsHeight, setTabsHeight] = useState(0);
    const tabItemElementsRef = useRef<(HTMLElement | null)[]>(new Array(tabs.length).fill(null));

    const handleTabStateChange = (index: number, viewable: boolean) => {
      setTabStates(value => [...value.slice(0, index), viewable, ...value.slice(index + 1)]);
    };

    const handleContainerLayoutChange = useCallback(({ height }: LayoutEvent) => {
      setTabsHeight(height);
    }, []);

    return (
      <VStack width="100%" data-testid={testId}>
        {header}
        <Box
          width="100%"
          position="web_sticky"
          top={0}
          flexDirection="row"
          px={20}
          zIndex={1}
          backgroundColor="background"
          onLayout={handleContainerLayoutChange}
        >
          {tabs?.map(({ title, tabId }, tabIndex) => (
            <Tab
              key={tabId}
              id={tabId}
              title={title}
              active={activeTabIndex === tabIndex}
              onClick={async () => {
                const { y } = await getElementRect(tabItemElementsRef.current[tabIndex]);

                window.scrollTo({ top: y + window.scrollY - (tabsHeight - 1) });

                onTabChange?.({ id: tabId, title });
              }}
            />
          ))}
        </Box>
        <VStack as="article">
          {elementChildren.map((child, index) => (
            <ViewableScrollTabPanel
              ref={ref => (tabItemElementsRef.current[index] = ref)}
              key={child.props.tabId}
              offsetTop={tabsHeight}
              onViewableChange={viewable => {
                handleTabStateChange(index, viewable);
              }}
            >
              {child}
            </ViewableScrollTabPanel>
          ))}
        </VStack>
      </VStack>
    );
  }
);
