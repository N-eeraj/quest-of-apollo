import { useState } from "react";
import {
  useParams,
} from "react-router";
import { gql } from "@apollo/client";
import {
  useMutation,
} from "@apollo/client/react";

const DELETE_HERO_QUESTS = gql`
  mutation Mutation($heroId: ID!) {
    deleteQuestsByHero(heroId: $heroId) {
      id
    }
  }
`;

export default function useDeleteHeroQuests() {
  const {
    id,
  } = useParams<{ id: string }>();

  const [mutate] = useMutation(DELETE_HERO_QUESTS, {
    variables: {
      heroId: id,
    }
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false)
  const handleConfirm = async () => {
    setIsDeleting(true);
    setShowConfirmation(false);
    await mutate();
    setIsDeleting(false);
  }

  return {
    isDeleting,
    setShowConfirmation,
    showConfirmation,
    handleConfirm,
  }
}
