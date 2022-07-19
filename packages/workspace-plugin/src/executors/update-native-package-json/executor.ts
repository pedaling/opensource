import { UpdateNativePackageJsonExecutorSchema } from './schema';

export default async function runExecutor(
  options: UpdateNativePackageJsonExecutorSchema,
) {
  console.log('Executor ran for UpdateNativePackageJson', options)
  return {
    success: true
  }
}

