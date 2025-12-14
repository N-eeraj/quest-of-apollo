import {
  useState,
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
import { type QuestFormData } from "@hooks/quests/useQuestForm";

const CREATE_HERO = gql`
  mutation Mutation($id: ID!, $title: String!, $status: String!, $heroId: ID!) {
    updateQuest(id: $id, title: $title, status: $status, heroId: $heroId) {
      id
    }
  }
`;

export default function useQuestUpdate() {
  const [loading, setLoading] = useState(false);
  const [mutate] = useMutation(CREATE_HERO);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<QuestFormData> = async (data) => {
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
