import {
  useState,
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
import { type GodFormData } from "@hooks/gods/useGodForm";
import type { God } from "@/types";

const UPDATE_GOD = gql`
  mutation Mutation($id: ID!, $name: String!, $domains: [String!]!) {
    updateGod(id: $id, name: $name, domains: $domains) {
      id
    }
  }
`;

export default function useGodUpdate() {
  const [loading, setLoading] = useState(false);
  const [mutate] = useMutation(UPDATE_GOD);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<GodFormData & { id: God["id"] }> = async (data) => {
    setLoading(true);
    const result = await mutate({
      variables: data,
    });
    setLoading(false);
    navigate(`/gods/${result.data.updateGod.id}`);
  };

  return {
    loading,
    onSubmit,
  };
}
