import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { God } from "@/types";

const GET_GODS = gql`
  query Gods {
    gods {
      id
      name
      domains
    }
  }
`;

export default function useGodsList() {
  const {
    loading,
    data,
  } = useQuery<{gods: Array<Pick<God, "id" | "name" | "domains">> }>(GET_GODS);

  return {
    loading,
    data,
  }
}
