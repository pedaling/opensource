import { propVariant, withVariation } from '@vibrant-ui/core';

type VerificationCodeItemProps = {
  value: string;
  state?: 'default' | 'error';
  active?: boolean;
  onClick?: () => void;
  testId?: string;
};

export const withVerificationCodeItemVariation = withVariation<VerificationCodeItemProps>('VerificationCodeItem')(
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
