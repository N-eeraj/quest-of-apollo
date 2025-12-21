import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import type { DocumentNode } from "@apollo/client";

export default function useDeleteConfirmation(
  mutation: DocumentNode,
  variables: useMutation.Options["variables"],
  onDelete: () => void,
) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [mutate] = useMutation(mutation, {
    variables,
  });

  const handleConfirm = async () => {
    setIsDeleting(true);
    setShowConfirmation(false);
    await mutate();
    setIsDeleting(false);
    onDelete();
  };

  return {
    isDeleting,
    setShowConfirmation,
    showConfirmation,
    handleConfirm,
  };
}
