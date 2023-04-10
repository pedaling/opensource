/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from 'react';
import { Box, FlatList, useResponsiveValue } from '@vibrant-ui/core';
import { withSliderVariation } from './SliderProps';

export const Slider = withSliderVariation(
  ({
    data = [],
    renderItem,
    keyExtractor,
    onEndReached,
    onItemImpressed,
    spacing,
    px,
    initialIndex = 0,
    loop = false,
    snap = false,
    snapAlignment = 'start',
    panelsPerView = 1,
    panelWidth,
  }) => {
    const { getResponsiveValue } = useResponsiveValue();

    const [sliderWidth, setSliderWidth] = useState(0);
    const computedSpacing = spacing ? getResponsiveValue(spacing) : 0;
    const computedPaddingX = px ? getResponsiveValue(px) : 0;
    const currentPanelsPerView = Math.min(data.length, getResponsiveValue(panelsPerView));

    const computedPanelWidth = useMemo(() => {
      if (panelWidth) {
        return getResponsiveValue(panelWidth);
      }

      return (sliderWidth - computedPaddingX - computedSpacing * (currentPanelsPerView - 1)) / currentPanelsPerView;
    }, [getResponsiveValue, panelWidth, panelsPerView, sliderWidth, spacing]);

    return (
      <Box px={px} width="100%" onLayout={({ width }) => setSliderWidth(width)}>
        <FlatList
          horizontal={true}
          initialIndex={initialIndex}
          columnSpacing={computedSpacing}
          columnWidth={computedPanelWidth}
          data={data}
          snap={snap}
          loop={loop}
          snapAlignment={snapAlignment}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReached={onEndReached}
          onItemImpressed={onItemImpressed}
        />
      </Box>
    );
  }
);
