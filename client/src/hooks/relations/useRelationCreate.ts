import {
  useState,
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
import { type RelationFormData } from "@hooks/relations/useRelationForm";

const CREATE_RELATION = gql`
  mutation AddRelation($heroId: ID!, $godId: ID!, $relation: String!) {
    addRelation(heroId: $heroId, godId: $godId, relation: $relation) {
      id
    }
  }
`;

export default function useRelationCreate() {
  const [loading, setLoading] = useState(false);
  const [mutate] = useMutation(CREATE_RELATION);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RelationFormData> = async (data) => {
    setLoading(true);
    const result = await mutate({
      variables: data,
    });
    setLoading(false);
    navigate(`/relations/${result.data.addRelation.id}`);
  };

  return {
    loading,
    onSubmit,
  };
}
