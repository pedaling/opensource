/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Box, ScrollBox, useResponsiveValue } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { Panel } from './Panel/Panel';
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

    const handleItemRef = (index: number) => (ref: HTMLElement) => {
      itemRefs.current[index] = ref;
    };

    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
      const container = containerRef.current;

      if (container) {
        let animationFrame: number;

        const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
          setIsDragging(true);

          setStartX(event.pageX - container.offsetLeft);

          setScrollLeft(container.scrollLeft);
        };

        const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
          if (!isDragging) return;

          event.preventDefault();

          const x = event.pageX - container.offsetLeft;
          const delta = (x - startX) * 4;

          container.scrollLeft = scrollLeft - delta;

          if (animationFrame) cancelAnimationFrame(animationFrame);

          animationFrame = requestAnimationFrame(() => {
            setScrollLeft(container.scrollLeft);
          });
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

          cancelAnimationFrame(animationFrame);
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

    useEffect(() => {
      if (initialIndex) {
        const index = Math.min(initialIndex, data.length - 1);
        const itemRef = itemRefs.current[index];

        if (itemRef) {
          containerRef.current?.scrollTo({
            left: itemRef.offsetLeft,
            behavior: 'smooth',
          });
        }
      }
    }, []);

    // loop
    useEffect(() => {
      if (loop) {
        const container = containerRef.current;

        if (container) {
          const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container;

            if (scrollLeft === 0) {
              container.scrollLeft = scrollWidth - clientWidth;
            } else if (scrollLeft + clientWidth === scrollWidth) {
              container.scrollLeft = 0;
            }
          };

          container.addEventListener('scroll', handleScroll);

          return () => {
            container.removeEventListener('scroll', handleScroll);
          };
        }
      }

      return;
    }, [containerRef.current, loop]);

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
          <>
            {data.map((item, index) => (
              <Panel
                ref={handleItemRef(index)}
                snapAlignment={snapAlignment}
                key={keyExtractor?.({ item }) ?? index}
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
            {loop && (
              <>
                {data.map((item, index) => (
                  <Panel
                    ref={handleItemRef(index)}
                    snapAlignment={snapAlignment}
                    key={keyExtractor?.({ item }) ?? index}
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
              </>
            )}
          </>
        </ScrollBox>
      </Box>
    );
  }
);
