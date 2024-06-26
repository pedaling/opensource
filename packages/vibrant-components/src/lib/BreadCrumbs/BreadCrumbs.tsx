/* eslint-disable @typescript-eslint/naming-convention */
import { Children, isValidElement } from 'react';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import type { BreadCrumbProps } from '../BreadCrumb';
import { BreadCrumbProvider } from '../BreadCrumbProvider';
import { HStack } from '../HStack';
import { Space } from '../Space';
import { withBreadCrumbsVariation } from './BreadCrumbsProps';

export const BreadCrumbs = withBreadCrumbsVariation(
  ({ innerRef, children, Separator = Icon.ChevronRight.Thin, testId = 'breadcrumbs' }) => (
    <HStack as="nav" ariaLabel="Breadcrumb" data-testid={testId}>
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
              <HStack as="li" alignVertical="center" key={`child-${index}`}>
                <HStack>
                  {typeof Separator === 'string' ? (
                    <Body level={2} weight="regular" color="onView2" data-testid="separator">
                      {Separator}
                    </Body>
                  ) : (
                    <Separator fill="onView2" size={12} data-testid="separator" />
                  )}
                </HStack>
                <Space width={4} />
                {index === array.length - 1 ? (
                  <BreadCrumbProvider current={true}>
                    <>{child}</>
                  </BreadCrumbProvider>
                ) : (
                  child
                )}
                {index < array.length - 1 ? <Space width={4} /> : null}
              </HStack>
            )
          )}
      </HStack>
    </HStack>
  )
);
