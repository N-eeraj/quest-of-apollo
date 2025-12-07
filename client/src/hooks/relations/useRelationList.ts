import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { Relation } from "@/types";

const GET_RELATIONS = gql`
  query Relations {
    relations {
      id
      hero {
        name
      }
      god {
        name
      }
      relation
    }
  }
`;

export default function useRelationList() {
  const {
    loading,
    data,
  } = useQuery<{relations: Array<Relation> }>(GET_RELATIONS);

  return {
    loading,
    data,
  }
}
