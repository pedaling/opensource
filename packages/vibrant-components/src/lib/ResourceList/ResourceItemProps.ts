import type { ComponentProps, ReactElement } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { AvatarProps } from '../Avatar';
import type { IconButton } from '../IconButton';
import type { ImageThumbnailProps } from '../ImageThumbnail/ImageThumbnailProps';

export type ResourceItemProps = {
  title: string;
  size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
  subtitle?: string;
  ImageComponent?: ReactElement<AvatarProps | ImageThumbnailProps>;
  ActionComponent?: ReactElement<ComponentProps<typeof IconButton>>;

  width?: ResponsiveValue<number | `${number}%`>;
  id?: string;
  onToggleSelect?: (args: { id?: string; selected: boolean }) => void;

  selectable?: boolean;
  defaultValue?: boolean;
  selected?: boolean;
};

export const withResourceItemVariation = withVariation<ResourceItemProps>('ResourceItem')(
  propVariant({
    props: [{ name: 'size', responsive: true }],
    variants: {
      default: {
        imageSize: 40,
        direction: 'vertical',
        height: 64,
        py: 12,
        itemSpacing: 12,
        checkboxSize: 'md' as const,
      },
      lg: {
        imageSize: 40,
        direction: 'vertical',
        height: 64,
        py: 12,
        itemSpacing: 12,
        checkboxSize: 'md' as const,
      },
      md: {
        imageSize: 30,
        direction: 'vertical',
        height: 56,
        py: 10,
        itemSpacing: 12,
        checkboxSize: 'md' as const,
      },
      sm: {
        imageSize: 20,
        direction: 'horizontal',
        height: 36,
        py: 8,
        itemSpacing: 8,
        checkboxSize: 'sm' as const,
      },
    },
  })
);
