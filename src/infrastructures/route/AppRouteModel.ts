export default interface IAppRouteModel {
  roles?: string[];
  path: string;
  layout?: (props: ILayoutModel) => JSX.Element;
  page: (props: any) => JSX.Element;
  [rest: string]: any;
}

interface ILayoutModel {
  children: JSX.Element;
}
