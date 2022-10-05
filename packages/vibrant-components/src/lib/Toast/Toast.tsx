import { HStack, Paper, VStack } from '@vibrant-ui/components';
import { PressableBox, Text } from '@vibrant-ui/core';
import { withToastVariation } from './ToastProps';

export const Toast = withToastVariation(
  ({ innerRef, IconComponent, color, title, buttonText, onButtonClick, ...restProps }) => (
    <HStack ref={innerRef} {...restProps} mx={20} mb={[20, 0]} mt={[0, 16]} flexGrow={[1, 0]} alignment="center">
      <Paper backgroundColor="inverseSurface" width={['100%', 'auto']}>
        <HStack px={16} py={12} alignItems="center" flexGrow={[1, 0]}>
          {IconComponent && (
            <VStack mr={8} flexShrink={0}>
              <IconComponent size={18} fill={color} />
            </VStack>
          )}
          <HStack flexGrow={[1, 0]}>
            <Text wordBreak="break-all" fontSize={14} color="onInverseSurface">
              {title}
            </Text>
          </HStack>
          {buttonText !== undefined && onButtonClick && (
            <VStack flexShrink={0}>
              <PressableBox ml={12} onClick={onButtonClick}>
                <Text fontSize={14} color="onViewInformative" fontWeight="medium">
                  {buttonText}
                </Text>
              </PressableBox>
            </VStack>
          )}
        </HStack>
      </Paper>
    </HStack>
  )
);
