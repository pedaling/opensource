export class Promises {
  public static async allSettledAndFulfilled<TValue>(
    values: Iterable<TValue>
  ): ReturnType<PromiseConstructor['allSettled']> {
    const results = await Promise.allSettled(values);

    const failed: PromiseRejectedResult[] = results
      .filter(res => res.status == 'rejected')
      .map(res => res as PromiseRejectedResult);

    if (failed.length > 0) {
      throw new PromisesError(failed);
    }

    return results;
  }
}

export class PromisesError extends Error {
  public readonly failedReasons: unknown[];

  constructor(rejectedResults: PromiseRejectedResult[]) {
    const reasons = rejectedResults.map(res => res.reason);

    super(reasons.join('. '));

    this.failedReasons = reasons;
  }
}
