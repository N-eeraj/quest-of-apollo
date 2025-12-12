import {
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
import { type GodFormData } from "@hooks/gods/useGodValidation";

const CREATE_HERO = gql`
  mutation Mutation($name: String!, $domains: [String!]!) {
    addGod(name: $name, domains: $domains) {
      
    }
  }
`;

export default function useGodCreate() {
  const [mutate] = useMutation(CREATE_HERO);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<GodFormData> = async (data) => {
    const result = await mutate({
      variables: data,
    });
    navigate(`/gods/${result.data.addGod.id}`);
  };

  return {
    onSubmit,
  };
}
