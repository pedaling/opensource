import { cloneElement } from 'react';
import { Box, PressableBox } from '@vibrant-ui/core';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { withModalBottomSheetMenuVariation } from './ModalBottomSheetMenuProps';

export const ModalBottomSheetMenu = withModalBottomSheetMenuVariation(
  ({ rightContents, icon, onClick, title, color }) => (
    <PressableBox onClick={onClick} flexDirection="row" alignItems="center" py={12}>
      <HStack alignVertical="center" width="100%" spacing={8}>
        {icon && <Box as="span">{cloneElement(icon, { size: 20, fill: color })}</Box>}
        <Body level={1} color={color} flex={1}>
          {title}
        </Body>
        {rightContents?.()}
      </HStack>
    </PressableBox>
  )
);
