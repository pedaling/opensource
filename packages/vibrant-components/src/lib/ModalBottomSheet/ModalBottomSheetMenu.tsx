import { PressableBox } from '@vibrant-ui/core';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { withModalBottomSheetMenuVariation } from './ModalBottomSheetMenuProps';

export const ModalBottomSheetMenu = withModalBottomSheetMenuVariation(
  ({ rightContents, IconComponent, onClick, title, color }) => (
    <PressableBox onClick={onClick} flexDirection="row" alignItems="center" py={12}>
      <HStack alignVertical="center" width="100%" spacing={8}>
        {IconComponent && <IconComponent size={20} fill={color} />}
        <Body level={1} color={color} flex={1}>
          {title}
        </Body>
        {rightContents?.()}
      </HStack>
    </PressableBox>
  )
);
