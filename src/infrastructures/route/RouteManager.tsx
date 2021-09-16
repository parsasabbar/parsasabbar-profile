import React from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import DefaultPage from "../../pages/default/DefaultPage";
import TestPage from "../../pages/test/TestPage";
import AppRoute from "./AppRoute";

function RouteManager() {
  return (
    <Switch>
      <AppRoute page={TestPage} path="/test" />
      <AppRoute page={DefaultPage} layout={MainLayout} path="/" exact />
    </Switch>
  );
}

export default RouteManager;
