/* eslint-disable prettier/prettier */
import validate from "card-validator";
import { useState } from "react";
import { Icon } from "@vibrant-ui/icons";
import { MountMotion } from "@vibrant-ui/motion";
import { Body } from "../Body";
import { HStack } from "../HStack";
import { Paper } from "../Paper";
import { TextField } from "../TextField";
import { VStack } from "../VStack";
import { withCardNumberFieldVariation } from "./CardNumberFieldProps";

const DEFAULT_GAPS = [4, 8, 12];

export const CardNumberField = withCardNumberFieldVariation(
  ({ onValueChange, separator = " " }) => {
    const [showLockIcon, setShowLockIcon] = useState(false);

    const [value, setValue] = useState("");

    const { card } = validate.number(value);
    const cardType = card?.niceType ?? "others";
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

      return cardNumber;
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
      <VStack>
        {/* <VStack>{card?.type}</VStack>
        <VStack>{card?.code.name}</VStack>
        <VStack>{card?.code.size}</VStack>
        <VStack>{card?.lengths}</VStack>
        <VStack>{card?.niceType}</VStack> */}
        {/* <VStack>
          {card?.gaps.map((v, idx) => (
            <VStack key={idx}>{v}</VStack>
          ))}
        </VStack>
        {/* <VStack>inputref{cardNumber}</VStack> */}
        {/* 카드 이미지 고려하여 minWidth 설정 */}
        <VStack minWidth={400}>
          <TextField
            type="number"
            autoComplete="ccNumber"
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
                    <Paper width={50} backgroundColor="primary">
                      <Body level={1}>{cardType}</Body>
                    </Paper>
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
      </VStack>
    );
  }
);

{
  /* <VStack>
  <VStack>{card?.type}</VStack>
  <VStack>{card?.code.name}</VStack>
  <VStack>{card?.code.size}</VStack>
  <VStack>{card?.lengths}</VStack>
  <VStack>{card?.niceType}</VStack>
  <VStack>
    {card?.gaps.map((v, idx) => (
      <VStack key={idx}>{v}</VStack>
    ))}
  </VStack>
  <VStack>{`fasdf,${isValid}`}</VStack>
  <VStack>
    {card?.maxLength}
    maxLength
  </VStack>
</VStack>; */
}
