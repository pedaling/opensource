import { PressableBox } from '@vibrant-ui/core';
import { HStack } from '../HStack';
import { Title } from '../Title';
import { withModalBottomSheetMenuVariation } from './ModalBottomSheetMenuProps';

export const ModalBottomSheetMenu = withModalBottomSheetMenuVariation(
  ({ rightContents, IconComponent, onClick, title, color }) => (
    <PressableBox onClick={onClick} flexDirection="row" alignItems="center" py={12}>
      <HStack alignVertical="center" width="100%" spacing={12}>
        {IconComponent && <IconComponent size={20} fill={color} />}
        <Title level={6} color={color} flex={1} weight="regular">
          {title}
        </Title>
        {rightContents?.()}
      </HStack>
    </PressableBox>
  )
);
