import * as path from 'path';
import { sync } from 'glob';
import type { Tree } from '@nx/devkit';
import { formatFiles } from '@nx/devkit';
import type { GenerateStoryImportGeneratorSchema } from './schema';

export default async function (tree: Tree, options: GenerateStoryImportGeneratorSchema) {
  const storyFileNames = sync(options.stories, {
    absolute: false,
    cwd: tree.root,
    ignore: ['**/node_modules'],
  }).map(pathName => path.relative(path.dirname(options.outputFile), pathName));

  const source = `export const stories = [${storyFileNames.map(fileName => `require('${fileName}')`).join(',\n')}];`;

  tree.write(options.outputFile, source);

  await formatFiles(tree);
}
