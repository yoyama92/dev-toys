import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/**
 * 初回の実行がスキップされるuseEffect
 * @param fn
 * @param deps
 */
export const useDidUpdateEffect = (
  fn: EffectCallback,
  deps: DependencyList,
) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    } else {
      fn();
    }
  }, deps);
};
