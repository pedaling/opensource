import { withVariation } from '@vibrant-ui/core';

export type VerificationCodeFieldProps = {
  length: number;
  state?: 'default' | 'error';
  errorMessage?: string;
  blurOnComplete?: boolean;
  testId?: string;
  onComplete?: (value: string) => void;
};

export const withVerificationCodeFieldVariation = withVariation<VerificationCodeFieldProps>('VerificationCodeField')();
