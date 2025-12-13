import {
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
import { type QuestFormData } from "@hooks/quests/useQuestForm";

const CREATE_HERO = gql`
  mutation Mutation($name: String!, $domains: [String!]!) {
    addQuest(name: $name, domains: $domains) {
      id
    }
  }
`;

export default function useQuestCreate() {
  const [mutate] = useMutation(CREATE_HERO);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<QuestFormData> = async (data) => {
    const result = await mutate({
      variables: data,
    });
    navigate(`/quests/${result.data.addQuest.id}`);
  };

  return {
    onSubmit,
  };
}
