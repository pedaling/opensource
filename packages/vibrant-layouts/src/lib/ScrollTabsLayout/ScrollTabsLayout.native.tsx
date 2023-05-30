import type { ReactElement } from 'react';
import { Children, isValidElement, useCallback, useMemo, useRef, useState } from 'react';
import type { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { FlatList } from 'react-native';
import { Tab } from '@vibrant-ui/components';
import type { ComponentWithRef } from '@vibrant-ui/core';
import { Box, useWindowDimensions } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import type { ScrollTabPanelProps } from './ScrollTabPanel';
import { ScrollTabPanel } from './ScrollTabPanel';
import type { ScrollTabsLayoutProps } from './ScrollTabsLayoutProps';
import { withScrollTabsLayoutVariation } from './ScrollTabsLayoutProps';

export const ScrollTabsLayout = withScrollTabsLayoutVariation(
  ({
    header,
    children,
    onTabChange,
    TabsComponent,
    tabFlexGrow,
    tabFlexShrink,
    tabsScrollHorizontal,
    tabOverflow,
    tabsHideScroll,
  }) => {
    const { width } = useWindowDimensions();
    const elementChildren = useMemo(
      () => Children.toArray(children).filter(isValidElement<ScrollTabPanelProps>),
      [children]
    );
    const tabs = useMemo(() => elementChildren.map(({ props }) => props) ?? [], [elementChildren]);

    const [tabScrolledStates, setTabScrolledStates] = useState(new Array(tabs.length).fill(false));
    const activeTabIndex = tabScrolledStates.reduce(
      (prevActiveIndex, state, index) => (state ? index : prevActiveIndex),
      0
    );

    const flatListRef = useRef<any>();
    const flatListPositionRef = useRef<number>(0);
    const tabsHeightRef = useRef<number>(0);
    const tabPanelPositionsRef = useRef<number[]>(new Array(tabs.length).fill(0));

    const keyExtractor = useCallback((item: ReactElement<ScrollTabPanelProps> | string) => {
      if (typeof item === 'string') {
        return item;
      }

      return item.props.tabId;
    }, []);

    const renderItem = useCallback(
      ({ item, index }: { item: ReactElement<ScrollTabPanelProps> | string; index: number }) => {
        if (typeof item === 'string') {
          return (
            <TabsComponent
              role="tablist"
              width={width}
              flexGrow={0}
              flexDirection="row"
              px={20}
              onLayout={({ height }) => {
                tabsHeightRef.current = height;
              }}
              backgroundColor="background"
              horizontal={tabsScrollHorizontal}
              overflow={tabOverflow}
              hideScroll={tabsHideScroll}
            >
              {tabs?.map(({ title, tabId }, tabIndex) => (
                <Box key={tabId} flexGrow={tabFlexGrow} flexShrink={tabFlexShrink}>
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
                </Box>
              ))}
            </TabsComponent>
          );
        }

        return (
          <Box
            onLayout={({ top }) => {
              tabPanelPositionsRef.current[index - 1] = top;
            }}
          >
            {item}
          </Box>
        );
      },
      [
        TabsComponent,
        activeTabIndex,
        onTabChange,
        tabFlexGrow,
        tabFlexShrink,
        tabOverflow,
        tabs,
        tabsHideScroll,
        tabsScrollHorizontal,
        width,
      ]
    );

    const data = useMemo(() => ['sticky_header', ...elementChildren], [elementChildren]);
    const stickyHeaderIndices = useMemo(() => [isDefined(header) ? 1 : 0], [header]);

    const handleScroll = useCallback(
      ({
        nativeEvent: {
          contentOffset: { y: currentPosition },
        },
      }: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentTabIndex = tabPanelPositionsRef.current.reduce(
          (prevTabIndex, tabPosition, tabIndex) =>
            tabPosition - flatListPositionRef.current < currentPosition + tabsHeightRef.current
              ? tabIndex
              : prevTabIndex,
          0
        );

        setTabScrolledStates([
          ...new Array(currentTabIndex).fill(true),
          true,
          ...new Array(tabScrolledStates.length - 1 - currentTabIndex).fill(false),
        ]);
      },
      [tabScrolledStates.length]
    );

    const handleLayoutChange = useCallback(({ nativeEvent: { layout } }: LayoutChangeEvent) => {
      flatListPositionRef.current = layout.y;
    }, []);

    return (
      <FlatList<ReactElement<ScrollTabPanelProps> | string>
        ref={flatListRef}
        numColumns={1}
        horizontal={false}
        data={data}
        onLayout={handleLayoutChange}
        stickyHeaderIndices={stickyHeaderIndices}
        keyExtractor={keyExtractor}
        onScroll={handleScroll}
        renderItem={renderItem}
        ListHeaderComponent={header}
      />
    );
  }
) as ComponentWithRef<ScrollTabsLayoutProps> & {
  Item: ComponentWithRef<ScrollTabPanelProps>;
};

ScrollTabsLayout.Item = ScrollTabPanel;
