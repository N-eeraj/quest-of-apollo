import { gql } from "@apollo/client";
import useForm from "@hooks/useForm";
import { type QuestFormData } from "@hooks/quests/useQuestForm";

const CREATE_QUEST = gql`
  mutation Mutation($title: String!, $status: String!, $heroId: ID!) {
    addQuest(title: $title, status: $status, heroId: $heroId) {
      id
    }
  }
`;

export default function useQuestCreate() {
  const {
    loading,
    onSubmit,
  } = useForm<QuestFormData>(
    CREATE_QUEST,
    "addQuest",
    "/quests"
  );

  return {
    loading,
    onSubmit,
  };
}
