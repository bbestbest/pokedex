import { lazy } from "react";

export default {
  Login: {
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/Login")),
  },
  Pokemons: {
    path: "/pokemons/:pokedexId",
    exact: true,
    component: lazy(() => import("../pages/Pokemons")),
  },
  Pokedexes: {
    path: "/pokedexes",
    exact: true,
    component: lazy(() => import("../pages/Pokedexes")),
  },
  PokedexesList: {
    path: "/pokedexesList/:id",
    exact: true,
    component: lazy(() => import("../pages/PokedexesList")),
  },
  SignUp: {
    path: "/signup",
    exact: true,
    component: lazy(() => import("../pages/SignUp")),
  },
};
