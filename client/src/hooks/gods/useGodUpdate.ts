import {
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
import { type GodFormData } from "@hooks/gods/useGodForm";
import type { God } from "@/types";

const UPDATE_HERO = gql`
  mutation Mutation($id: ID!, $name: String!, $domains: [String!]!) {
    updateGod(id: $id, name: $name, domains: $domains) {
      id
    }
  }
`;

export default function useGodUpdate() {
  const [mutate] = useMutation(UPDATE_HERO);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<GodFormData & { id: God["id"] }> = async (data) => {
    const result = await mutate({
      variables: data,
    });
    navigate(`/gods/${result.data.updateGod.id}`);
  };

  return {
    onSubmit,
  };
}
