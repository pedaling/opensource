import type { RegisterOptions } from 'react-hook-form';

export type FormRuleOptions = RegisterOptions;

export type FormFieldProps<OwnProps, Value = string> = {
  name: string;
  defaultValue?: Value;
  rules?: FormRuleOptions;
} & OwnProps;
