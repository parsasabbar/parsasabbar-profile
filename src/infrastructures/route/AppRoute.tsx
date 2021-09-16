import React from "react";
import { Route } from "react-router-dom";
import IAppRouteModel from "./AppRouteModel";

function AppRoute(props: IAppRouteModel) {
  const Layout = props.layout;
  const Page = props.page;

  return (
    <Route
      {...props.rest}
      path={props.path}
      render={() =>
        Layout ? (
          <Layout>
            <Page {...props} />
          </Layout>
        ) : (
          <Page {...props} />
        )
      }
    />
  );
}

export default AppRoute;
