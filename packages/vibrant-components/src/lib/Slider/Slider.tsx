import { useEffect, useMemo, useRef, useState } from 'react';
import { Box, ScrollBox, useResponsiveValue } from '@vibrant-ui/core';
import { withSliderVariation } from './SliderProps';

export const Slider = withSliderVariation(
  ({
    data = [],
    renderItem,
    keyExtractor,
    onEndReached,
    onItemImpressed,
    width,
    spacing,
    px,
    initialIndex,
    loop = false,
    snap = false,
    snapAlignment = 'start',
    panelsPerView = 1,
    panelWidth,
  }) => {
    const { getResponsiveValue } = useResponsiveValue();
    const [sliderWidth, setSliderWidth] = useState(0);
    const itemRefs = useRef<HTMLElement[]>([]);
    const scrollRef = useRef<HTMLElement>(null);

    const computedPanelWidth = useMemo(() => {
      if (panelWidth) {
        return getResponsiveValue(panelWidth);
      }

      const currentPanelsPerView = Math.max(1, getResponsiveValue(panelsPerView));
      const computedSpacing = spacing ? getResponsiveValue(spacing) : 0;

      return (sliderWidth - computedSpacing * (currentPanelsPerView - 1)) / currentPanelsPerView;
    }, [getResponsiveValue, panelWidth, panelsPerView, sliderWidth, spacing]);

    useEffect(() => {
      if (initialIndex && itemRefs.current[initialIndex]) {
        itemRefs.current[initialIndex].scrollIntoView({ behavior: 'smooth' });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialIndex, itemRefs.current]);

    return (
      <Box width="100%" onLayout={({ width }) => setSliderWidth(width)}>
        <ScrollBox
          ref={scrollRef}
          px={px}
          snap={snap}
          flexDirection="row"
          scrollEnabled={true}
          width={width}
          columnGap={spacing}
        >
          {data.map((item, index) => (
            <Box
              ref={(el: HTMLElement) => (itemRefs.current[index] = el)}
              snapAlignment={snapAlignment}
              key={keyExtractor?.({ item }) ?? index}
              width={computedPanelWidth}
              flexShrink={0}
            >
              {renderItem({ item, index })}
            </Box>
          ))}
        </ScrollBox>
      </Box>
    );
  }
);
