import { Box, PressableBox, Text } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { Body } from '../Body';
import { VStack } from '../VStack';
import { withFieldLayoutVariation } from './FieldLayoutProps';

export const FieldLayout = withFieldLayoutVariation(
  ({
    label,
    helperText,
    textColor,
    borderColor,
    animation,
    pt,
    pl,
    pr,
    pb,
    valueColor,
    onLabelClick,
    renderField,
    ...restProps
  }) => (
    <VStack width="100%" spacing={6}>
      <Box
        position="relative"
        width="100%"
        height={50}
        borderWidth={1}
        borderStyle="solid"
        borderColor={borderColor}
        borderRadiusLevel={1}
        {...restProps}
      >
        <PressableBox onClick={onLabelClick}>
          <Transition animation={animation} duration={100}>
            <Text position="absolute" zIndex={1} left={15} color={textColor} lineLimit={1}>
              {label}
            </Text>
          </Transition>
        </PressableBox>
        {renderField({ color: valueColor, pt, pl, pr, pb })}
      </Box>
      <Body level={4} color={textColor}>
        {helperText}
      </Body>
    </VStack>
  )
);
