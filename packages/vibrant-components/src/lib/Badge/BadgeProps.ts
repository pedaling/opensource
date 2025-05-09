import type { ReactElement } from 'react';
import type { TextSystemProps } from '@vibrant-ui/core';
import { type ResponsiveValue, propVariant, withVariation } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '@vibrant-ui/icons';
import type { Rounded } from '@vibrant-ui/theme';

type BadgeKind =
  | 'error'
  | 'errorWeak'
  | 'inverse'
  | 'neutral'
  | 'primary'
  | 'primaryWeak'
  | 'secondary'
  | 'secondaryWeak'
  | 'success'
  | 'successWeak'
  | 'warning'
  | 'warningWeak';

export type BadgeProps = {
  kind: BadgeKind;
  size: ResponsiveValue<'lg' | 'md' | 'sm'>;
  IconComponent?: IconComponent<IconProps, 'Fill' | 'Regular' | 'Thin'>;
  children: ReactElement | number | string;
  rounded?: ResponsiveValue<Rounded>;
  whiteSpace?: TextSystemProps['whiteSpace'];
};

export const withBadgeVariation = withVariation<BadgeProps>('Badge')(
  propVariant({
    props: [
      {
        name: 'kind',
      },
    ],
    variants: {
      warning: {
        backgroundColor: 'warning',
        color: 'onWarning',
      },
      neutral: {
        backgroundColor: 'surface1',
        color: 'onView1',
      },
      primary: {
        backgroundColor: 'primary',
        color: 'onPrimary',
      },
      secondary: {
        backgroundColor: 'informative',
        color: 'onInformative',
      },
      success: {
        backgroundColor: 'success',
        color: 'onSuccess',
      },
      inverse: {
        backgroundColor: 'inverseBackground',
        color: 'onInverseSurface',
      },
      error: {
        backgroundColor: 'error',
        color: 'onError',
      },
      secondaryWeak: {
        backgroundColor: 'informativeContainer',
        color: 'onInformativeContainer',
      },
      warningWeak: {
        backgroundColor: 'warningContainer',
        color: 'onWarningContainer',
      },
      primaryWeak: {
        backgroundColor: 'primaryContainer',
        color: 'onPrimaryContainer',
      },
      errorWeak: {
        backgroundColor: 'errorContainer',
        color: 'onErrorContainer',
      },
      successWeak: {
        backgroundColor: 'successContainer',
        color: 'onSuccessContainer',
      },
    } as const,
  }),
  propVariant({
    props: [{ name: 'size', responsive: true }],
    variants: {
      sm: {
        px: 6,
        py: 3,
        iconSize: 10,
        bodyLevel: 5,
      },
      md: {
        px: 6,
        py: 4,
        iconSize: 12,
        bodyLevel: 4,
      },
      lg: {
        px: 8,
        py: 6,
        iconSize: 14,
        bodyLevel: 3,
      },
    } as const,
  })
);
