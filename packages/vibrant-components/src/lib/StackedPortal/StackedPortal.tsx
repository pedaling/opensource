import { useCallback, useEffect, useMemo } from 'react';
import type { LayoutEvent } from '@vibrant-ui/core';
import { PortalBox, useSafeArea, useStackedPortal } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
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
    p,
    pt,
    pl,
    pr,
    pb,
    py,
    px,
    ...restProps
  }) => {
    const { generateStyle } = useSafeArea();

    const { offset, renderedIndex, unregister, changeHeight } = useStackedPortal({
      position,
      id,
      order,
      offset: positionOffset,
      safeAreaInset: safeAreaMode === 'margin',
    });

    const paddingStyle = useMemo(() => {
      let padding = {
        top: pt ?? py ?? p,
        left: pl ?? px ?? p,
        right: pr ?? px ?? p,
        bottom: pb ?? py ?? p,
      };

      if (safeAreaMode !== 'padding' || renderedIndex !== 1) {
        return {
          pt: padding.top,
          pl: padding.left,
          pr: padding.right,
          pb: padding.bottom,
        };
      }

      const generatedStyle = generateStyle({
        edges: [position],
        minInsets: { [position]: padding[position] },
      });

      padding = {
        ...padding,
        ...generatedStyle,
      };

      return {
        pt: padding.top,
        pl: padding.left,
        pr: padding.right,
        pb: padding.bottom,
      };
    }, [generateStyle, p, pb, pl, position, pr, pt, px, py, renderedIndex, safeAreaMode]);

    const handleLayout = useCallback(
      ({ height }: LayoutEvent) => {
        changeHeight(height);
      },
      [changeHeight]
    );

    useEffect(
      () => () => {
        unregister();
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );

    return (
      <PortalBox
        ref={innerRef}
        hidden={!isDefined(offset)}
        onLayout={handleLayout}
        {...{ [position]: !isDefined(offset) ? 0 : offset }}
        {...paddingStyle}
        {...restProps}
      >
        {children}
      </PortalBox>
    );
  }
);
