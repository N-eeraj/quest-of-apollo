import {
  useParams,
} from "react-router";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { Hero } from "@/types";

const GET_HERO = gql`
  query Hero($id: ID!) {
    hero(id: $id) {
      id
      name
      city
      quests {
        id
        title
        status
      }
      relations {
        id
        god {
          id
          name
        }
        relation
      }
    }
  }
`;

export default function useHero() {
  const {
    id,
  } = useParams<{ id: string }>();

  const {
    loading,
    data,
  } = useQuery<{ hero: Hero }>(GET_HERO, {
    variables: {
      id,
    },
  });

  return {
    loading,
    data,
  };
}
