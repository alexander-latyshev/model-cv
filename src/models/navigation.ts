export interface INavigation {
  routes: Array<IRoute>;
}

export interface IRoute {
  path: string;
  name: string;
}
