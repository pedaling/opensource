import { Link } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Pressable } from '../Pressable';
import { withBreadCrumbVariation } from './BreadCrumbProps';

export const BreadCrumb = withBreadCrumbVariation(({ color = 'onView2', children, href, isExternal, onClick }) => (
  <>
    {href ? (
      <Link href={href} isExternal={isExternal} onClick={onClick}>
        <Body level={2} weight="regular" color={color} lineLimit={1}>
          {children}
        </Body>
      </Link>
    ) : (
      <Pressable onClick={onClick} cursor={onClick ? 'pointer' : 'default'}>
        <Body level={2} weight="regular" color={color} lineLimit={1}>
          {children}
        </Body>
      </Pressable>
    )}
  </>
));
