import type { ReactElementChild } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import type { Either } from '@vibrant-ui/utils';

export type CalloutType = 'default' | 'error' | 'informative' | 'success' | 'warning';

export type CalloutProps = {
  title: string;
  kind?: CalloutType;
  testId?: string;
} & (
  | {
      buttonText: string;
      onButtonClick?: () => void;
    }
  | {
      buttonText?: never;
      onButtonClick?: never;
    }
) &
  Either<{ contents?: string }, { renderContents?: () => ReactElementChild }>;

export const withCalloutVariation = withVariation<CalloutProps>('Callout')(
  propVariant({
    props: [
      {
        name: 'kind',
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
      error: {
        backgroundColor: 'errorContainer',
        fontColor: 'onViewError',
        IconComponent: Icon.AlertCircle,
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
