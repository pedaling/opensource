import React from 'react';
import Link from '@docusaurus/Link';
import { Body, HStack, VStack } from '@vibrant-ui/components';
import { Icon } from '@vibrant-ui/icons';
export default function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props;
  return (
    <VStack width="100%">
      <Link to={permalink}>
        {isNext ? (
          <VStack alignSelf="flex-end" alignHorizontal="end" spacing={8}>
            <Body mr={2} level={3} color="onView2">
              {subLabel}
            </Body>
            <HStack spacing={2} alignVertical="center">
              <Body level={2} weight="bold" color="informative">
                {title}
              </Body>
              <Icon.ChevronRight.Fill fill="informative" size={14} />
            </HStack>
          </VStack>
        ) : (
          <VStack alignSelf="flex-start" alignHorizontal="start" spacing={8}>
            <Body ml={2} level={3} color="informative">
              {subLabel}
            </Body>
            <HStack spacing={2} alignVertical="center">
              <Icon.ChevronLeft.Fill fill="informative" size={14} />
              <Body level={2} weight="bold" color="informative">
                {title}
              </Body>
            </HStack>
          </VStack>
        )}
      </Link>
    </VStack>
  );
}
