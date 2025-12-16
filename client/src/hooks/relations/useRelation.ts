import { useState } from "react";
import {
  useParams,
  useNavigate,
} from "react-router";
import { gql } from "@apollo/client";
import {
  useQuery,
  useMutation,
} from "@apollo/client/react";
import type { Relation } from "@/types";

const GET_RELATION = gql`
  query Relation($id: ID!) {
    relation(id: $id) {
      id
      relation
      god {
        id
        name
      }
      hero {
        id
        name
      }
    }
  }
`;

const DELETE_RELATION = gql`
  mutation Mutation($id: ID!) {
    deleteRelation(id: $id) {
      id
    }
  }
`;

export default function useRelation() {
  const {
    id,
  } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [isDeleting, setIsDeleting] = useState(false);

  const {
    loading,
    data,
  } = useQuery<{ relation: Relation }>(GET_RELATION, {
    variables: {
      id,
    },
  });

  const [mutate] = useMutation(DELETE_RELATION, {
    variables: {
      id,
    }
  });

  const deleteRelation = async () => {
    setIsDeleting(true);
    await mutate();
    navigate("/relations");
    setIsDeleting(false);
  }

  return {
    loading,
    data,
    isDeleting,
    deleteRelation,
  };
}
