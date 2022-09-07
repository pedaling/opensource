import { Box, PressableBox, Text } from '@vibrant-ui/core';
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
    renderPrefix,
    renderSuffix,
    shrink,
    prefixText,
    suffixText,
  }) => (
    <VStack width="100%" spacing={6}>
      <Box
        flexDirection="row"
        alignItems="center"
        pl={renderPrefix ? 16 : 0}
        pr={renderSuffix ? 16 : 0}
        width="100%"
        height={50}
        borderWidth={1}
        borderStyle="solid"
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        borderRadiusLevel={1}
      >
        {renderPrefix?.()}
        <Box position="relative" width="100%" height="100%" cursor={cursor}>
          <PressableBox cursor={cursor} onClick={onLabelClick}>
            <Transition animation={animation} duration={100}>
              <Text
                position="absolute"
                zIndex={1}
                left={renderPrefix ? 12 : 16}
                right={renderSuffix ? 12 : 16}
                color={textColor}
                lineLimit={1}
                wordBreak="break-all"
              >
                {label}
              </Text>
            </Transition>
          </PressableBox>
          <HStack>
            <Text
              typography="body2"
              color={textColor}
              hidden={!prefixText || !shrink}
              flexShrink={0}
              pt={pt}
              pl={15}
              pb={pb}
            >
              {prefixText}
            </Text>
            {renderField({ color: valueColor, pt, pl, pr, pb })}
            <Text
              typography="body2"
              color={textColor}
              hidden={!suffixText || !shrink}
              flexShrink={0}
              pt={pt}
              pr={15}
              pb={pb}
            >
              {suffixText}
            </Text>
          </HStack>
        </Box>
        {renderSuffix?.()}
      </Box>
      {Boolean(helperText) && (
        <Body level={4} color={textColor}>
          {helperText}
        </Body>
      )}
    </VStack>
  )
);
