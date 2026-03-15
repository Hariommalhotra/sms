import { lazy, ComponentType, LazyExoticComponent, useMemo } from "react";

type ImportComponent<T extends ComponentType<unknown>> = () => Promise<{
  default: T;
}>;

export function useLazyComponent<T extends ComponentType<unknown>>(
  importFunc: ImportComponent<T>,
): LazyExoticComponent<T> {
  return useMemo(() => lazy(importFunc), [importFunc]);
}
