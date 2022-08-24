import { Box, Text } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { Body } from '../Body';
import { VStack } from '../VStack';
import { withFieldLayoutVariation } from './FieldLayoutProps';

export const FieldLayout = withFieldLayoutVariation(
  ({ label, helperText, textColor, borderColor, animation, renderField }) => (
    <VStack width="100%" spacing={6}>
      <Box position="relative" width="100%" height={50} borderWidth={1} borderStyle="solid" borderColor={borderColor}>
        <Transition animation={animation} duration={100}>
          <Box base={Text} position="absolute" zIndex={1} left={15} color={textColor} lineLimit={1}>
            {label}
          </Box>
        </Transition>
        {renderField({ pt: 15, pl: 15, pr: 15, pb: 15 })}
      </Box>
      <Body level={4} color={textColor}>
        {helperText}
      </Body>
    </VStack>
  )
);
