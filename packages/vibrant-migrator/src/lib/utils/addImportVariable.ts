import type { API, ASTPath, ImportDeclaration } from 'jscodeshift';

type AddImportVariableParams = {
  importPath: ASTPath<ImportDeclaration>;
  variableName: string;
  packageName: string;
  jscodeshift: API['jscodeshift'];
};

export function addImportVariable({ importPath, variableName, packageName, jscodeshift }: AddImportVariableParams) {
  try {
    jscodeshift(importPath).insertAfter(
      jscodeshift.importDeclaration(
        [jscodeshift.importSpecifier(jscodeshift.identifier(variableName))],
        jscodeshift.literal(packageName)
      )
    );
    // eslint-disable-next-line no-empty
  } catch {}
}
