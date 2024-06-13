import type { API, FileInfo } from 'jscodeshift';
import { addImportVariable } from '../utils/addImportVariable';
import { findImportDeclarations } from '../utils/findImportDeclarations';
import { removeImportVariable } from '../utils/removeImportVariable';

export default function transformer(file: FileInfo, { jscodeshift }: API) {
  const root = jscodeshift(file.source);

  const uiSystemImports = findImportDeclarations({ root, importPackage: '@class101/ui-system', jscodeshift });

  uiSystemImports.forEach(path => {
    removeImportVariable({ importPath: path, variableName: 'Title', jscodeshift });

    addImportVariable({
      importPath: path,
      variableName: 'Title',
      packageName: '@vibrant-ui/components',
      jscodeshift,
    });
  });

  return root.toSource();
}
