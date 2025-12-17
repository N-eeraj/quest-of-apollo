import { gql } from "@apollo/client";
import useForm from "@hooks/useForm";
import { type RelationFormData } from "@hooks/relations/useRelationForm";

const CREATE_RELATION = gql`
  mutation AddRelation($heroId: ID!, $godId: ID!, $relation: String!) {
    addRelation(heroId: $heroId, godId: $godId, relation: $relation) {
      id
    }
  }
`;

export default function useRelationCreate() {
  const {
    loading,
    onSubmit,
  } = useForm<RelationFormData>(
    CREATE_RELATION,
    "addRelation",
    "/relations"
  );

  return {
    loading,
    onSubmit,
  };
}
