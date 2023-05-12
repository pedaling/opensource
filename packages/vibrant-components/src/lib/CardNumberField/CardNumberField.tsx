import validate from 'card-validator';
import { useState } from 'react';
import { Icon } from '@vibrant-ui/icons';
import { MountMotion } from '@vibrant-ui/motion';
import { useCustomization } from '../CustomizationProvider';
import { HStack } from '../HStack';
import { TextField } from '../TextField';
import { VStack } from '../VStack';
import { withCardNumberFieldVariation } from './CardNumberFieldProps';

const DEFAULT_GAPS = [4, 8, 12];

export const CardNumberField = withCardNumberFieldVariation(
  ({ separator = '', onValueChange, defaultValue, ...restProps }) => {
    const { cardNumberField } = useCustomization();

    const cardIconMap = cardNumberField?.cardIconMap;

    const [showLockIcon, setShowLockIcon] = useState(false);
    const [value, setValue] = useState(defaultValue ?? '');

    const { card } = validate.number(value);
    const cardType = card?.type ?? 'others';

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const CardIcon = cardIconMap?.[cardType] ?? null;
    const gaps: number[] = card?.gaps ?? DEFAULT_GAPS;

    const onCardNumberChange = (newCardNumber: string) => {
      const newCardNumberOnlyNumber = newCardNumber.match(/\d/g) ?? [];
      const totalLength = newCardNumberOnlyNumber.length;

      const breakPoints = [...gaps, maxLength];
      const newCardNumberWithDash = breakPoints.reduce((acc, breakPoint, index) => {
        const endIndex = Math.min(breakPoint, totalLength);

        const group = newCardNumberOnlyNumber.slice(breakPoints[index - 1], endIndex).join('');

        if (group) {
          if (acc) {
            return acc + separator + group;
          }

          return acc + group;
        }

        return acc;
      }, '');

      setValue(newCardNumberWithDash);
    };
    const maxLength = card?.lengths ? Math.max(...card.lengths) + gaps.length : 19;

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
      <TextField
        {...restProps}
        type="number"
        defaultValue={value}
        onValueChange={({ value, prevent }) => {
          onValueChange?.({ value, prevent });

          onCardNumberChange(value);
          if (value.length > 0) {
            setShowLockIcon(true);
          } else {
            setShowLockIcon(false);
          }

          prevent();
        }}
        maxLength={maxLength}
        renderEnd={() => (
          <HStack alignVertical="center" spacing={12}>
            <VStack>
              {CardIcon && (
                <MountMotion
                  mountAnimation={mountAnimation}
                  unmountAnimation={unmountAnimation}
                  mount={value.length !== 0}
                  easing="easeOutQuad"
                  duration={200}
                >
                  <CardIcon size={22.38} />
                </MountMotion>
              )}
            </VStack>
            {showLockIcon && <Icon.Lock.Thin fill="onView2" />}
          </HStack>
        )}
      />
    );
  }
);
