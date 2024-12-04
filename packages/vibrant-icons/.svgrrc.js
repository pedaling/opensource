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
  jsx.openingElement.attributes = jsx.openingElement.attributes.filter(attribute => attribute.name.name !== 'fill');

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

function template({ componentName, jsx, ...restProps }, { tpl, options }) {
  const fileName = componentName.replace('Svg', '');

  const componentNameWithPropType = `${fileName}: IconComponent<IconProps, '${fileName}'>`;

  jsx.openingElement.attributes = jsx.openingElement.attributes.filter(
    attribute => !['width', 'height', 'fill', 'xmlns'].includes(attribute.name.name)
  );

  replaceJsxChild(jsx);

  const { filePath } = options.state;

  const testId = filePath.split('/icons/')[1].split('/')[0].toLowerCase() + '-' + fileName.toLowerCase();
  const displayName = filePath.split('/icons/')[1].split('/')[0] + fileName;

  return tpl`
  import { FC, memo } from 'react';
  import type { IconProps, IconComponent } from '../../IconProp';
  import { Svg } from '@vibrant-ui/core';

  const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId='${testId}', ...props }) => (
    ${jsx}
  );

  export const ${componentNameWithPropType} = Object.assign(memo(Icon), { iconType: '${fileName}' as const });
  ${fileName}.displayName = '${displayName}';
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
    viewBox: '0 0 24 24',
    width: '{size}',
    height: '{size}',
    fill: '{fill}',
    'data-testid': '{testId}',
  },
  plugins: ['@svgr/plugin-jsx'],
};
