import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent, ViewToken } from 'react-native';
import { FlatList } from 'react-native';
import { Box, useResponsiveValue } from '@vibrant-ui/core';
import { isDefined, useCallbackRef } from '@vibrant-ui/utils';
import { withSliderVariation } from './SliderProps';

const LOOP_BUFFER = 3;

export const Slider = withSliderVariation(
  ({
    data = [],
    renderItem,
    keyExtractor,
    onEndReached,
    onItemImpressed,
    spacing,
    px,
    loop = false,
    snap = false,
    snapAlignment = 'start',
    panelsPerView = 1,
    panelWidth,
  }) => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const [buffedData, setBuffedData] = useState(data);

    const { getResponsiveValue } = useResponsiveValue();

    const computedPaddingX = px ? getResponsiveValue(px) : 0;
    const computedSpacing = spacing ? getResponsiveValue(spacing) : 0;
    const flatListRef = useRef<FlatList<{ index: number }>>(null);

    const handleViewableItemChange = useCallbackRef<
      (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => void
    >(({ changed }) =>
      changed
        .filter(({ isViewable }) => isViewable)
        .forEach(({ index, item }, idx) => onItemImpressed?.({ item, index: index ?? idx }))
    );

    const scrollToTargetIndex = useCallback(
      ({ index }: { index: number }) => {
        if (index < 0 || index >= data.length) {
          return;
        }

        flatListRef.current?.scrollToIndex({
          animated: false,
          index,
        });
      },
      [data.length]
    );

    const computedPanelWidth = useMemo(() => {
      if (panelWidth) {
        return getResponsiveValue(panelWidth);
      }

      const currentPanelsPerView = Math.max(1, getResponsiveValue(panelsPerView));

      return (sliderWidth - computedSpacing * (currentPanelsPerView - 1)) / currentPanelsPerView;
    }, [computedSpacing, getResponsiveValue, panelWidth, panelsPerView, sliderWidth]);

    useEffect(() => {
      if (loop) {
        const frontBuff = data.slice(data.length - LOOP_BUFFER);
        const backBuff = data.slice(0, LOOP_BUFFER);

        setBuffedData([...frontBuff, ...data, ...backBuff]);

        scrollToTargetIndex({ index: LOOP_BUFFER });
      }
    }, [data, loop, scrollToTargetIndex]);

    const handleSnap = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(event.nativeEvent.contentOffset.x / (computedPanelWidth + computedSpacing));

      scrollToTargetIndex({ index });
    };

    return (
      <Box width="100%" backgroundColor="informative" onLayout={({ width }) => setSliderWidth(width)}>
        <FlatList
          ref={flatListRef}
          data={buffedData}
          contentContainerStyle={{
            paddingHorizontal: computedPaddingX,
          }}
          renderItem={({ item, index }) => (
            <Box width={computedPanelWidth} ml={index > 0 ? computedSpacing : undefined}>
              {renderItem({
                item,
                index,
              })}
            </Box>
          )}
          onScroll={event => {
            if (loop) {
              const targetIndex = Math.round(
                event.nativeEvent.contentOffset.x / (computedPanelWidth + computedSpacing)
              );

              if (targetIndex >= buffedData.length + LOOP_BUFFER) {
                scrollToTargetIndex({ index: targetIndex - buffedData.length });
              }

              if (targetIndex < LOOP_BUFFER) {
                scrollToTargetIndex({ index: targetIndex + buffedData.length });
              }

              return;
            }

            const targetIndex = Math.round(event.nativeEvent.contentOffset.x / (computedPanelWidth + computedSpacing));
            const targetOffset = (computedPanelWidth + computedSpacing) * targetIndex;
            const currentOffset = event.nativeEvent.contentOffset.x;
            const diff = Math.abs(targetOffset - currentOffset);
            const threshold = 1;

            if (diff > threshold) {
              flatListRef.current?.scrollToOffset({
                animated: false,
                offset: targetOffset,
              });
            }

            if (targetIndex >= buffedData.length + LOOP_BUFFER) {
              scrollToTargetIndex({ index: targetIndex - buffedData.length });
            }

            if (targetIndex < LOOP_BUFFER) {
              scrollToTargetIndex({ index: targetIndex + buffedData.length });
            }
          }}
          getItemLayout={(_, index) => ({
            length: computedPanelWidth + computedSpacing,
            offset: (computedPanelWidth + computedSpacing) * index,
            index,
          })}
          horizontal={true}
          keyExtractor={keyExtractor}
          snapToAlignment={snap ? snapAlignment : undefined}
          onViewableItemsChanged={isDefined(onItemImpressed) ? handleViewableItemChange : undefined}
          snapToInterval={computedPanelWidth + computedSpacing}
          decelerationRate="fast"
          onMomentumScrollEnd={handleSnap}
          showsHorizontalScrollIndicator={false}
          onEndReached={isDefined(onEndReached) ? onEndReached : undefined}
        />
      </Box>
    );
  }
);
