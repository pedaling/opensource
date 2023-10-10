import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { withNotificationBadgeVariation } from './NotificationBadgeProps';

export const NotificationBadge = withNotificationBadgeVariation(({ kind, count, testId, ...props }) => (
  <Box
    display="inline-flex"
    backgroundColor="onViewError"
    whiteSpace="nowrap"
    alignItems="center"
    justifyContent="center"
    top={0}
    right={0}
    data-testid={testId}
    {...props}
  >
    {kind === 'number' && (
      <Body level={6} weight="medium">
        {count}
      </Body>
    )}
  </Box>
));
