import { gql } from "@apollo/client";
import useView from "@hooks/useView";
import { STATUS_DISPLAY_MAP } from "@/constants";
import type { Quest } from "@/types";

const GET_QUEST = gql`
  query Quest($id: ID!) {
    quest(id: $id) {
      id
      title
      status
      hero {
        id
        name
      }
    }
  }
`;

const DELETE_QUEST = gql`
  mutation Mutation($id: ID!) {
    deleteQuest(id: $id) {
      id
    }
  }
`;

export default function useQuest() {
  const {
    data,
    loading,
    isDeleting,
    deleteResource,
  } = useView<{ quest: Quest }>(
    GET_QUEST,
    DELETE_QUEST,
    "/quests"
  );

  const questStatus = STATUS_DISPLAY_MAP.get(data?.quest.status!);

  return {
    loading,
    data,
    questStatus,
    isDeleting,
    deleteQuest: deleteResource,
  };
}
