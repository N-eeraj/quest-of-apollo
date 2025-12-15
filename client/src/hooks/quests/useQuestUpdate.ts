import {
  useState,
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
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
  const [loading, setLoading] = useState(false);
  const [mutate] = useMutation(CREATE_QUEST);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<QuestFormData & { id: Quest["id"] }> = async (data) => {
    setLoading(true);
    const result = await mutate({
      variables: data,
    });
    setLoading(false);
    navigate(`/quests/${result.data.updateQuest.id}`);
  };

  return {
    loading,
    onSubmit,
  };
}
