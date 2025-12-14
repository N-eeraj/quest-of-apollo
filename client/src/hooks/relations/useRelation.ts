import {
  useParams,
} from "react-router";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
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

export default function useRelation() {
  const {
    id,
  } = useParams<{ id: string }>();

  const {
    loading,
    data,
  } = useQuery<{ relation: Relation }>(GET_RELATION, {
    variables: {
      id,
    },
  });

  return {
    loading,
    data,
  };
}
