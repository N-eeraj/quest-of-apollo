import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { type Quest } from "@/types";

const GET_QUESTS = gql`
  query Quests {
    quests {
      id
      title
      status
    }
  }
`;

export default function useQuestsList() {
  const {
    loading,
    data,
  } = useQuery<{quests: Array<Pick<Quest, "id" | "title" | "status">> }>(GET_QUESTS);

  return {
    loading,
    data,
  }
}
