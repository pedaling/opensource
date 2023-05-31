import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';
import type { ExecutorContext } from '@nx/devkit';
import type { MergeCoverageExecutorSchema } from './schema';

async function lcovExecutor(options: MergeCoverageExecutorSchema, context: ExecutorContext) {
  const { outputPath } = options;

  const lcovFiles = glob.sync(path.resolve(context.root, 'coverage/**/lcov.info'));
  const mergedReport = lcovFiles.reduce((prevReport, currentFile) => prevReport + fs.readFileSync(currentFile), '');

  fs.writeFileSync(path.resolve(context.root, outputPath), mergedReport);

  return {
    success: true,
  };
}

export default async function runExecutor(options: MergeCoverageExecutorSchema, context: ExecutorContext) {
  switch (options.coverageReporter) {
    case 'lcov':
      return lcovExecutor(options, context);
    default:
      throw new Error('[merge-coverage] Unexpected coverage reporter.');
  }
}
