import { fireEvent, waitFor } from '@testing-library/react';
import { PortalRootProvider } from '@vibrant-ui/core';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Avatar } from '../Avatar';
import { ResourceList } from './ResourceList';

describe('ResourceList', () => {
  const { render } = createReactRenderer(children => <PortalRootProvider zIndex={1}>{children}</PortalRootProvider>);

  it('should render default ResourceList with single select', () => {
    const { getByText } = render(
      <ResourceList multiSelect={false}>
        <ResourceList.Item
          id="1"
          title="Resource Item 1"
          ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
          subtitle="Description 1"
        />
      </ResourceList>
    );

    expect(getByText('Resource Item 1')).toBeTruthy();
    expect(getByText('Description 1')).toBeTruthy();
  });

  it('should handle single selection', async () => {
    const onSelect = jest.fn();
    const { getByText } = render(
      <ResourceList selectedIds={[]} onSelect={onSelect}>
        <ResourceList.Item
          id="1"
          title="Resource Item 1"
          ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
          subtitle="Description 1"
        />
      </ResourceList>
    );

    fireEvent.click(getByText('Resource Item 1'));
    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith('1');
    });
  });

  it('should handle multi-selection when multiSelect is true', async () => {
    const onChangeSelectedIds = jest.fn();
    const { getByText } = render(
      <ResourceList multiSelect={true} selectedIds={[]} onChangeSelectedIds={onChangeSelectedIds}>
        <ResourceList.Item
          id="1"
          title="Resource Item 1"
          ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
          subtitle="Description 1"
        />
        <ResourceList.Item
          id="2"
          title="Resource Item 2"
          ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
          subtitle="Description 2"
        />
      </ResourceList>
    );

    fireEvent.click(getByText('Resource Item 1'));
    fireEvent.click(getByText('Resource Item 2'));

    await waitFor(() => {
      expect(onChangeSelectedIds).toHaveBeenCalledWith(['1', '2']);
    });
  });

  it('should render with pre-selected items', () => {
    const { getByText } = render(
      <ResourceList multiSelect={true} selectedIds={['1', '3']}>
        <ResourceList.Item
          id="1"
          title="Resource Item 1"
          ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
          subtitle="Description 1"
        />
        <ResourceList.Item
          id="2"
          title="Resource Item 2"
          ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
          subtitle="Description 2"
        />
        <ResourceList.Item
          id="3"
          title="Resource Item 3"
          ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
          subtitle="Description 3"
        />
      </ResourceList>
    );

    expect(getByText('Resource Item 1')).toBeTruthy();
    expect(getByText('Resource Item 2')).toBeTruthy();
    expect(getByText('Resource Item 3')).toBeTruthy();
  });
});
