import {
  gql,
  useMutation,
  useNavigate,
  type SubmitHandler,
} from "@barrels/form/hook";
import { type HeroFormData } from "@hooks/heroes/useHeroValidation";

const CREATE_HERO = gql`
  mutation Mutation($name: String!, $city: String!) {
    addHero(name: $name, city: $city) {
      id
    }
  }
`;

export default function useHeroCreate() {
  const [mutate] = useMutation(CREATE_HERO);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<HeroFormData> = async (data) => {
    const result = await mutate({
      variables: data,
    });
    navigate(`/heroes/${result.data.addHero.id}`);
  };

  return {
    onSubmit,
  };
}
