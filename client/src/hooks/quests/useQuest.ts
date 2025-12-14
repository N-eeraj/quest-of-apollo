import { useParams } from "react-router";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
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

export default function useQuest() {
  const {
    id,
  } = useParams<{ id: string }>();

  const {
    loading,
    data,
  } = useQuery<{ quest: Quest }>(GET_QUEST, {
    variables: {
      id,
    },
  });

  const questStatus = STATUS_DISPLAY_MAP.get(data?.quest.status!);

  return {
    loading,
    data,
    questStatus,
  }
}