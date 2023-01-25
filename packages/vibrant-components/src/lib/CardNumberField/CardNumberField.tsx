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

export const CardNumberField = withCardNumberFieldVariation(
  ({ onValueChange }) => {
    const [showLockIcon, setShowLockIcon] = useState(false);
    const [value, setValue] = useState("");
    const { card } = validate.number(value);
    /**
     * maxLength는 각 카드사의 포멧의 최대 길이에 맞춰 강제한다.
     */
    const maxLength = (() => {
      if (card?.lengths) {
        return Math.max(...card.lengths);
      } else {
        return 20;
      }
    })();

    //MEMO: BIN을 통해서 카드사를 검증하고 포메팅할 수 있다.
    const cardType = validate.number(value).card?.niceType ?? "others";

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
          ))} */}
        {/* </VStack>
        <VStack>{`fasdf,${isValid}`}</VStack>
        <VStack>
          {card?.maxLength}
          maxLength
        </VStack> */}

        {/* 카드 이미지 고려하여 minWidth 설정 */}
        <VStack minWidth={400}>
          <TextField
            type="number"
            autoComplete="ccNumber"
            // label="라벨"
            // placeholder="플레이스홀더"
            // defaultValue=""
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
