import { Box, PressableBox } from '@vibrant-ui/core';
import { Body } from '../Body';
import { NotificationBadge } from '../NotificationBadge';
import { Title } from '../Title';
import { withTabVariation } from './TabProps';

export const Tab = withTabVariation(
  ({
    innerRef,
    title,
    borderBottomColor,
    textColor,
    update,
    description,
    id,
    onClick,
    testId = 'tab',
    active,
    ...restProps
  }) => (
    <PressableBox
      role="tab"
      as="button"
      borderWidth={0}
      ref={innerRef}
      flexDirection="row"
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
      ariaSelected={active}
      data-testid={testId}
      {...restProps}
    >
      <Title level={[6, 6, 5]} weight="bold" color={textColor}>
        {title}
      </Title>
      {description ? (
        <Box ml={4}>
          <Body level={[5, 5, 3]} color={textColor} weight="medium">
            {description}
          </Body>
        </Box>
      ) : null}
      {update && (
        <Box mt={2} ml={4} display="flex" alignSelf="flex-start">
          <NotificationBadge kind="dot" size="sm" />
        </Box>
      )}
    </PressableBox>
  )
);
