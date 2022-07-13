import { withVariation } from '@vibrant-ui/core';

type VerificationCodeFieldProps = {
  length: number;
  state?: 'default' | 'error';
  errorMessage?: string;
  blurOnComplete?: boolean;
  onComplete?: (value: string) => void;
};

export const withVerificationCodeFieldVariation = withVariation<VerificationCodeFieldProps>()();
