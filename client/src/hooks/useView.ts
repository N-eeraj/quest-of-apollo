import { useState } from "react";
import {
  useParams,
  useNavigate,
} from "react-router";
import {
  useQuery,
  useMutation,
} from "@apollo/client/react";
import type { DocumentNode } from "@apollo/client";

export default function useView<Query>(
  query: DocumentNode,
  mutation: DocumentNode,
  listPath: string,
) {
  const {
    id,
  } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [isDeleting, setIsDeleting] = useState(false);

  const {
    loading,
    data,
  } = useQuery<Query>(query, {
    variables: {
      id,
    },
  });

  const [mutate] = useMutation(mutation, {
    variables: {
      id,
    }
  });

  const deleteResource = async () => {
    setIsDeleting(true);
    await mutate();
    navigate(listPath);
    setIsDeleting(false);
  }


  return {
    loading,
    data,
    isDeleting,
    deleteResource,
  };
}