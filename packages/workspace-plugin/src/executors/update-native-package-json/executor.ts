import * as fs from 'fs';
import type { ExecutorContext } from 'nx/src/config/misc-interfaces';
import { getProjectRoots } from 'nx/src/utils/command-line-utils';
import { joinPathFragments } from 'nx/src/utils/path';
import { commit, formatCommitMessage } from '@jscutlery/semver/src/executors/version/utils/commit';
import { addToStage } from '@jscutlery/semver/src/executors/version/utils/git';
import type { UpdateNativePackageJsonExecutorSchema } from './schema';

export default async function runExecutor(options: UpdateNativePackageJsonExecutorSchema, context: ExecutorContext) {
  const [projectRoot] = getProjectRoots([context.projectName]);
  const packageJsonPath = joinPathFragments(context.root, projectRoot, options.packageJsonName);
  const nativePackageJsonPath = joinPathFragments(context.root, projectRoot, options.nativePackageJsonName);

  const packageJson = await fs.promises.readFile(packageJsonPath).then(data => JSON.parse(data.toString()));

  const nativePackageJson = await fs.promises.readFile(nativePackageJsonPath).then(data => JSON.parse(data.toString()));

  nativePackageJson.version = packageJson.version;

  await fs.promises.writeFile(nativePackageJsonPath, JSON.stringify(nativePackageJson, null, 2).concat('\n'));

  await addToStage({
    paths: [nativePackageJsonPath],
    dryRun: false,
  }).toPromise();

  await commit({
    dryRun: false,
    projectName: context.projectName,
    commitMessage: formatCommitMessage({
      // eslint-disable-next-line no-template-curly-in-string
      commitMessageFormat: 'chore(${projectName}): release version ${version}',
      projectName: `${context.projectName}-native`,
      version: nativePackageJson.version,
    }),
    noVerify: false,
  }).toPromise();

  return {
    success: true,
  };
}
