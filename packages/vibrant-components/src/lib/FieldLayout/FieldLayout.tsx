import { Box, PressableBox, Text } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import { withFieldLayoutVariation } from './FieldLayoutProps';

export const FieldLayout = withFieldLayoutVariation(
  ({
    label,
    helperText,
    cursor,
    backgroundColor,
    labelColor,
    helperTextColor,
    borderColor,
    animation,
    pt,
    pl,
    pr,
    pb,
    height,
    iconSize,
    prefixTextPl,
    suffixTextPr,
    labelPositionLeft,
    labelPositionRight,
    layoutFieldPl,
    layoutFieldPr,
    valueColor,
    onLabelClick,
    renderField,
    renderStart,
    renderEnd,
    showClearButton,
    onClearButtonClick,
    shrink,
    prefixText,
    suffixText,
  }) => (
    <VStack width="100%" spacing={6}>
      <Box
        flexDirection="row"
        alignItems="center"
        pl={layoutFieldPl}
        pr={layoutFieldPr}
        width="100%"
        height={height}
        borderWidth={1}
        borderStyle="solid"
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        borderRadiusLevel={1}
      >
        <VStack flexShrink={0}>{renderStart?.()}</VStack>
        <Box width="100%" height="100%" cursor={cursor}>
          <PressableBox cursor={cursor} onClick={onLabelClick}>
            <Transition animation={animation} duration={100}>
              <Text
                position="absolute"
                zIndex={1}
                left={labelPositionLeft}
                right={labelPositionRight}
                color={labelColor}
                lineLimit={1}
                top={10}
              >
                {label}
              </Text>
            </Transition>
          </PressableBox>
          <HStack alignVertical="center">
            <Text
              typography="body4"
              color="onView2"
              hidden={!prefixText || (!shrink && Boolean(label))}
              flexShrink={0}
              pt={pt}
              pl={prefixTextPl}
              pb={pb}
            >
              {prefixText}
            </Text>

            {renderField({ height, color: valueColor, pt, pl, pr, pb })}

            <Text
              typography="body2"
              color="onView2"
              hidden={!suffixText || (!shrink && Boolean(label))}
              flexShrink={0}
              pt={pt}
              pr={suffixTextPr}
              pb={pb}
            >
              {suffixText}
            </Text>
          </HStack>
        </Box>
        {showClearButton && (
          <PressableBox flexShrink={0} hitSlop={8} mr={12} onClick={onClearButtonClick}>
            <Icon.CloseCircle.Fill size={iconSize} fill="onView2" />
          </PressableBox>
        )}
        <VStack flexShrink={0}>{renderEnd?.()}</VStack>
      </Box>
      {Boolean(helperText) && (
        <Body level={4} color={helperTextColor}>
          {helperText}
        </Body>
      )}
    </VStack>
  )
);
