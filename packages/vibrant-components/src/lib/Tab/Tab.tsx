import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
import { NotificationBadge } from '../NotificationBadge';
import { Title } from '../Title';
import { withTabVariation } from './TabProps';

export const Tab = withTabVariation(
  ({ innerRef, title, borderBottomColor, textColor, update, description, id, onClick, ...restProps }) => (
    <Box
      as="button"
      borderWidth={0}
      ref={innerRef}
      flexShrink={0}
      flexGrow={1}
      flexDirection="row"
      display="inline-flex"
      borderBottomWidth={2}
      borderBottomStyle="solid"
      borderBottomColor={borderBottomColor}
      position="relative"
      cursor="pointer"
      justifyContent="center"
      alignItems="center"
      onClick={() => onClick?.(id)}
      pt={12}
      pb={10}
      backgroundColor="inherit"
      {...restProps}
    >
      <Title level={[6, 6, 5]} weight="bold" color={textColor}>
        {title}
      </Title>
      {description && (
        <Box ml={4}>
          <Body level={[5, 5, 3]} color={textColor} weight="medium">
            {description}
          </Body>
        </Box>
      )}
      {update && (
        <Box mt={2} ml={4} display="flex" alignSelf="flex-start">
          <NotificationBadge kind="dot" size="sm" />
        </Box>
      )}
    </Box>
  )
);
