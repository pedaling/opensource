import { Box, Text } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { Pressable } from '../Pressable';
import { VStack } from '../VStack';
import { withToastVariation } from './ToastProps';

export const Toast = withToastVariation(
  ({ innerRef, IconComponent, color, title, buttonText, onButtonClick, ...restProps }) => (
    <HStack ref={innerRef} {...restProps} px={20} mb={[20, 0]} mt={[0, 16]} width="100%" alignHorizontal="center">
      <Box elevationLevel={4}>
        <Paper maxWidth={724} borderRadiusLevel={1} backgroundColor="inverseSurface" flexGrow={[1, 0]}>
          <HStack px={16} py={12} alignVertical="center">
            {IconComponent && (
              <VStack mr={8} flexShrink={0}>
                <IconComponent size={18} fill={color} />
              </VStack>
            )}
            <Text lineHeight={18} wordBreak="keep-all" fontSize={14} color="onInverseSurface">
              {title}
            </Text>
            {isDefined(buttonText) && onButtonClick && (
              <VStack flexShrink={0}>
                <Pressable interactions={['focus', 'active']} ml={12} onClick={onButtonClick}>
                  <Text lineHeight={18} fontSize={14} color="onViewInformative" fontWeight="medium">
                    {buttonText}
                  </Text>
                </Pressable>
              </VStack>
            )}
          </HStack>
        </Paper>
      </Box>
    </HStack>
  )
);
