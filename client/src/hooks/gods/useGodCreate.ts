import {
  useState,
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
import { type GodFormData } from "@hooks/gods/useGodForm";

const CREATE_HERO = gql`
  mutation Mutation($name: String!, $domains: [String!]!) {
    addGod(name: $name, domains: $domains) {
      id
    }
  }
`;

export default function useGodCreate() {
  const [loading, setLoading] = useState(false);
  const [mutate] = useMutation(CREATE_HERO);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<GodFormData> = async (data) => {
    setLoading(true);
    const result = await mutate({
      variables: data,
    });
    setLoading(false);
    navigate(`/gods/${result.data.addGod.id}`);
  };

  return {
    loading,
    onSubmit,
  };
}
