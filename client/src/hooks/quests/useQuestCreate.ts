import {
  useState,
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
import { type QuestFormData } from "@hooks/quests/useQuestForm";

const CREATE_QUEST = gql`
  mutation Mutation($title: String!, $status: String!, $heroId: ID!) {
    addQuest(title: $title, status: $status, heroId: $heroId) {
      id
    }
  }
`;

export default function useQuestCreate() {
  const [loading, setLoading] = useState(false);
  const [mutate] = useMutation(CREATE_QUEST);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<QuestFormData> = async (data) => {
    setLoading(true);
    const result = await mutate({
      variables: data,
    });
    setLoading(false);
    navigate(`/quests/${result.data.addQuest.id}`);
  };

  return {
    loading,
    onSubmit,
  };
}
