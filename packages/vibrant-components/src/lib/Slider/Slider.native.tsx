import { useState } from 'react';
import { FlatList } from 'react-native';
import { Box, useResponsiveValue } from '@vibrant-ui/core';
import { withSliderVariation } from './SliderProps';

export const Slider = withSliderVariation(
  ({
    data,
    keyExtractor,
    renderItem,
    initialIndex,
    loop,
    snap,
    panelsPerView,
    panelWidth,
    px,
    spacing,
    onEndReached,
    onItemImpressed,
    snapAlignment,
  }) => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const { getResponsiveValue } = useResponsiveValue();

    const computedPanelWidth = (() => {
      if (panelWidth) {
        return getResponsiveValue(panelWidth);
      }

      if (panelsPerView) {
        return sliderWidth / getResponsiveValue(panelsPerView);
      }

      return sliderWidth;
    })();

    return (
      <Box width="100%" onLayout={({ width }) => setSliderWidth(width)}>
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={keyExtractor}
          snapToAlignment={snapAlignment}
          snapToInterval={computedPanelWidth}
          decelerationRate="fast"
        />
      </Box>
    );
  }
);
