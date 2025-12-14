import {
  useState,
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
import { type HeroFormData } from "@hooks/heroes/useHeroForm";

const CREATE_HERO = gql`
  mutation Mutation($name: String!, $city: String!) {
    addHero(name: $name, city: $city) {
      id
    }
  }
`;

export default function useHeroCreate() {
  const [loading, setLoading] = useState(false);
  const [mutate] = useMutation(CREATE_HERO);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<HeroFormData> = async (data) => {
    setLoading(true);
    const result = await mutate({
      variables: data,
    });
    setLoading(false);
    navigate(`/heroes/${result.data.addHero.id}`);
  };

  return {
    loading,
    onSubmit,
  };
}
