import type { API, ASTPath, ImportDeclaration } from 'jscodeshift';

type RemoveImportVariableParams = {
  importPath: ASTPath<ImportDeclaration>;
  variableName: string;
  jscodeshift: API['jscodeshift'];
};

export function removeImportVariable({ importPath, variableName, jscodeshift }: RemoveImportVariableParams) {
  const importDeclaration = importPath.node;
  const importVariables = (importDeclaration.specifiers ?? []).filter(
    specifier => specifier.type !== 'ImportSpecifier' || specifier.imported.name !== variableName
  );

  if (importVariables.length === 0) {
    jscodeshift(importDeclaration.source).remove();

    return;
  }

  jscodeshift(importPath).replaceWith(jscodeshift.importDeclaration(importVariables, importDeclaration.source));
}
