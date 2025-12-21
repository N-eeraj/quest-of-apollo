import { gql } from "@apollo/client";
import useView from "@hooks/useView";
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
    deleteResource,
    ...view
  } = useView<{ relation: Relation }>(
    GET_RELATION,
    DELETE_RELATION,
    "/relations"
  );

  return {
    ...view,
    deleteRelation: deleteResource,
  };
}
