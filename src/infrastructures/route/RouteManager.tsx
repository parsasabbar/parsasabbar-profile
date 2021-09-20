import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Routes from "../../models/Routes";
import AboutMePage from "../../pages/about-me/AboutMePage";
import ContactPage from "../../pages/contact/ContactPage";
import DefaultPage from "../../pages/default/DefaultPage";
import ExperiencesPage from "../../pages/experiences/ExperiencesPage";
import TestPage from "../../pages/test/TestPage";
import AppRoute from "./AppRoute";

function RouteManager() {
  return (
    <Switch>
      <AppRoute page={TestPage} path="/test" />
      <AppRoute page={DefaultPage} layout={MainLayout} path="/" exact />
      <AppRoute page={AboutMePage} layout={MainLayout} path={Routes.ABOUT_ME} />
      <AppRoute
        page={ExperiencesPage}
        layout={MainLayout}
        path={Routes.WORK_EXPERIENCES}
      />
      <AppRoute page={ContactPage} layout={MainLayout} path={Routes.CONTACT} />
    </Switch>
  );
}

export default RouteManager;
