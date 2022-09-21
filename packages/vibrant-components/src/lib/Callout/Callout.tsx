import { HStack, VStack } from '@vibrant-ui/components';
import { Box, Text } from '@vibrant-ui/core';
import { withCalloutVariation } from './CalloutProps';

export const Callout = withCalloutVariation(({ title, description, renderFooter, color, IconComponent }) => (
  <Box width={335} background="surface2" borderStyle="solid" borderWidth={1} borderColor="outline1" borderRadius={3}>
    <VStack mx={18} mt={20}>
      <HStack alignItems="center" spacing={6} mb={12}>
        <IconComponent.Fill fill={color} size={14} />
        <Text fontSize={2} fontWeight="bold" color={color}>
          {title}
        </Text>
      </HStack>
      <VStack mb={16}>
        <Text fontSize={3} fontWeight="regular">
          {description}
        </Text>
      </VStack>
      {renderFooter?.()}
    </VStack>
  </Box>
));
