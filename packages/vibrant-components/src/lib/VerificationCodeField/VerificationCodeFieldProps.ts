import { withVariation } from '@vibrant-ui/core';

type VerificationCodeFieldProps = {
  length: number;
  state?: 'default' | 'error';
  errorMessage?: string;
};

export const withVerificationCodeFieldVariation = withVariation<VerificationCodeFieldProps>()();
