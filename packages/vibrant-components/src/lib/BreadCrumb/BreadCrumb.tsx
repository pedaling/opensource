import { Link } from '@vibrant-ui/core';
import { Body } from '../Body';
import { useBreadCrumb } from '../BreadCrumbProvider';
import { Pressable } from '../Pressable';
import { withBreadCrumbVariation } from './BreadCrumbProps';

export const BreadCrumb = withBreadCrumbVariation(({ children, href, isExternal, onClick }) => {
  const { current } = useBreadCrumb();

  return (
    <>
      {href ? (
        <Link href={href} isExternal={isExternal} onClick={onClick}>
          <Body level={2} weight="regular" color={current ? 'onView1' : 'onView2'} lineLimit={1}>
            {children}
          </Body>
        </Link>
      ) : (
        <Pressable onClick={onClick} cursor={onClick ? 'pointer' : 'default'}>
          <Body level={2} weight="regular" color={current ? 'onView1' : 'onView2'} lineLimit={1}>
            {children}
          </Body>
        </Pressable>
      )}
    </>
  );
});
