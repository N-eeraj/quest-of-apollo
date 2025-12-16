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
import { STATUS_DISPLAY_MAP } from "@/constants";
import type { Quest } from "@/types";

const GET_QUEST = gql`
  query Quest($id: ID!) {
    quest(id: $id) {
      id
      title
      status
      hero {
        id
        name
      }
    }
  }
`;

const DELETE_QUEST = gql`
  mutation Mutation($id: ID!) {
    deleteQuest(id: $id) {
      id
    }
  }
`;

export default function useQuest() {
  const {
    id,
  } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [isDeleting, setIsDeleting] = useState(false);

  const {
    loading,
    data,
  } = useQuery<{ quest: Quest }>(GET_QUEST, {
    variables: {
      id,
    },
  });

  const [mutate] = useMutation(DELETE_QUEST, {
    variables: {
      id,
    }
  });

  const deleteQuest = async () => {
    setIsDeleting(true);
    await mutate();
    navigate("/quests");
    setIsDeleting(false);
  }

  const questStatus = STATUS_DISPLAY_MAP.get(data?.quest.status!);

  return {
    loading,
    data,
    questStatus,
    isDeleting,
    deleteQuest,
  };
}