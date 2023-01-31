import validate from 'card-validator';
import { useCallback, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { Image, TextInput } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { MountMotion } from '@vibrant-ui/motion';
import { FieldLayout } from '../FieldLayout';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import cardImage from './assets';
import { withCardNumberFieldVariation } from './CardNumberFieldProps';

type CardType =
  | 'american-express'
  | 'diners-club'
  | 'discover'
  | 'jcb'
  | 'maestro'
  | 'mastercard'
  | 'others'
  | 'unionpay'
  | 'visa';
type ImageType =
  | 'PaymentMethodImageAmex'
  | 'PaymentMethodImageDinersClub'
  | 'PaymentMethodImageDiscover'
  | 'PaymentMethodImageJCB'
  | 'PaymentMethodImageMaestro'
  | 'PaymentMethodImageMasterCard'
  | 'PaymentMethodImageOthers'
  | 'PaymentMethodImageUnionPay'
  | 'PaymentMethodImageVisa';

const CARD_TYPE_IMG_MAP: Record<CardType, ImageType> = {
  'american-express': 'PaymentMethodImageAmex',
  'diners-club': 'PaymentMethodImageDinersClub',
  discover: 'PaymentMethodImageDiscover',
  jcb: 'PaymentMethodImageJCB',
  maestro: 'PaymentMethodImageMaestro',
  mastercard: 'PaymentMethodImageMasterCard',
  unionpay: 'PaymentMethodImageUnionPay',
  visa: 'PaymentMethodImageVisa',
  others: 'PaymentMethodImageOthers',
};
const DEFAULT_GAPS = [4, 8, 12];

export const CardNumberField = withCardNumberFieldVariation(
  ({
    state,
    label,
    placeholder,
    helperText,
    disabled,
    renderStart,
    onValueChange,
    clearable = true,
    onFocus,
    onBlur,
    separator = ' ',
    ...restProps
  }) => {
    const [showLockIcon, setShowLockIcon] = useState(false);

    const [value, setValue] = useState('');

    const { card } = validate.number(value);
    const cardType = (card?.type ?? 'others') as CardType;
    const cardImageSource = cardImage[CARD_TYPE_IMG_MAP[cardType]]?.default;
    const gaps = card?.gaps ?? DEFAULT_GAPS;

    const prettyCardNumber = useCallback(
      (cardNumber: string) => {
        const offsets = [0].concat(gaps, cardNumber.length);
        const components = [];

        for (let i = 0; offsets[i] < cardNumber.length; i++) {
          const start = offsets[i];
          const end = Math.min(offsets[i + 1], cardNumber.length);

          components.push(cardNumber.substring(start, end));
        }

        return components.join(separator);
      },
      [gaps, separator]
    );

    const maxLength = (() => {
      if (card?.lengths) {
        return Math.max(...card.lengths);
      } else {
        return 16;
      }
    })();

    const mountAnimation = {
      opacity: {
        from: 0,
        to: 1,
      },
    };
    const unmountAnimation = {
      opacity: {
        from: 1,
        to: 0,
      },
    };
    const inputRef = useRef<TextInputRef | null>(null);
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value.length > 0;
    const onClearButtonClick = () => {
      setValue('');

      setShowLockIcon(false);

      inputRef.current?.focus();

      setIsFocused(true);
    };

    return (
      <FieldLayout
        label={label}
        helperText={helperText}
        state={state}
        focused={isFocused}
        filled={value.length > 0}
        disabled={disabled}
        renderStart={renderStart}
        renderEnd={() => (
          <HStack alignVertical="center" spacing={12}>
            <VStack>
              <MountMotion
                mountAnimation={mountAnimation}
                unmountAnimation={unmountAnimation}
                mount={value.length !== 0}
                easing="easeOutQuad"
                duration={200}
              >
                <Image width={22.38} src={cardImageSource} />
              </MountMotion>
            </VStack>
            {showLockIcon && <Icon.Lock.Thin fill="onView2" />}
          </HStack>
        )}
        showClearButton={clearable && hasValue}
        onClearButtonClick={onClearButtonClick}
        onLabelClick={() => inputRef.current?.focus()}
        renderField={style => (
          <TextInput
            ref={inputRef}
            type="number"
            maxLength={maxLength}
            defaultValue={prettyCardNumber(value)}
            placeholder={!label || isFocused || value ? placeholder : ''}
            placeholderColor="onView3"
            disabled={disabled}
            autoComplete="ccNumber"
            onFocus={() => {
              onFocus?.();

              setIsFocused(true);
            }}
            onBlur={() => {
              onBlur?.();

              setIsFocused(false);
            }}
            onValueChange={({ value, prevent }) => {
              let isPrevented = false;

              onValueChange?.({
                value,
                prevent: () => {
                  isPrevented = true;

                  prevent();
                },
              });

              if (!isPrevented) {
                setValue(value);
              }

              if (value.length > 0) {
                setShowLockIcon(true);
              } else {
                setShowLockIcon(false);
              }

              prevent();
            }}
            {...style}
            {...restProps}
          />
        )}
      />
    );
  }
);
