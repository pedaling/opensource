import { createReactRenderer } from '@class101/design-system-utils';
import { withVariation } from './withVariation';

type Props = {
  kind: 'primary' | 'secondary';
};

describe('withVariation', () => {
  const { render } = createReactRenderer();

  const mockFirstPropVariant = jest.fn(() => ({
    backgroundColor: 'red',
  }));

  const mockSecondPropVariant = jest.fn(() => ({
    color: 'white',
  }));

  const mockRender = jest.fn(props => <div {...props} />);

  const Component = withVariation<Props>()(mockFirstPropVariant, mockSecondPropVariant)(props => mockRender(props));

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
});
