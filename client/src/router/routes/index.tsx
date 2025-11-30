import DefaultLayout from "@layouts/Default";
import BlankLayout from "@layouts/Blank";

import Home from "@pages/index";
import NotFound from "@pages/NotFound";

import heroRoutes from "@router/routes/heroes";
import questRoutes from "@router/routes/quests";
import godRoutes from "@router/routes/gods";
import relationRoutes from "@router/routes/relations";

const routes = [
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      ...heroRoutes,
      ...questRoutes,
      ...godRoutes,
      ...relationRoutes,
    ],
  },
  {
    path: "/",
    element: <BlankLayout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  }
];

export default routes;
