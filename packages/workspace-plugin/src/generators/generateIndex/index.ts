/* eslint-disable no-console,max-lines */
import type { Tree } from '@nx/devkit';

type Schema = {
  sourceDirectory: string;
  outIndexFile: string;
  wildcardAlias?: boolean;
};
export default async function generateIndex(host: Tree, schema: Schema) {
  const { sourceDirectory, outIndexFile, wildcardAlias = false } = schema;

  const files = host.children(sourceDirectory);

  const source = files
    .filter(file => file !== outIndexFile.split('/').pop())
    .map(file => file.replace(/(?<!(^|\/))\.[^/.]+$/, ''))
    .map(file => `export *${wildcardAlias ? ` as ${file}` : ''} from "./${file}";`)
    .join('\n');

  host.write(outIndexFile, source);
}
