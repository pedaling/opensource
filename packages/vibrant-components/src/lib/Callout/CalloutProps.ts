import type { ReactElementChild } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

export type CalloutType = 'information' | 'notice' | 'warning';

export type CalloutProps = {
  title: string;
  description: string;
  type: CalloutType;
  renderFooter?: () => ReactElementChild;
};

export const withCalloutVariation = withVariation<CalloutProps>('Callout')(
  propVariant({
    props: [
      {
        name: 'type',
        keep: true,
        default: 'information',
      },
    ],
    variants: {
      information: {
        color: 'onView1' as const,
        IconComponent: Icon.InfoCircle,
      },
      notice: {
        color: 'informative' as const,
        IconComponent: Icon.InfoCircle,
      },
      warning: {
        color: 'error' as const,
        IconComponent: Icon.Alert,
      },
    },
  })
);
