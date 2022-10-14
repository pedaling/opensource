import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

export type CalloutType = 'default' | 'informative' | 'notice' | 'success' | 'warning';

export type CalloutProps = {
  title: string;
  description?: string;
  type?: CalloutType;
} & (
  | {
      action: string;
      onActionClick?: () => void;
    }
  | {
      action?: never;
      onActionClick?: never;
    }
);

export const withCalloutVariation = withVariation<CalloutProps>('Callout')(
  propVariant({
    props: [
      {
        name: 'type',
        keep: false,
        default: 'default',
      },
    ],
    variants: {
      default: {
        backgroundColor: 'surface2',
        fontColor: 'onView1',
        IconComponent: Icon.InfoCircle,
      },
      informative: {
        backgroundColor: 'informativeContainer',
        fontColor: 'onViewInformative',
        IconComponent: Icon.InfoCircle,
      },
      notice: {
        backgroundColor: 'errorContainer',
        fontColor: 'onViewError',
        IconComponent: Icon.InfoCircle,
      },
      warning: {
        backgroundColor: 'warningContainer',
        fontColor: 'onViewWarning',
        IconComponent: Icon.Alert,
      },
      success: {
        backgroundColor: 'successContainer',
        fontColor: 'onViewSuccess',
        IconComponent: Icon.CheckCircle,
      },
    } as const,
  })
);
