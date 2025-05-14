import { Box } from '@vibrant-ui/core';
import { ContainedButton } from '../ContainedButton';
import { HStack } from '../HStack';
import { Paragraph } from '../Paragraph';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { withCalloutVariation } from './CalloutProps';

export const Callout = withCalloutVariation(
  ({
    title,
    contents,
    renderContents,
    buttonText,
    onButtonClick,
    backgroundColor,
    fontColor,
    IconComponent,
    testId = 'callout',
  }) => (
    <Box
      width="100%"
      borderStyle="solid"
      backgroundColor={backgroundColor}
      borderWidth={1}
      borderColor="outline1"
      rounded="md"
      pr={14}
      pl={16}
      py={8}
      data-testid={testId}
    >
      <HStack spacing={12}>
        <Box py={8}>
          <IconComponent.Fill fill={fontColor} size={14} />
        </Box>
        <VStack py={6} spacing={8} width="100%">
          {title ? (
            <Title level={7} weight="medium" color="onView1" overflowWrap="anywhere">
              {title}
            </Title>
          ) : (
            renderContents?.()
          )}
          {contents ? (
            <Paragraph level={4} color="onView1" overflowWrap="anywhere">
              {contents}
            </Paragraph>
          ) : (
            renderContents?.()
          )}
          {buttonText ? (
            <VStack alignHorizontal="start">
              <ContainedButton onClick={onButtonClick} size="sm" kind="tertiary">
                {buttonText}
              </ContainedButton>
            </VStack>
          ) : null}
        </VStack>
      </HStack>
    </Box>
  )
);
