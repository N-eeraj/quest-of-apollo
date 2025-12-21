import { useParams } from "react-router";
import { gql } from "@apollo/client";
import useDeleteConfirmation from "@hooks/useDeleteConfirmation";

const DELETE_HERO_RELATIONS = gql`
  mutation Mutation($heroId: ID!) {
    deleteRelationsByHero(heroId: $heroId) {
      id
    }
  }
`;

export default function useDeleteHeroRelations(onDelete: () => void) {
  const {
    id,
  } = useParams<{ id: string }>();

  return useDeleteConfirmation(
    DELETE_HERO_RELATIONS,
    {
      heroId: id,
    },
    onDelete,
  );
}
