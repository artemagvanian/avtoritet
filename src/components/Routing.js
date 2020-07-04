import React from "react";
import { Router } from "@reach/router";
import Home from "../pages/Home";
import About from "../pages/About";
import Platform from "../pages/Platform";
import Partners from "../pages/Partners";
import NotFound from "../pages/NotFound";

export var routes = [
  { route: "/", title: "Главная", component: Home },
  { route: "/platform", title: "Автоплощадка", component: Platform },
  { route: "/about", title: "О нас", component: About },
  { route: "/partners", title: "Партнёры", component: Partners },
];

export function SiteRouter() {
  return (
    <Router>
      {routes.map(function createRoute(route, index) {
        return (
          <route.component key={index} path={route.route}></route.component>
        );
      })}
      <NotFound default />
    </Router>
  );
}
