import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from './TextInput';

describe('<TextInput />', () => {
  let element: HTMLInputElement;

  const testTyping = async (cases: { input: string; output: string }[]) => {
    for (const { input, output } of cases) {
      await userEvent.type(element, input);

      expect(element).toHaveValue(output);

      await userEvent.clear(element);
    }
  };

  describe('prop: type="text"', () => {
    beforeEach(() => {
      element = render(<TextInput type="text" />).container.getElementsByTagName('input')[0];
    });

    it('should accept any text', async () => {
      await testTyping(
        [
          'b0n>jN)]R”b6*c^rSL;KZw?mM)_j+R',
          'The @testing-library family of packages helps you test UI components in a user-centric way.',
        ].map(value => ({ input: value, output: value }))
      );
    });
  });

  describe('prop: type="number"', () => {
    beforeEach(() => {
      element = render(<TextInput type="number" />).container.getElementsByTagName('input')[0];
    });

    it('should accept 0 to 9', async () => {
      await testTyping([
        { input: '0123456789', output: '0123456789' },
        { input: '9876543210', output: '9876543210' },
        { input: '0000000000', output: '0000000000' },
        { input: '0000000001', output: '0000000001' },
      ]);
    });

    it('should reject value not number', async () => {
      await testTyping([
        { input: 'AA', output: '' },
        { input: 'A0', output: '0' },
        { input: '0A', output: '0' },
        { input: 'b0n>jN)]R”b6*c^rSL;KZw?mM)_j+R', output: '06' },
      ]);
    });

    it('should reject decimal', async () => {
      await testTyping([
        { input: '0.0', output: '00' },
        { input: '0.1', output: '01' },
        { input: '1.0', output: '10' },
        { input: '1.1', output: '11' },
      ]);
    });

    it('should reject scientific notation', async () => {
      await testTyping([
        { input: '10e5', output: '105' },
        { input: 'e', output: '' },
        { input: '1e', output: '1' },
        { input: 'e1', output: '1' },
      ]);
    });
  });
});
