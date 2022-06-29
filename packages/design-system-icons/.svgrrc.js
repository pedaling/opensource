/* eslint-disable no-param-reassign */
function replaceName(nameObj) {
  if (nameObj.name === 'svg') {
    nameObj.name = 'Svg';
  } else if (nameObj.name === 'path') {
    nameObj.name = 'Svg.Path';
  } else if (nameObj.name === 'g') {
    nameObj.name = 'Svg.G';
  } else if (nameObj.name === 'defs') {
    nameObj.name = 'Svg.Defs';
  } else if (nameObj.name === 'clipPath') {
    nameObj.name = 'Svg.ClipPath';
  } else if (nameObj.name === 'stop') {
    nameObj.name = 'Svg.Stop';
  }
}

function replaceJsxChild(jsx) {
  if (jsx.openingElement.name.name === 'path') {
    jsx.openingElement.attributes = jsx.openingElement.attributes.filter(attribute => attribute.name.name !== 'fill');
  }

  if (jsx.openingElement) {
    replaceName(jsx.openingElement.name);
  }

  if (jsx.closingElement) {
    replaceName(jsx.closingElement.name);
  }
  if (jsx.children) {
    jsx.children.forEach(replaceJsxChild);
  }
}

function template({ componentName, jsx }, { tpl }) {
  const fileName = componentName.replace('Svg', '');

  const componentNameWithPropType = `${fileName}: FC<IconProps>`;

  jsx.openingElement.attributes = jsx.openingElement.attributes.filter(
    attribute => !['width', 'height'].includes(attribute.name.name)
  );

  replaceJsxChild(jsx);
  const nl = '\n';

  return tpl`
  import { FC } from 'react';
  import type { IconProps } from '../../IconProp';
  import { Svg } from '../../../Svg';
  ${nl}
  export const ${componentNameWithPropType} = ({ size = 24, fill = 'onColor', ...props }) => (
    ${jsx}
  );
    `;
}

function indexTemplate(filePaths) {
  const exportEntries = filePaths.map(filePath => {
    const basename = filePath.replace(/.*\/(.*)\.\w+/, '$1');

    return `export { ${basename} } from './${basename}';`;
  });

  return `${exportEntries.join('\n')}\n`;
}

module.exports = {
  prettier: false,
  dimensions: false,
  runtimeConfig: false,
  template,
  indexTemplate,
  svgProps: {
    width: '{size}',
    height: '{size}',
    viewBox: '0 0 24 24',
    fill: '{fill}',
  },
  plugins: ['@svgr/plugin-jsx'],
};
