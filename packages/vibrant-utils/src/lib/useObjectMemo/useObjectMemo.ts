/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';

export const useObjectMemo = <Value>(object: Value) => useMemo(() => object, [JSON.stringify(object)]);
