import {
  useState,
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
import { type RelationFormData } from "@hooks/relations/useRelationForm";
import type { Relation } from "@/types";

const UPDATE_RELATION = gql`
  mutation Mutation($id: ID!, $heroId: ID!, $godId: ID!, $relation: String!) {
    updateRelation(id: $id, heroId: $heroId, godId: $godId, relation: $relation) {
      id
    }
  }
`;

export default function useRelationUpdate() {
  const [loading, setLoading] = useState(false);
  const [mutate] = useMutation(UPDATE_RELATION);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RelationFormData & { id: Relation["id"] }> = async (data) => {
    setLoading(true);
    const result = await mutate({
      variables: data,
    });
    setLoading(false);
    navigate(`/relations/${result.data.updateRelation.id}`);
  };

  return {
    loading,
    onSubmit,
  };
}
