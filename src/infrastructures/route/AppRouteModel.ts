export default interface IAppRouteModel {
  roles?: string[];
  path: string;
  layout?: (props: ILayoutModel) => any;
  page: (props: any) => any;
  [rest: string]: any;
}

interface ILayoutModel {
  children: JSX.Element;
}
