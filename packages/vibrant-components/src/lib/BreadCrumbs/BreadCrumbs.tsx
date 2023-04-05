/* eslint-disable @typescript-eslint/naming-convention */
import { Children, cloneElement, isValidElement } from 'react';
import { Icon } from '@vibrant-ui/icons';
import type { BreadCrumbProps } from '../BreadCrumb';
import { HStack } from '../HStack';
import { Space } from '../Space';
import { withBreadCrumbsVariation } from './BreadCrumbsProps';

export const BreadCrumbs = withBreadCrumbsVariation(({ children, Separator = Icon.ChevronRight.Thin }) => (
  <HStack as="ol" alignVertical="center" flexWrap="wrap">
    {Children.toArray(children)
      .filter(isValidElement<BreadCrumbProps>)
      .map((child, index, array) =>
        index === 0 ? (
          <HStack key={`child-${index}`}>{child}</HStack>
        ) : (
          <HStack alignVertical="center" key={`child-${index}`}>
            <HStack>
              <Separator fill="onView2" size={12} />
            </HStack>
            <Space width={4} />
            {index === array.length - 1 ? cloneElement(child, { highlight: true }) : child}
            {index === array.length - 1 ? <Space width={4} /> : null}
          </HStack>
        )
      )}
  </HStack>
));
