import { useParams } from "react-router";
import { gql } from "@apollo/client";
import useDeleteConfirmation from "@hooks/useDeleteConfirmation";

const DELETE_GOD_RELATIONS = gql`
  mutation Mutation($godId: ID!) {
    deleteRelationsByGod(godId: $godId) {
      id
    }
  }
`;

export default function useDeleteGodRelations(onDelete: () => void) {
  const {
    id,
  } = useParams<{ id: string }>();

  return useDeleteConfirmation(
    DELETE_GOD_RELATIONS,
    {
      godId: id,
    },
    onDelete,
  );
}
