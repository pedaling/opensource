import validate from 'card-validator';
import { useState } from 'react';
import { Image } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { MountMotion } from '@vibrant-ui/motion';
import { HStack } from '../HStack';
import { TextField } from '../TextField';
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

export const CardNumberField = withCardNumberFieldVariation(({ onValueChange, separator = ' ' }) => {
  const [showLockIcon, setShowLockIcon] = useState(false);

  const [value, setValue] = useState('');

  const { card } = validate.number(value);
  const cardType = (card?.type ?? 'others') as CardType;
  const cardImageSource = cardImage[CARD_TYPE_IMG_MAP[cardType]]?.default;
  const gaps = card?.gaps ?? DEFAULT_GAPS;

  const prettyCardNumber = (cardNumber: string) => {
    const offsets = [0].concat(gaps, cardNumber.length);
    const components = [];

    for (let i = 0; offsets[i] < cardNumber.length; i++) {
      const start = offsets[i];
      const end = Math.min(offsets[i + 1], cardNumber.length);

      components.push(cardNumber.substring(start, end));
    }

    return components.join(separator);
  };

  /**
   * maxLength는 각 카드사의 포멧의 최대 길이에 맞춰 강제한다.
   */
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

  return (
    <VStack minWidth={400}>
      <TextField
        type="number"
        autoComplete="ccNumber"
        clearable={true}
        defaultValue={prettyCardNumber(value)}
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
        maxLength={maxLength}
        onValueChange={({ value, prevent }) => {
          setValue(value);

          prevent();
          if (value.length > 0) {
            setShowLockIcon(true);
          } else {
            setShowLockIcon(false);
          }

          if (onValueChange) {
            onValueChange({ value, prevent });
          }
        }}
      />
    </VStack>
  );
});
