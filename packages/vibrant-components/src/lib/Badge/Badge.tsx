import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { withBadgeVariation } from './BadgeProps';

export const Badge = withBadgeVariation(
  ({ iconSize, bodyLevel, color, IconComponent, whiteSpace, children, ...rest }) => (
    <Box {...rest} flexDirection="row" alignItems="center" gap={4}>
      {IconComponent && <IconComponent size={iconSize} fill={color} />}
      <Body level={bodyLevel} weight="medium" color={color} whiteSpace={whiteSpace}>
        {children}
      </Body>
    </Box>
  )
);
