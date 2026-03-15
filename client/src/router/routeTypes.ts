import { ComponentType, LazyExoticComponent } from "react";

export type AppRoute = {
  path: string;
  element: LazyExoticComponent<ComponentType>;
};
