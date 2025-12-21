import { gql } from "@apollo/client";
import useView from "@hooks/useView";
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

const DELETE_HERO = gql`
  mutation Mutation($id: ID!) {
    deleteHero(id: $id) {
      id
    }
  }
`;

export default function useHero() {
  const {
    deleteResource,
    ...view
  } = useView<{ hero: Hero }>(
    GET_HERO,
    DELETE_HERO,
    "/heroes"
  );

  return {
    ...view,
    deleteHero: deleteResource,
  };
}
