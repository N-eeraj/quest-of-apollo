import {
  useState,
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
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
  const [loading, setLoading] = useState(false);
  const [mutate] = useMutation(UPDATE_HERO);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<HeroFormData & { id: Hero["id"] }> = async (data) => {
    setLoading(true);
    const result = await mutate({
      variables: data,
    });
    setLoading(false);
    navigate(`/heroes/${result.data.updateHero.id}`);
  };

  return {
    loading,
    onSubmit,
  };
}
