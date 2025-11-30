import Relations from "@pages/Relations/List";
import CreateRelation from "@pages/Relations/Create";
import Relation from "@pages/Relations/[id]";
import UpdateRelation from "@pages/Relations/[id]/Update";

const relationRoutes = [
  {
    path: "/relations/",
    children: [
      {
        index: true,
        element: <Relations />,
      },
      {
        path: "create",
        element: <CreateRelation />,
      },
      {
        path: ":id",
        element: <Relation />,
      },
      {
        path: ":id/update",
        element: <UpdateRelation />,
      },
    ],
  },
];

export default relationRoutes;
