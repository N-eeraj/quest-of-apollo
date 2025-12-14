import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { Hero } from "@/types";

const GET_HEROES = gql`
  query Heroes {
    heroes {
      id
      name
      city
    }
  }
`;

export default function useHeroesList() {
  const {
    loading,
    data,
  } = useQuery<{heroes: Array<Pick<Hero, "id" | "name" | "city">> }>(GET_HEROES);

  return {
    loading,
    data,
  };
}
