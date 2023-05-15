import type { ReactElement } from 'react';
import { Children, isValidElement, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { Tab } from '@vibrant-ui/components';
import type { ComponentWithRef } from '@vibrant-ui/core';
import { Box, isNative } from '@vibrant-ui/core';
import type { ScrollTabPanelProps } from './ScrollTabPanel';
import { ScrollTabPanel } from './ScrollTabPanel';
import type { ScrollTabsLayoutProps } from './ScrollTabsLayoutProps';
import { withScrollTabsLayoutVariation } from './ScrollTabsLayoutProps';

export const ScrollTabsLayout = withScrollTabsLayoutVariation(
  ({ header, children, onTabChange, TabsContainerComponent, tabSpacing, ...props }) => {
    const elementChildren = Children.toArray(children).filter(isValidElement<ScrollTabPanelProps>);
    const tabs = elementChildren.map(({ props }) => props) ?? [];

    const [tabStates, setTabStates] = useState(new Array(tabs.length).fill(false));
    const activeTabIndex = tabStates.reduce((prevActiveIndex, state, index) => (state ? index : prevActiveIndex), 0);

    const flatListRef = useRef<any>();
    const flatListPositionRef = useRef<number>(0);
    const tabsHeightRef = useRef<number>(0);
    const tabItemPositionsRef = useRef<number[]>(new Array(tabs.length).fill(0));

    const handleTabStateChange = (currentTabIndex: number) => {
      setTabStates([
        ...new Array(currentTabIndex).fill(true),
        true,
        ...new Array(tabStates.length - 1 - currentTabIndex).fill(false),
      ]);
    };

    return (
      <FlatList<ReactElement<ScrollTabPanelProps> | string>
        ref={flatListRef}
        numColumns={1}
        horizontal={false}
        data={['sticky_header', ...elementChildren]}
        onLayout={({ nativeEvent: { layout } }) => {
          flatListPositionRef.current = layout.y;
        }}
        stickyHeaderIndices={[1]}
        keyExtractor={item => {
          if (typeof item === 'string') {
            return item;
          }

          return item.props.tabId;
        }}
        onScroll={({
          nativeEvent: {
            contentOffset: { y: currentPosition },
          },
        }) => {
          const currentTabIndex = tabItemPositionsRef.current.reduce(
            (prevTabIndex, tabPosition, tabIndex) =>
              tabPosition - flatListPositionRef.current < currentPosition + tabsHeightRef.current
                ? tabIndex
                : prevTabIndex,
            0
          );

          handleTabStateChange(currentTabIndex);
        }}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (typeof item === 'string') {
            return (
              <Box
                role="tablist"
                width="100%"
                top={0}
                flexDirection="row"
                px={20}
                onLayout={({ height }) => {
                  tabsHeightRef.current = height;
                }}
                zIndex={1}
                backgroundColor="background"
              >
                {tabs?.map(({ title, tabId }, tabIndex) => (
                  <TabsContainerComponent key={tabId} mr={tabIndex !== tabs.length - 1 ? tabSpacing : 0} {...props}>
                    <Tab
                      key={tabId}
                      id={tabId}
                      title={title}
                      active={activeTabIndex === tabIndex}
                      onClick={() => {
                        flatListRef.current.scrollToIndex({
                          index: tabIndex + 1,
                          viewOffset: tabsHeightRef.current - 1,
                        });

                        onTabChange?.({ id: tabId, title });
                      }}
                    />
                  </TabsContainerComponent>
                ))}
              </Box>
            );
          }

          return (
            <Box
              onLayout={({ top }) => {
                tabItemPositionsRef.current[index - 1] = top;
              }}
            >
              {item}
            </Box>
          );
        }}
        ListHeaderComponent={
          <>
            {header}
            {isNative ? null : (
              <Box flexDirection="row" px={20} backgroundColor="background" width="100%">
                {tabs?.map(({ title, tabId }) => (
                  <Tab key={tabId} id={tabId} title={title} />
                ))}
              </Box>
            )}
          </>
        }
      />
    );
  }
) as ComponentWithRef<ScrollTabsLayoutProps> & {
  Item: ComponentWithRef<ScrollTabPanelProps>;
};

ScrollTabsLayout.Item = ScrollTabPanel;
