import { Link } from '@vibrant-ui/core';
import { Body } from '../Body';
import { useBreadCrumb } from '../BreadCrumbProvider';
import { Pressable } from '../Pressable';
import { withBreadCrumbVariation } from './BreadCrumbProps';

export const BreadCrumb = withBreadCrumbVariation(({ children, href, isExternal, onClick, testId = 'breadcrumb' }) => {
  const { current } = useBreadCrumb();

  return (
    <>
      {href ? (
        <Link
          href={href}
          isExternal={isExternal}
          onClick={onClick}
          ariaCurrent={current ? 'page' : undefined}
          data-testid={testId}
        >
          <Body
            level={2}
            weight="regular"
            color={current ? 'onView1' : 'onView2'}
            lineLimit={1}
            data-testid="breadcrumb-text"
          >
            {children}
          </Body>
        </Link>
      ) : (
        <Pressable onClick={onClick} cursor={onClick ? 'pointer' : 'default'} data-testid={testId}>
          <Body
            level={2}
            weight="regular"
            color={current ? 'onView1' : 'onView2'}
            lineLimit={1}
            data-testid="breadcrumb-text"
          >
            {children}
          </Body>
        </Pressable>
      )}
    </>
  );
});
