/* eslint-disable @typescript-eslint/naming-convention */
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { LayoutEvent } from '@vibrant-ui/core';
import { PortalBox, useResponsiveValue, useSafeArea, useStackedPortal } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { addStyleValues, isDefined } from '@vibrant-ui/utils';
import { withStackedPortalVariation } from './StackedPortalProps';

export const StackedPortal = withStackedPortalVariation(
  ({
    id,
    order,
    innerRef,
    children,
    position,
    positionOffset,
    safeAreaMode = 'none',
    hidden,
    duration,
    testId = 'stacked-portal',
    ...restProps
  }) => {
    const { generateStyle } = useSafeArea();

    const { getResponsiveValue } = useResponsiveValue();

    const currentPosition = getResponsiveValue(position);
    const currentPositionOffset = getResponsiveValue(positionOffset);
    const [height, setHeight] = useState(0);

    const { offset, renderedIndex, unregister, changeHeight } = useStackedPortal({
      position: currentPosition,
      id,
      order,
      offset: safeAreaMode === 'margin' ? currentPositionOffset : 0,
      safeAreaInset: safeAreaMode === 'margin',
    });

    const paddingStyle = useMemo(() => {
      if (safeAreaMode === 'margin') {
        return {
          pt: 0,
          pl: 0,
          pr: 0,
          pb: 0,
        };
      }

      if (renderedIndex !== 1) {
        return {
          pt: 0,
          pl: 0,
          pr: 0,
          pb: 0,
          [`p${currentPosition[0]}`]: currentPositionOffset,
        };
      }

      const generatedStyle = generateStyle({
        edges: [currentPosition],
        minInsets: { [currentPosition]: currentPositionOffset },
      });

      return {
        pt: generatedStyle.top,
        pl: generatedStyle.left,
        pr: generatedStyle.right,
        pb: generatedStyle.bottom,
      };
    }, [currentPosition, currentPositionOffset, generateStyle, renderedIndex, safeAreaMode]);

    const handleLayout = useCallback(({ height }: LayoutEvent) => {
      setHeight(height);
    }, []);

    useEffect(
      () => () => {
        unregister();
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );

    useEffect(() => {
      changeHeight(hidden ? 0 : height);
    }, [changeHeight, height, hidden]);

    return duration ? (
      <Transition
        animation={{
          [currentPosition]: addStyleValues(offset ?? 0, hidden ? -height : 0),
        }}
        duration={duration}
      >
        <PortalBox ref={innerRef} hidden={!isDefined(offset)} onLayout={handleLayout} {...restProps}>
          {children({
            layoutStyle: {
              width: '100%',
              height: '100%',
              ...paddingStyle,
            },
          })}
        </PortalBox>
      </Transition>
    ) : (
      <PortalBox
        ref={innerRef}
        hidden={!isDefined(offset)}
        onLayout={handleLayout}
        {...{ [currentPosition]: !isDefined(offset) ? 0 : offset }}
        {...restProps}
      >
        {children({
          layoutStyle: {
            width: '100%',
            height: '100%',
            ...paddingStyle,
          },
        })}
      </PortalBox>
    );
  }
);
