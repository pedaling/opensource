import { HStack, Pressable, Title, VStack } from '@vibrant-ui/components';
import { Box, Text } from '@vibrant-ui/core';
import { withCalloutVariation } from './CalloutProps';

export const Callout = withCalloutVariation(
  ({ title, description, action, onActionClick, backgroundColor, fontColor, IconComponent }) => (
    <Box
      width="100%"
      background={backgroundColor}
      borderStyle="solid"
      borderWidth={1}
      borderColor="outline1"
      borderRadius={3}
    >
      <VStack p={16}>
        <HStack mt={description ? 2 : 0} alignItems="center" spacing={6}>
          <IconComponent.Fill fill={fontColor} size={16} />
          <Title level={6} weight="bold" color={fontColor}>
            {title}
          </Title>
        </HStack>
        {description ? (
          <VStack mt={8} mb={description ? 2 : 0}>
            <Text lineHeight={18} fontSize={14} fontWeight="regular">
              {description}
            </Text>
          </VStack>
        ) : null}
        {action ? (
          <HStack mt={12} alignSelf="end">
            <Pressable
              onClick={onActionClick}
              interactions={['focus', 'active']}
              backgroundColor="surface1"
              borderRadius={2}
              py={10}
              px={14}
            >
              <Text lineHeight={18} fontSize={14} fontWeight="bold" color="onView1">
                {action}
              </Text>
            </Pressable>
          </HStack>
        ) : null}
      </VStack>
    </Box>
  )
);
