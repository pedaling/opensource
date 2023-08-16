import { Box, PressableBox, Text } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Transition } from '@vibrant-ui/motion';
import { Body } from '../Body';
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
    bodyLevel,
    helperTextBodyLevel,
    helperTextSpacing,
    height,
    spacing,
    iconSize,
    hitSlop,
  }) => (
    <VStack data-testid={testId} width="100%" spacing={helperTextSpacing}>
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
          <PressableBox cursor={cursor} onClick={onLabelClick} tabIndex={-1}>
            <Transition
              animation={{
                top: labelTop,
                typography: labelTypography,
              }}
              duration={100}
            >
              <Text position="absolute" zIndex={1} left={labelLeft} right={labelRight} color={labelColor} lineLimit={1}>
                {label}
              </Text>
            </Transition>
          </PressableBox>
          <Box flexDirection="row" alignItems="baseline">
            <Body
              level={bodyLevel}
              color="onView2"
              hidden={!prefixText || (!shrink && Boolean(label))}
              flexShrink={0}
              pt={pt}
              pl={labelLeft}
              pb={pb}
            >
              {prefixText}
            </Body>

            {renderField({ height: height - 2, color: valueColor, pt, pl, pr, pb, typography: `body${bodyLevel}` })}

            <Body
              level={bodyLevel}
              color="onView2"
              hidden={!suffixText || (!shrink && Boolean(label))}
              flexShrink={0}
              pt={pt}
              pr={renderEnd || showClearButton ? spacing : px}
              pb={pb}
            >
              {suffixText}
            </Body>
          </Box>
        </Box>
        {showClearButton && (
          <PressableBox flexShrink={0} hitSlop={hitSlop} mr={spacing} onClick={onClearButtonClick}>
            <Icon.CloseCircle.Fill size={iconSize} fill="onView2" />
          </PressableBox>
        )}
        <VStack flexShrink={0}>{renderEnd?.()}</VStack>
      </Box>
      {Boolean(helperText) && (
        <Body level={helperTextBodyLevel} color={helperTextColor}>
          {helperText}
        </Body>
      )}
    </VStack>
  )
);
