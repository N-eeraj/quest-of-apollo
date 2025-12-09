import Gods from "@pages/Gods/List";
import CreateGod from "@pages/Gods/Create";
import God from "@pages/Gods/[id]";
import UpdateGod from "@pages/Gods/[id]/Update";

const godRoutes = [
  {
    path: "/gods/",
    children: [
      {
        index: true,
        element: <Gods />,
      },
      {
        path: "create",
        element: <CreateGod />,
      },
      {
        path: ":id",
        element: <God />,
      },
      {
        path: ":id/edit",
        element: <UpdateGod />,
      },
    ],
  },
];

export default godRoutes;
