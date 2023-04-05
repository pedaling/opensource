import { Link } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Pressable } from '../Pressable';
import { withBreadCrumbVariation } from './BreadCrumbProps';

export const BreadCrumb = withBreadCrumbVariation(({ color = 'onView2', children, href, isExternal, onClick }) => (
  <Pressable onClick={onClick} cursor={href || onClick ? 'pointer' : 'default'}>
    {href ? (
      <Link href={href} isExternal={isExternal}>
        <Body level={2} weight="regular" color={color} lineLimit={1}>
          {children}
        </Body>
      </Link>
    ) : (
      <Body level={2} weight="regular" color={color} lineLimit={1}>
        {children}
      </Body>
    )}
  </Pressable>
));
