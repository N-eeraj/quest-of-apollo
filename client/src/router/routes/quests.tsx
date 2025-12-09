import Quests from "@pages/Quests/List";
import CreateQuest from "@pages/Quests/Create";
import Quest from "@pages/Quests/[id]";
import UpdateQuest from "@pages/Quests/[id]/Update";

const questRoutes = [
  {
    path: "/quests/",
    children: [
      {
        index: true,
        element: <Quests />,
      },
      {
        path: "create",
        element: <CreateQuest />,
      },
      {
        path: ":id",
        element: <Quest />,
      },
      {
        path: ":id/edit",
        element: <UpdateQuest />,
      },
    ],
  },
];

export default questRoutes;
