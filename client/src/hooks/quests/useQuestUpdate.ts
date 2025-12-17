import { gql } from "@apollo/client";
import useForm from "@hooks/useForm";
import { type QuestFormData } from "@hooks/quests/useQuestForm";
import type { Quest } from "@/types";

const CREATE_QUEST = gql`
  mutation Mutation($id: ID!, $title: String!, $status: String!, $heroId: ID!) {
    updateQuest(id: $id, title: $title, status: $status, heroId: $heroId) {
      id
    }
  }
`;

export default function useQuestUpdate() {
  const {
    loading,
    onSubmit,
  } = useForm<QuestFormData & { id: Quest["id"] }>(
    CREATE_QUEST,
    "updateQuest",
    "/quests"
  );

  return {
    loading,
    onSubmit,
  };
}
