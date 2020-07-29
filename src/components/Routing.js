import React from "react";
import { Router } from "@reach/router";
import Home from "../pages/Home";
import Platform from "../pages/Platform";
import Partners from "../pages/Partners";
import OnTheWay from "../pages/OnTheWay";
import NotFound from "../pages/NotFound";
import CurrentOffer from "../components/CurrentOffer";

export var routes = [
  { route: "/", title: "Главная", component: Home },
  { route: "/platform", title: "Автоплощадка", component: Platform },
  { route: "/on-the-way", title: "Машины в пути", component: OnTheWay },
  { route: "/partners", title: "Партнёры", component: Partners },
];

export const SiteRouter = () => {
  return (
    <>
      <Router>
        {routes.map(function createRoute(route, index) {
          return (
            <route.component key={index} path={route.route}></route.component>
          );
        })}
        <NotFound default />
      </Router>
      <CurrentOffer />
    </>
  );
};
