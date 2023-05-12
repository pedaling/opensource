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
    width = '100%',
    spacing,
    px,
    initialIndex = 0,
    loop = false,
    snap = false,
    snapAlignment = 'start',
    panelsPerView = 1,
    panelWidth,
    testId = 'slider',
  }) => {
    const { getResponsiveValue } = useResponsiveValue();

    const [sliderWidth, setSliderWidth] = useState<number | undefined>(undefined);
    const computedSpacing = spacing ? getResponsiveValue(spacing) : 0;
    const computedPaddingX = px ? getResponsiveValue(px) : 0;
    const currentPanelsPerView = Math.min(data.length, getResponsiveValue(panelsPerView));

    const computedPanelWidth = useMemo(() => {
      if (!sliderWidth) {
        return undefined;
      }

      if (panelWidth) {
        return getResponsiveValue(panelWidth);
      }

      return (
        (sliderWidth - computedPaddingX - computedSpacing * (currentPanelsPerView - 1)) /
        Math.max(1, currentPanelsPerView)
      );
    }, [computedPaddingX, computedSpacing, currentPanelsPerView, getResponsiveValue, panelWidth, sliderWidth]);

    return (
      <Box data-testid={testId} width={width} onLayout={({ width }) => setSliderWidth(width)}>
        {computedPanelWidth !== undefined ? (
          <FlatList
            testId="slider-container"
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
            px={px}
          />
        ) : null}
      </Box>
    );
  }
);
