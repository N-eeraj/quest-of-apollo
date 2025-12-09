import Heroes from "@pages/Heroes/List";
import CreateHero from "@pages/Heroes/Create";
import Hero from "@pages/Heroes/[id]";
import UpdateHero from "@pages/Heroes/[id]/Update";

const heroRoutes = [
  {
    path: "/heroes/",
    children: [
      {
        index: true,
        element: <Heroes />,
      },
      {
        path: "create",
        element: <CreateHero />,
      },
      {
        path: ":id",
        element: <Hero />,
      },
      {
        path: ":id/edit",
        element: <UpdateHero />,
      },
    ],
  },
];

export default heroRoutes;
