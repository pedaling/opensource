import { Box, PressableBox, Text } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import { VStack } from '../VStack';
import { withFieldLayoutVariation } from './FieldLayoutProps';

export const FieldLayout = withFieldLayoutVariation(
  ({
    showLabelInBox,
    label,
    required,
    helperText,
    cursor,
    backgroundColor,
    labelColor,
    helperTextColor,
    borderColor,
    labelTop,
    labelTypography,
    labelLeft,
    labelRight,
    pt,
    pl,
    pr,
    pb,
    px,
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
    testId = 'field-layout',
    typography,
    helperTextTypography,
    helperTextSpacing,
    height,
    spacing,
    iconSize,
    hitSlop,
    useFixedLabel,
  }) => (
    <VStack data-testid={testId} width="100%" spacing={helperTextSpacing}>
      {!showLabelInBox && !useFixedLabel && (
        <Text typography={labelTypography} color={labelColor} lineLimit={1} fontWeight="medium">
          {label}
          {required && (
            <Text color="onViewError" fontWeight="medium" ml={2}>
              *
            </Text>
          )}
        </Text>
      )}
      <Box
        flexDirection="row"
        alignItems="center"
        pl={renderStart ? px : 0}
        pr={renderEnd ? px : 0}
        width="100%"
        height={height}
        borderWidth={1}
        borderStyle="solid"
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        rounded="sm"
      >
        <VStack flexShrink={0}>{renderStart?.()}</VStack>
        <Box width="100%" height="100%" cursor={cursor}>
          {showLabelInBox && !useFixedLabel && (
            <PressableBox cursor={cursor} onClick={onLabelClick} tabIndex={-1}>
              <Transition
                animation={{
                  top: labelTop,
                  typography: labelTypography,
                }}
                duration={100}
              >
                <Text
                  position="absolute"
                  zIndex={1}
                  left={labelLeft}
                  right={labelRight}
                  color={labelColor}
                  lineLimit={1}
                >
                  {label}
                </Text>
              </Transition>
            </PressableBox>
          )}
          {useFixedLabel ? (
            <Box flexDirection="row" alignItems="center" height="100%">
              <Text
                typography={labelTypography}
                color={labelColor}
                lineLimit={1}
                fontWeight="medium"
                flexShrink={0}
                pt={labelTop}
                pb={pb}
                pl={labelLeft}
                pr={labelRight}
              >
                {label}
              </Text>
              <Box flex={1} flexDirection="row" alignItems="baseline">
                <Text
                  typography={typography}
                  color="onView2"
                  hidden={!prefixText}
                  flexShrink={0}
                  pl={prefixText ? pl : 0}
                >
                  {prefixText}
                </Text>
                {renderField({
                  height: height - 2,
                  color: valueColor,
                  pt,
                  pb,
                  typography,
                })}
                <Text
                  typography={typography}
                  color="onView2"
                  hidden={!suffixText}
                  flexShrink={0}
                  pt={pt}
                  pr={suffixText ? pr : 0}
                  pb={pb}
                >
                  {suffixText}
                </Text>
              </Box>
            </Box>
          ) : (
            <Box flexDirection="row" alignItems="baseline">
              <Text
                typography={typography}
                color="onView2"
                hidden={!prefixText || (!shrink && Boolean(label))}
                flexShrink={0}
                pt={pt}
                pl={labelLeft}
                pb={pb}
              >
                {prefixText}
              </Text>
              {renderField({ height: height - 2, color: valueColor, pt, pl, pr, pb, typography })}
              <Text
                typography={typography}
                color="onView2"
                hidden={!suffixText || (!shrink && Boolean(label))}
                flexShrink={0}
                pt={pt}
                pr={renderEnd || showClearButton ? spacing : px}
                pb={pb}
              >
                {suffixText}
              </Text>
            </Box>
          )}
        </Box>
        {showClearButton && (
          <PressableBox flexShrink={0} hitSlop={hitSlop} mr={spacing} onClick={onClearButtonClick}>
            <Icon.CloseCircle.Fill size={iconSize} fill="onView2" />
          </PressableBox>
        )}
        <VStack flexShrink={0}>{renderEnd?.()}</VStack>
      </Box>
      {Boolean(helperText) && (
        <Text typography={helperTextTypography} color={helperTextColor}>
          {helperText}
        </Text>
      )}
    </VStack>
  )
);
