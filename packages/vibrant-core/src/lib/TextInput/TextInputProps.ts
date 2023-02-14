import { createInterpolation } from '../createInterpolation';
import { injectContext } from '../injectContext';
import type {
  BackgroundSystemProps,
  BorderSystemProps,
  ColorSystemProps,
  DisplaySystemProps,
  InputSystemProps,
  SizingSystemProps,
  SpacingSystemProps,
  TypographySystemProps,
} from '../props';
import {
  backgroundSystemProps,
  borderSystemProps,
  colorSystemProps,
  displaySystemProps,
  inputSystemProps,
  positionSystemProps,
  sizingSystemProps,
  spacingSystemProps,
  typographySystemProps,
} from '../props';

export type SystemProps = BackgroundSystemProps &
  BorderSystemProps &
  ColorSystemProps &
  DisplaySystemProps &
  InputSystemProps &
  SpacingSystemProps &
  SizingSystemProps &
  TypographySystemProps;

const systemProps = [
  ...backgroundSystemProps,
  ...borderSystemProps,
  ...colorSystemProps,
  ...displaySystemProps,
  ...inputSystemProps,
  ...positionSystemProps,
  ...spacingSystemProps,
  ...sizingSystemProps,
  ...typographySystemProps,
];

export const systemPropNames = systemProps
  .filter(systemProp => !systemProp.disabled)
  .map(systemProp => systemProp.propName);

export type TextInputType = 'email' | 'number' | 'password' | 'text' | 'url';

export type TextInputRef = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  isFocused: () => boolean;
};

export const HTMLAutoCompleteOptions = {
  none: 'off',
  email: 'email',
  password: 'current-password',
  newPassword: 'new-password',
  name: 'name',
  username: 'username',
  familyName: 'family-name',
  givenName: 'given-name',
  middleName: 'additional-name',
  namePrefix: 'honorific-prefix',
  nameSuffix: 'honorific-suffix',
  ccNumber: 'cc-number',
  postalCode: 'postal-code',
  addressCountry: 'country',
  addressRegion: 'address-level1',
  addressStreet: 'address-line1',
  tel: 'tel',
  addressCity: 'address-level2',
  addressExtended: 'address-line2',
  birthDayDay: 'bday-day',
  birthDayFull: 'bday',
  birthDayMonth: 'bday-month',
  birthDayYear: 'bday-year',
  ccCsc: 'cc-csc',
  ccExp: 'cc-exp',
  ccExpMonth: 'cc-exp-month',
  ccExpYear: 'cc-exp-year',
  otp: 'one-time-code',
} as const;

export const IosAutoCompleteOptions = {
  none: 'none',
  email: 'emailAddress',
  password: 'password',
  newPassword: 'newPassword',
  name: 'name',
  username: 'username',
  familyName: 'familyName',
  givenName: 'givenName',
  middleName: 'middleName',
  namePrefix: 'namePrefix',
  nameSuffix: 'nameSuffix',
  ccNumber: 'creditCardNumber',
  postalCode: 'postalCode',
  addressCountry: 'countryName',
  addressRegion: 'location',
  addressStreet: 'streetAddressLine1',
  tel: 'telephoneNumber',
  addressCity: 'none',
  addressExtended: 'none',
  birthDayDay: 'none',
  birthDayFull: 'none',
  birthDayMonth: 'none',
  birthDayYear: 'none',
  ccCsc: 'none',
  ccExp: 'none',
  ccExpMonth: 'none',
  ccExpYear: 'none',
  otp: 'oneTimeCode',
} as const;

export const AndroidAutoCompleteOptions = {
  none: 'off',
  email: 'email',
  password: 'password',
  newPassword: 'password-new',
  name: 'name',
  username: 'username',
  familyName: 'name-family',
  givenName: 'name-given',
  middleName: 'name-middle',
  namePrefix: 'name-prefix',
  nameSuffix: 'name-suffix',
  ccNumber: 'cc-number',
  postalCode: 'postal-code',
  addressCountry: 'postal-address-country',
  addressCity: 'postal-address-locality',
  addressRegion: 'postal-address-region',
  addressStreet: 'street-address',
  addressExtended: 'postal-address-extended',
  otp: 'sms-otp',
  tel: 'tel',
  birthDayDay: 'birthdate-day',
  birthDayMonth: 'birthdate-month',
  birthDayYear: 'birthdate-year',
  birthDayFull: 'birthdate-full',
  ccCsc: 'off',
  ccExp: 'off',
  ccExpMonth: 'off',
  ccExpYear: 'off',
} as const;

export type AutoCapitalizeOption = 'characters' | 'none' | 'sentences' | 'words';

export type AutoCompleteOption = keyof typeof HTMLAutoCompleteOptions;

export type TextInputProps = SystemProps &
  (
    | {
        type: Exclude<TextInputType, 'number'>;
        min?: never;
        max?: never;
        pattern?: RegExp;
      }
    | {
        type: Extract<TextInputType, 'number'>;
        min?: number;
        max?: number;
        pattern?: never;
      }
  ) & {
    defaultValue?: string;
    placeholder?: string;
    maxLength?: number;
    autoFocus?: boolean;
    tabIndex?: number;
    readOnly?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    focusStyle?: SystemProps;
    autoCapitalize?: AutoCapitalizeOption;
    autoComplete?: AutoCompleteOption;
    cursor?: number;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyPress?: ({ key, prevent }: { key: string; prevent: () => void }) => void;
    onValueChange?: ({
      value,
      prevent,
      target,
    }: {
      value: string;
      prevent: () => void;
      target?: HTMLInputElement | null;
    }) => void;
    onSubmit?: (value: string) => void;
  };

export const interpolation = injectContext(
  createInterpolation(systemProps, {
    display: 'flex',
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: 'onColor',
    typography: 'body2',
    width: '100%',
    p: 0,
  })
);

export const replaceValue = ({ pattern, value }: { pattern?: RegExp; value: string }) =>
  pattern ? value.replace(new RegExp(`(?!(${pattern.source})).`, 'g'), '') : value;
