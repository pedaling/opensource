import type { ComponentType, ReactNode } from 'react';

type ShadowComponentType = ComponentType<{
  startColor?: any;
  distance?: any;
  offset?: any;
  viewStyle?: any;
  children?: ReactNode;
}>;

type ShadowsProps = {
  shadows: {
    starColor?: string;
    offset?: [number, number];
    distance?: number;
  }[];
  style?: any;
  children?: ReactNode;
};

export const createShadowsComponent = (ShadowComponent: ShadowComponentType) => {
  const ShadowsComponent = ({ shadows, style, children }: ShadowsProps) => (
    <ShadowComponent viewStyle={shadows.length <= 1 ? style : undefined} {...(shadows[0] ?? { distance: 0 })}>
      {shadows.length <= 1 ? (
        children
      ) : (
        <ShadowsComponent shadows={shadows.slice(1)} style={style}>
          {children}
        </ShadowsComponent>
      )}
    </ShadowComponent>
  );

  return ShadowsComponent;
};
