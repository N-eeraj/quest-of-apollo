import {
  useParams,
} from "react-router";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { God } from "@/types";

const GET_GOD = gql`
  query God($id: ID!) {
    god(id: $id) {
      id
      name
      domains
      relations {
        id
        hero {
          id
          name
        }
        relation
      }
    }
  }
`;

export default function useGod() {
  const {
    id,
  } = useParams<{ id: string }>();

  const {
    loading,
    data,
  } = useQuery<{ god: God }>(GET_GOD, {
    variables: {
      id,
    },
  });

  return {
    id,
    loading,
    data,
  }
}
