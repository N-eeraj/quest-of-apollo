import { gql } from "@apollo/client";
import useView from "@hooks/useView";
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
    deleteResource,
    ...view
  } = useView<{ god: God }>(
    GET_GOD,
    DELETE_GOD,
    "/gods"
  );

  return {
    ...view,
    deleteGod: deleteResource,
  };
}
