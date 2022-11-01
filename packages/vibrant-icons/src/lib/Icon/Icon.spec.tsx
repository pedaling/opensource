import { readFileSync } from 'fs';
import * as path from 'path';
import type { ReactRenderer } from '@vibrant-ui/utils/testing-web';
import { createReactRenderer } from '@vibrant-ui/utils/testing-web';
import { Icon } from './Icon';

type IconName = keyof typeof Icon;
type IconWeight = keyof typeof Icon['Play'];

describe('<Icon />', () => {
  const { render } = createReactRenderer();
  let renderer: ReactRenderer;

  const readSvgFile = (iconName: IconName, type: string) =>
    readFileSync(path.join(__dirname, '../../../assets/icons/', iconName, `${type}.svg`)).toString('utf-8');

  describe.each(
    Object.keys(Icon).flatMap(icon =>
      Object.keys(Icon[icon as IconName])
        .filter(weight => typeof Icon[icon as IconName][weight as IconWeight] === 'function')
        .map(weight => [icon as IconName, weight as IconWeight] as const)
    )
  )('when %s.%s Icon rendered', (icon, weight) => {
    const IconComponent = Icon[icon][weight];

    beforeEach(() => {
      renderer = render(<IconComponent />);
    });

    it('svg element created', () => {
      expect(renderer.container.querySelector('svg')).toBeTruthy();
    });

    it('viewBox attribute created', () => {
      expect(renderer.container.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 24 24');
    });

    describe('match svg file', () => {
      let svgFragment: HTMLElement;

      beforeEach(() => {
        svgFragment = document.createElement('fragment');

        svgFragment.innerHTML = readSvgFile(icon, weight);
      });

      it('equal svg element count', () => {
        expect(renderer.container.querySelectorAll('svg *').length).toBeGreaterThan(0);

        expect(renderer.container.querySelectorAll('svg *').length).toBe(svgFragment.querySelectorAll('svg *').length);
      });

      it('match svg attribute', () => {
        Array.from(svgFragment.querySelectorAll('svg *') ?? [])
          .flatMap((element, index) =>
            element
              .getAttributeNames()
              .filter(name => name !== 'fill')
              .map(name => [index, name] as const)
          )
          .forEach(([index, attributeName]) => {
            const rendererElement = renderer.container.querySelectorAll('svg *').item(index);
            const svgElement = svgFragment.querySelectorAll('svg *').item(index);

            expect(rendererElement.tagName).toBe(svgElement.tagName);

            expect(rendererElement.getAttribute(attributeName)).toBe(svgElement.getAttribute(attributeName));
          });
      });
    });

    it('match snapshot', () => {
      expect(renderer.container).toMatchSnapshot();
    });
  });
});
