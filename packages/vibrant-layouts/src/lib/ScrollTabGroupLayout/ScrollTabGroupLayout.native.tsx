import type { ReactElement } from 'react';
import { Children, isValidElement, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { Tab } from '@vibrant-ui/components';
import { Box, isNative } from '@vibrant-ui/core';
import type { ScrollTabGroupLayoutItemProps } from './ScrollTabGroupLayoutItem';
import { withScrollTabGroupLayoutVariation } from './ScrollTabGroupLayoutProps';

export const ScrollTabGroupLayout = withScrollTabGroupLayoutVariation(({ header, children }) => {
  const elementChildren = Children.toArray(children).filter(isValidElement<ScrollTabGroupLayoutItemProps>);
  const tabs = elementChildren.map(({ props }) => props) ?? [];

  const [tabStates, setTabStates] = useState(new Array(tabs.length).fill(false));
  const activeTabIndex = tabStates.reduce((prevActiveIndex, state, index) => (state ? index : prevActiveIndex), 0);

  const flatListRef = useRef<any>();
  const tabHeightRef = useRef<number>(0);
  const flatListPositionRef = useRef<number>(0);
  const tabPositionsRef = useRef<number[]>(new Array(tabs.length).fill(0));

  return (
    <FlatList<ReactElement<ScrollTabGroupLayoutItemProps> | string>
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
        const currentTabIndex = tabPositionsRef.current.reduce(
          (prevTabIndex, tabPosition, tabIndex) =>
            tabPosition - flatListPositionRef.current < currentPosition + tabHeightRef.current
              ? tabIndex
              : prevTabIndex,
          0
        );

        setTabStates([
          ...new Array(currentTabIndex).fill(true),
          true,
          ...new Array(tabStates.length - 1 - currentTabIndex).fill(false),
        ]);
      }}
      scrollEventThrottle={16}
      renderItem={({ item, index }) => {
        if (typeof item === 'string') {
          return (
            <Box
              width="100%"
              position="web_sticky"
              top={0}
              flexDirection="row"
              px={20}
              onLayout={({ height }) => {
                tabHeightRef.current = height;
              }}
              zIndex={1}
              backgroundColor="background"
            >
              {tabs?.map(({ title, tabId }, tabIndex) => (
                <Tab
                  key={tabId}
                  id={tabId}
                  title={title}
                  active={activeTabIndex === tabIndex}
                  onClick={() => {
                    flatListRef.current.scrollToIndex({ index: tabIndex + 1, viewOffset: tabHeightRef.current });
                  }}
                />
              ))}
            </Box>
          );
        }

        return (
          <Box
            onLayout={({ top }) => {
              tabPositionsRef.current[index - 1] = top;
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
            <Box top={0} flexDirection="row" px={20} zIndex={1} backgroundColor="background" width="100%">
              {tabs?.map(({ title, tabId }) => (
                <Tab key={tabId} id={tabId} title={title} />
              ))}
            </Box>
          )}
        </>
      }
    />
  );
});
