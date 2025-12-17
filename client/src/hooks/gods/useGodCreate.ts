import { gql } from "@apollo/client";
import useForm from "@hooks/useForm";
import { type GodFormData } from "@hooks/gods/useGodForm";

const CREATE_GOD = gql`
  mutation Mutation($name: String!, $domains: [String!]!) {
    addGod(name: $name, domains: $domains) {
      id
    }
  }
`;

export default function useGodCreate() {
  const {
    loading,
    onSubmit,
  } = useForm<GodFormData>(
    CREATE_GOD,
    "addGod",
    "/gods"
  );

  return {
    loading,
    onSubmit,
  };
}
