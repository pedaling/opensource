/* eslint-disable @typescript-eslint/naming-convention */
import { Children, isValidElement } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import type { BreadCrumbProps } from '../BreadCrumb';
import { BreadCrumbProvider } from '../BreadCrumbProvider';
import { HStack } from '../HStack';
import { Space } from '../Space';
import { withBreadCrumbsVariation } from './BreadCrumbsProps';

export const BreadCrumbs = withBreadCrumbsVariation(
  ({ innerRef, children, Separator = Icon.ChevronRight.Thin, ariaCurrent = 'true' }) => (
    <HStack as="nav" ariaLabel="Breadcrumb">
      <HStack as="ol" alignVertical="center" flexWrap="wrap" ref={innerRef}>
        {Children.toArray(children)
          .filter(isValidElement<BreadCrumbProps>)
          .map((child, index, array) =>
            index === 0 ? (
              <HStack as="li" key={`child-${index}`}>
                {child}
                {array.length > 1 && <Space width={4} />}
              </HStack>
            ) : (
              <Box
                as="li"
                key={`child-${index}`}
                flexDirection="row"
                alignItems="center"
                ariaCurrent={index === array.length - 1 ? ariaCurrent : undefined}
              >
                <Box>
                  {typeof Separator === 'string' ? (
                    <Body level={2} weight="regular" color="onView2">
                      {Separator}
                    </Body>
                  ) : (
                    <Separator fill="onView2" size={12} />
                  )}
                </Box>
                <Space width={4} />
                {index === array.length - 1 ? (
                  <BreadCrumbProvider current={true}>
                    <>{child}</>
                  </BreadCrumbProvider>
                ) : (
                  child
                )}
                {index < array.length - 1 ? <Space width={4} /> : null}
              </Box>
            )
          )}
      </HStack>
    </HStack>
  )
);
