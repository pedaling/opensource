/* eslint-disable @typescript-eslint/naming-convention */
import type { FC } from 'react';
import type { ReactElementChild } from '../../types';
import type { SizingSystemProps, SvgSystemProps } from '../props';

type StrokeProps = {
  strokeWidth?: number;
  strokeOpacity?: number;
  strokeDasharray?: number;
  strokeDashoffset?: number;
  strokeLinecap?: 'round' | 'square';
};

export type CircleProps = SvgSystemProps &
  StrokeProps & {
    cx?: number | string;
    cy?: number | string;
    r?: number | string;
  };

export type ClipPathProps = {
  id?: string;
  children?: ReactElementChild | ReactElementChild[];
};

export type DefsProps = {
  id?: string;
  children?: ReactElementChild | ReactElementChild[];
};

export type GProps = {
  clipPath?: string;
  children?: ReactElementChild | ReactElementChild[];
};

export type LinearGradientProps = {
  gradientTransform?: string;
};

export type MaskProps = {
  id?: string;
  children?: ReactElementChild | ReactElementChild[];
};

export type PathProps = StrokeProps & {
  d?: string;
  fillRule?: 'evenodd' | 'nonzero';
  clipRule?: 'evenodd' | 'nonzero';
  children?: ReactElementChild | ReactElementChild[];
};

export type StopProps = {
  offset?: number;
  stopColor?: string;
};

export type SvgProps = Pick<SizingSystemProps, 'height' | 'width'> &
  SvgSystemProps & {
    viewBox?: string;
    children?: ReactElementChild | ReactElementChild[];
  };

export type SvgComponentType = FC<SvgProps> & {
  ClipPath: FC<ClipPathProps>;
  Defs: FC<DefsProps>;
  G: FC<GProps>;
  LinearGradient: FC<LinearGradientProps>;
  Mask: FC<MaskProps>;
  Path: FC<PathProps>;
  Stop: FC<StopProps>;
  Circle: FC<CircleProps>;
};
