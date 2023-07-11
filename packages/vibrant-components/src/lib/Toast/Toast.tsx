import { isDefined } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { Pressable } from '../Pressable';
import { VStack } from '../VStack';
import { withToastVariation } from './ToastProps';

export const Toast = withToastVariation(
  ({ innerRef, IconComponent, color, title, buttonText, onButtonClick, testId = 'toast', ...restProps }) => (
    <HStack ref={innerRef} {...restProps} px={20} width="100%" alignHorizontal="center" data-testid={testId}>
      <Paper borderRadiusLevel={1} backgroundColor="inverseSurface" maxWidth={816} width={['100%', 'auto']}>
        <HStack px={16} py={12} alignVertical="center" width={['100%', 'auto']}>
          {IconComponent && (
            <VStack mr={8} flexShrink={0}>
              <IconComponent size={18} fill={color} />
            </VStack>
          )}
          <Body level={2} wordBreak="keep-all" color="onInverseSurface">
            {title}
          </Body>
          {isDefined(buttonText) && onButtonClick && (
            <VStack flexShrink={0} ml="auto">
              <Pressable interactions={['focus', 'active']} ml={12} onClick={onButtonClick}>
                <Body level={2} color="onViewInformative" weight="medium">
                  {buttonText}
                </Body>
              </Pressable>
            </VStack>
          )}
        </HStack>
      </Paper>
    </HStack>
  )
);
