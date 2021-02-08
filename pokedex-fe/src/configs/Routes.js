import { lazy } from "react";

export default {
  Login: {
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/Login")),
  },
  Pokedexes: {
    path: "/pokedexes",
    exact: true,
    component: lazy(() => import("../pages/Pokedexes")),
  },
  PokedexesList: {
    path: "/pokedexes/:id",
    exact: true,
    component: lazy(() => import("../pages/PokedexesList")),
  },
};
