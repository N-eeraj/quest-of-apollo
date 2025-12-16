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

const DELETE_GOD = gql`
  mutation Mutation($id: ID!) {
    deleteGod(id: $id) {
      id
    }
  }
`;

export default function useGod() {
  const {
    id,
  } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [isDeleting, setIsDeleting] = useState(false);

  const {
    loading,
    data,
  } = useQuery<{ god: God }>(GET_GOD, {
    variables: {
      id,
    },
  });

  const [mutate] = useMutation(DELETE_GOD, {
    variables: {
      id,
    }
  });

  const deleteGod = async () => {
    setIsDeleting(true);
    await mutate();
    navigate("/gods");
    setIsDeleting(false);
  }


  return {
    loading,
    data,
    isDeleting,
    deleteGod,
  };
}
