/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, FlatList, useResponsiveValue } from '@vibrant-ui/core';
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
    initialIndex = 0,
    loop = false,
    snap = false,
    snapAlignment = 'start',
    panelsPerView = 1,
    panelWidth,
  }) => {
    const { getResponsiveValue } = useResponsiveValue();

    const [sliderWidth, setSliderWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [buffedData, setBuffedData] = useState(data);
    const [startX, setStartX] = useState(0);

    const itemRefs = useRef<HTMLElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const buffedInitialIndex = initialIndex + (loop ? LOOP_BUFFER : 0);
    const currentIndexRef = useRef(buffedInitialIndex);

    const computedSpacing = spacing ? getResponsiveValue(spacing) : 0;
    const computedPaddingX = px ? getResponsiveValue(px) : 0;
    const currentPanelsPerView = Math.min(data.length, getResponsiveValue(panelsPerView));

    const computedPanelWidth = useMemo(() => {
      if (panelWidth) {
        return getResponsiveValue(panelWidth);
      }

      return (sliderWidth - computedPaddingX - computedSpacing * (currentPanelsPerView - 1)) / currentPanelsPerView;
    }, [getResponsiveValue, panelWidth, panelsPerView, sliderWidth, spacing]);

    const handleItemRef = (index: number) => (ref: HTMLElement) => {
      itemRefs.current[index] = ref;
    };

    const scrollToTargetIndex = useCallback(
      ({ index, animation = false }: { index: number; animation?: boolean }) => {
        if (index < 0 || index >= buffedData.length) {
          return;
        }

        const targetItem = itemRefs.current[index];

        containerRef.current?.scrollTo({
          left: targetItem.offsetLeft,
          behavior: animation ? 'smooth' : 'auto',
        });
      },
      [buffedData.length]
    );

    useEffect(() => {
      if (loop) {
        const frontBuff = data.slice(data.length - LOOP_BUFFER);
        const backBuff = data.slice(0, LOOP_BUFFER);

        setBuffedData([...frontBuff, ...data, ...backBuff]);

        scrollToTargetIndex({ index: buffedInitialIndex });
      }
    }, [loop]);

    useEffect(() => {
      const container = containerRef.current;

      if (container) {
        const handleMouseDown = (event: MouseEvent) => {
          setIsDragging(true);

          setStartX(event.pageX - container.offsetLeft);
        };

        const handleMouseMove = (event: MouseEvent) => {
          if (isDragging) {
            event.preventDefault();

            const currentX = event.pageX - container.offsetLeft;

            const updatedScrollLeft = container.scrollLeft + startX - currentX;

            const nextIndex = Math.round(updatedScrollLeft / computedPanelWidth);

            currentIndexRef.current = nextIndex;

            container.scrollTo({ left: updatedScrollLeft, behavior: 'smooth' });

            if (snap) {
              scrollToTargetIndex({ index: currentIndexRef.current, animation: true });
            }
          }
        };

        const handleMouseUp = () => {
          setIsDragging(false);
        };

        container.addEventListener('mousedown', handleMouseDown);

        container.addEventListener('mousemove', handleMouseMove);

        container.addEventListener('mouseup', handleMouseUp);

        container.addEventListener('mouseleave', handleMouseUp);

        return () => {
          container.removeEventListener('mousedown', handleMouseDown);

          container.removeEventListener('mousemove', handleMouseMove);

          container.removeEventListener('mouseup', handleMouseUp);

          container.removeEventListener('mouseleave', handleMouseUp);
        };
      }
    }, [containerRef.current, isDragging, startX]);

    return (
      <Box px={px} width="100%" onLayout={({ width }) => setSliderWidth(width)}>
        <FlatList
          ref={containerRef}
          horizontal={true}
          columnSpacing={computedSpacing}
          columnWidth={computedPanelWidth}
          data={buffedData}
          snap={snap}
          snapAlignment={snapAlignment}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReached={onEndReached}
          onItemImpressed={onItemImpressed}
          handleItemRef={handleItemRef}
        />
      </Box>
    );
  }
);
