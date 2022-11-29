import type { ComponentProps, FC } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ConfigProvider } from '@vibrant-ui/core';
import { VStack } from '../VStack';
import { PageSizeSection } from './PageSizeSection';
import { pageSizeSectionTranslation } from '.';

export default {
  title: 'PageSizeSection',
  component: PageSizeSection,
  argTypes: {
    locale: {
      type: {
        name: 'enum',
        value: ['ko', 'en', 'ja'],
      },
      defaultValue: 'ko',
    },
  },
  args: {
    pageSizeOptions: [
      {
        label: '10',
        value: 10,
        initial: true,
        onClick: () => {},
      },
      {
        label: '100',
        value: 100,
        initial: false,
        onClick: () => {},
      },
    ],
  },
} as ComponentMeta<typeof PageSizeSection>;
const LocalizedPageSizeSection: FC<ComponentProps<typeof PageSizeSection> & { locale?: 'en' | 'ja' | 'ko' }> = ({
  locale = 'ko',
  ...props
}) => (
  <ConfigProvider translations={{ pageSizeSection: pageSizeSectionTranslation[locale] }}>
    <PageSizeSection {...props} />
  </ConfigProvider>
);

export const Basic: ComponentStory<typeof PageSizeSection> = props => (
  <VStack width="100%" p={20} alignHorizontal="end">
    <LocalizedPageSizeSection {...props} />
  </VStack>
);
