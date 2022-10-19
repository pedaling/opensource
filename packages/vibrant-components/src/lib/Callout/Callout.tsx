import { HStack, Pressable, Title, VStack } from '@vibrant-ui/components';
import { Box, Text } from '@vibrant-ui/core';
import { withCalloutVariation } from './CalloutProps';

export const Callout = withCalloutVariation(
  ({ title, description, buttonText, onButtonClick, backgroundColor, fontColor, IconComponent }) => (
    <Box
      width="100%"
      borderStyle="solid"
      backgroundColor={backgroundColor}
      borderWidth={1}
      borderColor="outline1"
      borderRadius={2}
    >
      <VStack p={16}>
        <HStack spacing={6}>
          <Box mt={2}>
            <IconComponent.Fill fill={fontColor} size={16} />
          </Box>
          <Title level={6} weight="bold" color={fontColor} overflowWrap="anywhere">
            {title}
          </Title>
        </HStack>
        {description ? (
          <Text
            mt={8}
            mb={description ? 2 : 0}
            lineHeight={18}
            fontSize={14}
            fontWeight="regular"
            overflowWrap="anywhere"
          >
            {description}
          </Text>
        ) : null}
        {buttonText ? (
          <Box mt={12} alignSelf="flex-end">
            <Pressable
              onClick={onButtonClick}
              interactions={['focus', 'active']}
              backgroundColor="surface1"
              borderRadius={2}
              overlayColor="onView1"
              py={10}
              px={14}
            >
              <Text lineHeight={18} fontSize={14} fontWeight="bold" color="onView1">
                {buttonText}
              </Text>
            </Pressable>
          </Box>
        ) : null}
      </VStack>
    </Box>
  )
);
