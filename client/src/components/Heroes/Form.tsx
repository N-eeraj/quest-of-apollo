import {
  FormContainer,
  FormTextField,
  SubmitButton,
  type SubmitHandler,
} from "@barrels/form"
import useHeroForm, {
  type DefaultValues,
} from "@hooks/heroes/useHeroForm";

export interface Props {
  defaultData?: DefaultValues;
  isSubmitting?: boolean;
  onSubmit: SubmitHandler<{
    name: string;
    city: string;
  }>;
};

function HeroForm({ defaultData, isSubmitting, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    errors,
  } = useHeroForm(defaultData);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTextField
        {...register("name")}
        placeholder="Enter name"
        helperText={errors.name?.message}
        error={!!errors.name} />

      <FormTextField
        {...register("city")}
        placeholder="Enter city"
        helperText={errors.city?.message}
        error={!!errors.city} />

      <SubmitButton isSubmitting={isSubmitting} />
    </FormContainer>
  )
}

export default HeroForm;
