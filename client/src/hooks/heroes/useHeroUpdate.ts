import { gql } from "@apollo/client";
import useForm from "@hooks/useForm";
import { type HeroFormData } from "@hooks/heroes/useHeroForm";
import type { Hero } from "@/types";

const UPDATE_HERO = gql`
  mutation Mutation($id: ID!, $name: String!, $city: String!) {
    updateHero(id: $id, name: $name, city: $city) {
      id
    }
  }
`;

export default function useHeroUpdate() {
  const {
    loading,
    onSubmit,
  } = useForm<HeroFormData & { id: Hero["id"] }>(
    UPDATE_HERO,
    "updateHero",
    "/heroes"
  );

  return {
    loading,
    onSubmit,
  };
}
