import { Box } from '@vibrant-ui/core';
import { HStack } from '../HStack';
import { OutlinedButton } from '../OutlinedButton';
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
      rounded="sm"
      px={16}
      py={8}
      data-testid={testId}
    >
      <HStack spacing={12}>
        <Box py={8}>
          <IconComponent.Fill fill={fontColor} size={14} />
        </Box>
        <VStack py={6} spacing={8} width="100%">
          <Title level={7} weight="medium" color="onView1" overflowWrap="anywhere">
            {title}
          </Title>
          {contents ? (
            <Paragraph level={4} color="onView1" overflowWrap="anywhere">
              {contents}
            </Paragraph>
          ) : (
            renderContents?.()
          )}
          {buttonText ? (
            <VStack alignHorizontal="start">
              <OutlinedButton onClick={onButtonClick} size="sm">
                {buttonText}
              </OutlinedButton>
            </VStack>
          ) : null}
        </VStack>
      </HStack>
    </Box>
  )
);
