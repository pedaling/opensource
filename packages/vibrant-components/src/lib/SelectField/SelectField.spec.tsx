import { useEffect, useState } from 'react';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { SelectField } from './SelectField';

describe('<SelectField />', () => {
  const { render } = createReactRenderer();

  let renderer: ReactRenderer;
  let mockOnValueChange: jest.Mock<any, any>;

  describe('when defaultValue changed', () => {
    beforeEach(async () => {
      mockOnValueChange = jest.fn();

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const ControlledSelectField = () => {
        const [defaultValue, setDefaultValue] = useState('1');

        useEffect(() => {
          setDefaultValue('2');
        }, []);

        return (
          <SelectField
            label="label"
            defaultValue={defaultValue}
            onValueChange={mockOnValueChange}
            options={[
              {
                label: 'option 1',
                value: '1',
              },
              {
                label: 'option 2',
                value: '2',
              },
            ]}
          />
        );
      };

      renderer = render(<ControlledSelectField />);
    });

    it('onValueChange should be called', () => {
      expect(mockOnValueChange).toBeCalledWith('2');
    });
  });

  describe('when size is lg', () => {
    beforeEach(async () => {
      renderer = render(
        <SelectField
          size="lg"
          label="label"
          options={[
            {
              label: 'option 1',
              value: '1',
            },
            {
              label: 'option 2',
              value: '2',
            },
          ]}
        />
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is md', () => {
    beforeEach(async () => {
      renderer = render(
        <SelectField
          size="md"
          label="label"
          options={[
            {
              label: 'option 1',
              value: '1',
            },
            {
              label: 'option 2',
              value: '2',
            },
          ]}
        />
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });

  describe('when size is sm', () => {
    beforeEach(async () => {
      renderer = render(
        <SelectField
          size="sm"
          label="label"
          options={[
            {
              label: 'option 1',
              value: '1',
            },
            {
              label: 'option 2',
              value: '2',
            },
          ]}
        />
      );
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
