/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, ScrollBox, useResponsiveValue } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { Panel } from './Panel/Panel';
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
    initialIndex,
    loop = false,
    snap = false,
    snapAlignment = 'start',
    panelsPerView = 1,
    panelWidth,
  }) => {
    const { getResponsiveValue } = useResponsiveValue();
    const [sliderWidth, setSliderWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const itemRefs = useRef<HTMLElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const [buffedData, setBuffedData] = useState(data);

    const handleItemRef = (index: number) => (ref: HTMLElement) => {
      itemRefs.current[index] = ref;
    };

    const scrollToTargetIndex = useCallback(
      ({ index }: { index: number }) => {
        if (index < 0 || index >= buffedData.length) {
          return;
        }

        const targetItem = itemRefs.current[index];

        containerRef.current?.scrollTo({ left: targetItem.offsetLeft });
      },
      [buffedData.length]
    );

    useEffect(() => {
      if (loop) {
        const frontBuff = data.slice(data.length - LOOP_BUFFER);
        const backBuff = data.slice(0, LOOP_BUFFER);
        const boundedIndex = initialIndex ?? 0;

        setBuffedData([...frontBuff, ...data, ...backBuff]);

        scrollToTargetIndex({ index: boundedIndex + LOOP_BUFFER });
      }
    }, [loop]);

    useEffect(() => {
      const container = containerRef.current;

      if (container) {
        const handleMouseDown = (event: MouseEvent) => {
          setIsDragging(true);

          setStartX(event.pageX - container.offsetLeft);

          setScrollLeft(container.scrollLeft);
        };

        const handleMouseMove = (event: MouseEvent) => {
          if (!isDragging) return;

          event.preventDefault();

          const x = event.pageX - container.offsetLeft;
          const delta = x - startX;

          container.scrollLeft = scrollLeft - delta;
        };

        const handleMouseUp = () => {
          setIsDragging(false);

          const newIndex = Math.round(container.scrollLeft / computedPanelWidth);

          if (loop && newIndex >= data.length + LOOP_BUFFER) {
            scrollToTargetIndex({ index: newIndex - data.length });

            return;
          }

          if (loop && newIndex < LOOP_BUFFER) {
            scrollToTargetIndex({ index: newIndex + data.length });

            return;
          }
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

      return;
    }, [containerRef.current, isDragging, scrollLeft, startX]);

    const computedPanelWidth = useMemo(() => {
      if (panelWidth) {
        return getResponsiveValue(panelWidth);
      }

      const currentPanelsPerView = Math.max(1, getResponsiveValue(panelsPerView));
      const computedSpacing = spacing ? getResponsiveValue(spacing) : 0;

      return (sliderWidth - computedSpacing * (currentPanelsPerView - 1)) / currentPanelsPerView;
    }, [getResponsiveValue, panelWidth, panelsPerView, sliderWidth, spacing]);

    return (
      <Box width="100%" onLayout={({ width }) => setSliderWidth(width)}>
        <ScrollBox
          ref={containerRef}
          px={px}
          snap={snap}
          flexDirection="row"
          scrollEnabled={true}
          hideScroll={true}
          width={sliderWidth}
          columnGap={spacing}
        >
          {buffedData.map((item, index) => (
            <Panel
              ref={handleItemRef(index)}
              snapAlignment={snapAlignment}
              key={(keyExtractor?.({ item }) ?? index) + (loop ? `-${index}` : '')}
              width={computedPanelWidth}
              onImpressed={
                isDefined(onItemImpressed) || index === data.length - 1
                  ? () => {
                      onItemImpressed?.({ item, index });
                      if (index === data.length - 1) {
                        onEndReached?.();
                      }
                    }
                  : undefined
              }
            >
              {renderItem({ item, index })}
            </Panel>
          ))}
        </ScrollBox>
      </Box>
    );
  }
);
