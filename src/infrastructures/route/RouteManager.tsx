import React from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Routes from "../../models/Routes";
import AboutMePage from "../../pages/about-me/AboutMePage";
import DefaultPage from "../../pages/default/DefaultPage";
import TestPage from "../../pages/test/TestPage";
import AppRoute from "./AppRoute";

function RouteManager() {
  return (
    <Switch>
      <AppRoute page={TestPage} path="/test" />
      <AppRoute page={DefaultPage} layout={MainLayout} path="/" exact />
      <AppRoute
        page={AboutMePage}
        layout={MainLayout}
        path={Routes.ABOUT_ME}
        exact
      />
    </Switch>
  );
}

export default RouteManager;
