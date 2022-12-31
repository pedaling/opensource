import type { Class } from '../Class';

export async function retryIfError<ReturnType>(
  logicToRetry: () => Promise<ReturnType>,
  targetErrorClass: Class<Error>,
  maxRetries = 1000
): Promise<ReturnType> {
  let errorAfterMaxTries: Error | undefined;

  for (let tryNumber = 1; tryNumber <= maxRetries; tryNumber++) {
    try {
      const result = await logicToRetry();

      return result;
    } catch (e) {
      const error = e as Error;

      checkRetryError(error, targetErrorClass);

      errorAfterMaxTries = error;
    }
  }

  throw new Error(
    `[retryIfError] Reached the maximum number of retries (${maxRetries}), but still getting the following error: ${errorAfterMaxTries}`
  );
}

function checkRetryError(error: Error, errorClassThatRetries: Class<Error>): void {
  if (!(error instanceof errorClassThatRetries)) {
    throw error;
  }
}
