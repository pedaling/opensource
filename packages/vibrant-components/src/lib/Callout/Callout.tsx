import { Box, Text } from '@vibrant-ui/core';
import { ContainedButton } from '../ContainedButton';
import { HStack } from '../HStack';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { withCalloutVariation } from './CalloutProps';

export const Callout = withCalloutVariation(
  ({ title, contents, renderContents, buttonText, onButtonClick, backgroundColor, fontColor, IconComponent }) => (
    <Box
      width="100%"
      borderStyle="solid"
      backgroundColor={backgroundColor}
      borderWidth={1}
      borderColor="outline1"
      borderRadius={2}
      p={15}
    >
      <HStack spacing={6}>
        <Box mt={1}>
          <IconComponent.Fill fill={fontColor} size={16} />
        </Box>
        <Title level={7} weight="bold" color={fontColor} overflowWrap="anywhere">
          {title}
        </Title>
      </HStack>
      {contents ? (
        <Text
          color="onView1"
          mt={8}
          mb={contents ? 2 : 0}
          lineHeight={18}
          fontSize={14}
          fontWeight="regular"
          flex={1}
          overflowWrap="anywhere"
        >
          {contents}
        </Text>
      ) : (
        renderContents?.()
      )}
      {buttonText ? (
        <VStack alignHorizontal="end" mt={12}>
          <ContainedButton onClick={onButtonClick} size="md" kind="tertiary">
            {buttonText}
          </ContainedButton>
        </VStack>
      ) : null}
    </Box>
  )
);
