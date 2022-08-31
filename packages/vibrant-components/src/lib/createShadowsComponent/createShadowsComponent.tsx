import type { ComponentType, ReactElement, ReactNode } from 'react';
import { forwardRef } from 'react';
import { Box } from '@vibrant-ui/core';

type ShadowComponentType = ComponentType<{
  startColor?: any;
  distance?: any;
  offset?: any;
  viewStyle?: any;
  paintInside?: boolean;
  children?: ReactNode;
}>;

type ShadowsProps = {
  shadows: {
    starColor?: string;
    offset?: [number, number];
    distance?: number;
  }[];
  style?: any;
  children?: ReactElement;
};

export const createShadowsComponent = (ShadowComponent: ShadowComponentType) => {
  const ShadowsComponent = forwardRef<any, ShadowsProps>(({ shadows, style, children }, ref) => (
    <ShadowComponent
      paintInside={!(shadows?.[0].offset?.[0] === 0 && shadows?.[0].offset?.[1] === 0)}
      viewStyle={shadows.length <= 1 ? style : undefined}
      {...(shadows[0] ?? { distance: 0 })}
    >
      {shadows.length <= 1 ? (
        <Box ref={ref}>{children}</Box>
      ) : (
        <ShadowsComponent ref={ref} shadows={shadows.slice(1)} style={style}>
          {children}
        </ShadowsComponent>
      )}
    </ShadowComponent>
  ));

  return ShadowsComponent;
};
