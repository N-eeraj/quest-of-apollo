import { gql } from "@apollo/client";
import useForm from "@hooks/useForm";
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
  const {
    loading,
    onSubmit,
  } = useForm<RelationFormData & { id: Relation["id"] }>(
    UPDATE_RELATION,
    "updateRelation",
    "/relations"
  );

  return {
    loading,
    onSubmit,
  };
}
