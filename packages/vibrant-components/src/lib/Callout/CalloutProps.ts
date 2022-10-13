import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

export type CalloutType = 'default' | 'information' | 'notice' | 'success' | 'warning';

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
        backgroundColor: 'surface2' as const,
        fontColor: 'onView1' as const,
        IconComponent: Icon.InfoCircle,
      },
      information: {
        backgroundColor: 'informativeContainer' as const,
        fontColor: 'onViewInformative' as const,
        IconComponent: Icon.InfoCircle,
      },
      notice: {
        backgroundColor: 'errorContainer' as const,
        fontColor: 'onViewError' as const,
        IconComponent: Icon.InfoCircle,
      },
      warning: {
        backgroundColor: 'warningContainer' as const,
        fontColor: 'onViewWarning' as const,
        IconComponent: Icon.Alert,
      },
      success: {
        backgroundColor: 'successContainer' as const,
        fontColor: 'onViewSuccess' as const,
        IconComponent: Icon.CheckCircle,
      },
    },
  })
);
