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
    id,
  } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [isDeleting, setIsDeleting] = useState(false);

  const {
    loading,
    data,
  } = useQuery<{ hero: Hero }>(GET_HERO, {
    variables: {
      id,
    },
  });

  const [mutate] = useMutation(DELETE_HERO, {
    variables: {
      id,
    }
  });

  const deleteHero = async () => {
    setIsDeleting(true);
    await mutate();
    navigate("/heroes");
    setIsDeleting(false);
  }

  return {
    loading,
    data,
    deleteHero,
    isDeleting,
  };
}
