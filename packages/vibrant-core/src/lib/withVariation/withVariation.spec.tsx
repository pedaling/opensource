import type { MutableRefObject } from 'react';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { withVariation } from './withVariation';

type Props = {
  kind: 'primary' | 'secondary';
  ref?: MutableRefObject<{ test?: number }>;
};

describe('withVariation', () => {
  const { render } = createReactRenderer();

  const mockFirstPropVariant = jest.fn(() => ({
    backgroundColor: 'red',
  }));

  const mockSecondPropVariant = jest.fn(() => ({
    color: 'white',
  }));

  const mockRender = jest.fn<any, any>(() => null);

  const Component = withVariation<Props>('Test')(mockFirstPropVariant, mockSecondPropVariant)(props =>
    mockRender(props)
  );

  afterEach(() => {
    mockRender.mockClear();
  });

  describe('when component rendered', () => {
    beforeEach(() => {
      render(<Component kind="primary" />);
    });

    it('first propVariant function received component props', () => {
      expect(mockFirstPropVariant).toBeCalledWith({ kind: 'primary' });
    });

    it('second propVariant function received first propVariant return value', () => {
      expect(mockSecondPropVariant).toBeCalledWith({ backgroundColor: 'red' });
    });

    it('component received second propVariant return value', () => {
      expect(mockRender).toBeCalledWith({ color: 'white' });
    });
  });

  describe('when component with ref rendered', () => {
    const refObject: Props['ref'] = { current: {} };

    beforeEach(() => {
      refObject.current = { test: 3 };

      render(<Component kind="primary" ref={refObject} />);
    });

    it('component received innerRef', () => {
      expect(mockRender).toBeCalledWith(expect.objectContaining({ innerRef: { current: { test: 3 } } }));
    });
  });
});
