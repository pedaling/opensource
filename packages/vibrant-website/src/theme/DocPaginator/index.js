import React from 'react';
import Translate from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import { HStack } from '@vibrant-ui/components';
export default function DocPaginator(props) {
  const { previous, next } = props;
  return (
    <HStack alignHorizontal="space-between">
      {previous && (
        <PaginatorNavLink
          {...previous}
          subLabel={
            <Translate id="theme.docs.paginator.previous" description="The label used to navigate to the previous doc">
              Previous
            </Translate>
          }
        />
      )}

      {next && (
        <PaginatorNavLink
          {...next}
          subLabel={
            <Translate id="theme.docs.paginator.next" description="The label used to navigate to the next doc">
              Next
            </Translate>
          }
          isNext={true}
        />
      )}
    </HStack>
  );
}
