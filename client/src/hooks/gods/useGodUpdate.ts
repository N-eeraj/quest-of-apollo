import { gql } from "@apollo/client";
import useForm from "@hooks/useForm";
import { type GodFormData } from "@hooks/gods/useGodForm";
import type { God } from "@/types";

const UPDATE_GOD = gql`
  mutation Mutation($id: ID!, $name: String!, $domains: [String!]!) {
    updateGod(id: $id, name: $name, domains: $domains) {
      id
    }
  }
`;

export default function useGodUpdate() {
  const {
    loading,
    onSubmit,
  } = useForm<GodFormData & { id: God["id"] }>(
    UPDATE_GOD,
    "updateGod",
    "/gods"
  );

  return {
    loading,
    onSubmit,
  };
}
