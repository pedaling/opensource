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

export const createShadowsComponent = (ShadowComponent: ShadowComponentType) =>
  forwardRef<any, ShadowsProps>(({ shadows, style, children }, ref) => (
    <Box ref={ref} {...style} overflow="visible">
      {shadows.map((shadow, index) => (
        <Box key={index} position="absolute" top={0} bottom={0} left={0} right={0}>
          <ShadowComponent viewStyle={{ ...style, width: '100%', height: '100%' }} {...(shadow ?? { distance: 0 })}>
            <Box />
          </ShadowComponent>
        </Box>
      ))}
      {children}
    </Box>
  ));
