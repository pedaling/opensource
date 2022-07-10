import { propVariant, withVariation } from '@vibrant-ui/core';

type VerificationCodeItemProps = {
  inputId: string;
  value: string;
  state?: 'default' | 'error';
  active?: boolean;
};

export const withVerificationCodeItemVariation = withVariation<VerificationCodeItemProps>()(
  propVariant({
    props: [
      {
        name: 'active',
        default: false,
      },
    ],
    variants: {
      true: {
        borderColor: 'outlineNeutral',
      },
      false: {
        borderColor: 'outline1',
      },
    },
  }),
  propVariant({
    props: [
      {
        name: 'state',
        default: 'default' as const,
      },
      {
        name: 'borderColor',
      },
    ],
    variants: ({ state, borderColor }) => ({
      borderColor: state === 'error' ? 'error' : borderColor,
    }),
  })
);
