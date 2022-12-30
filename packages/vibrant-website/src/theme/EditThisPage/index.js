import React from 'react';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';
import { Body, HStack } from '@vibrant-ui/components';
import { Icon } from '@vibrant-ui/icons';
export default function EditThisPage({ editUrl }) {
  return (
    <a href={editUrl} target="_blank" rel="noreferrer noopener" className={ThemeClassNames.common.editThisPage}>
      <HStack spacing={4} alignVertical="center">
        <Icon.Edit.Fill fill="primary" size={20} />
        <Body level={2} weight="medium" color="primary">
          <Translate id="theme.common.editThisPage" description="The link label to edit the current page">
            Edit this page
          </Translate>
        </Body>
      </HStack>
    </a>
  );
}
