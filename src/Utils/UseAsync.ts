/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";

export type UseAsyncType<T, P extends any[]> = [
  T | undefined,
  any,
  boolean,
  (...params: P) => void,
  boolean,
  (...params: P) => void,
  () => void
];

export type UseAsyncOptions<T> = {
  defaultValue?: T;
  defaultLoading?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (e: any) => void;
};

export const useAsync = <T, P extends any[]>(
  asyncFunction: (...params: P) => Promise<T>,
  options?: UseAsyncOptions<T>
): UseAsyncType<T, P> => {
  const defaultOptions = {
    defaultValue: undefined,
    defaultLoading: false,
  };
  const { defaultLoading, defaultValue, onError, onSuccess } = {
    ...defaultOptions,
    ...options,
  };

  const [loading, setLoading] = useState(defaultLoading);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<any>(undefined);
  const [data, setData] = useState<T | undefined>(defaultValue);

  const execute = useCallback(
    async (...params: Parameters<typeof asyncFunction>) => {
      try {
        setLoading(true);
        const fetchData = await asyncFunction(...params);
        setData(fetchData);
        setError(undefined);
        if (onSuccess) {
          onSuccess(fetchData);
        }
      } catch (e) {
        console.log(e);
        setError(e);
        if (onError) {
          onError(e);
        }
      }
      setLoading(false);
    },
    []
  );

  const refresh = useCallback(
    async (...params: Parameters<typeof asyncFunction>) => {
      try {
        setRefreshing(true);
        const fetchData = await asyncFunction(...params);
        setData(fetchData);
        setError(undefined);
        if (onSuccess) {
          onSuccess(fetchData);
        }
      } catch (e) {
        console.log(e);
        setError(e);
        if (onError) {
          onError(e);
        }
      }
      setRefreshing(false);
    },
    []
  );
  const clear = () => {
    setData(defaultValue), setError(undefined);
  };

  return [data, error, loading, execute, refreshing, refresh, clear];
};
