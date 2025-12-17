import { gql } from "@apollo/client";
import useForm from "@hooks/useForm";
import { type HeroFormData } from "@hooks/heroes/useHeroForm";

const CREATE_HERO = gql`
  mutation Mutation($name: String!, $city: String!) {
    addHero(name: $name, city: $city) {
      id
    }
  }
`;

export default function useHeroCreate() {
  const {
    loading,
    onSubmit,
  } = useForm<HeroFormData>(
    CREATE_HERO,
    "addHero",
    "/heroes"
  );

  return {
    loading,
    onSubmit,
  };
}
