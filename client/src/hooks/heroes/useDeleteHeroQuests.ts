import { useParams } from "react-router";
import { gql } from "@apollo/client";
import useDeleteConfirmation from "@hooks/useDeleteConfirmation";

const DELETE_HERO_QUESTS = gql`
  mutation Mutation($heroId: ID!) {
    deleteQuestsByHero(heroId: $heroId) {
      id
    }
  }
`;

export default function useDeleteHeroQuests(onDelete: () => void) {
  const {
    id,
  } = useParams<{ id: string }>();

  return useDeleteConfirmation(
    DELETE_HERO_QUESTS,
    {
      heroId: id,
    },
    onDelete,
  );
}
