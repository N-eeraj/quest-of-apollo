import { useState } from "react";
import {
  useParams,
} from "react-router";
import { gql } from "@apollo/client";
import {
  useMutation,
} from "@apollo/client/react";

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

  const [mutate] = useMutation(DELETE_HERO_RELATIONS, {
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
    onDelete()
  }

  return {
    isDeleting,
    setShowConfirmation,
    showConfirmation,
    handleConfirm,
  }
}
