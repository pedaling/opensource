import type { API, Collection } from 'jscodeshift';
import { ImportDeclaration } from 'jscodeshift';

type FindImportDeclarationsParams = {
  root: Collection;
  importPackage: string;
  jscodeshift: API['jscodeshift'];
};

export function findImportDeclarations({ root, importPackage }: FindImportDeclarationsParams) {
  return root.find(ImportDeclaration, node => node.type === 'ImportDeclaration' && node.source.value === importPackage);
}
