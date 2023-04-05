/* eslint-disable @typescript-eslint/naming-convention */
import { Children, cloneElement, isValidElement } from 'react';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import type { BreadCrumbProps } from '../BreadCrumb';
import { HStack } from '../HStack';
import { Space } from '../Space';
import { withBreadCrumbsVariation } from './BreadCrumbsProps';

export const BreadCrumbs = withBreadCrumbsVariation(({ innerRef, children, Separator = Icon.ChevronRight.Thin }) => (
  <HStack as="ol" alignVertical="center" flexWrap="wrap" ref={innerRef}>
    {Children.toArray(children)
      .filter(isValidElement<BreadCrumbProps>)
      .map((child, index, array) =>
        index === 0 ? (
          <HStack key={`child-${index}`}>
            {child}
            {array.length > 1 && <Space width={4} />}
          </HStack>
        ) : (
          <HStack alignVertical="center" key={`child-${index}`}>
            <HStack>
              {typeof Separator === 'string' ? (
                <Body level={2} weight="regular" color="onView2">
                  {Separator}
                </Body>
              ) : (
                <Separator fill="onView2" size={12} />
              )}
            </HStack>
            <Space width={4} />
            {index < array.length - 1 ? child : cloneElement(child, { highlight: true })}
            {index < array.length - 1 ? <Space width={4} /> : null}
          </HStack>
        )
      )}
  </HStack>
));
