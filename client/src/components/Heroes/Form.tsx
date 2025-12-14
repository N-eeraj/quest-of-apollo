import {
  Grid,
  FormTextField,
  SubmitButton,
  type SubmitHandler,
} from "@barrels/form/ui"
import useHeroForm, {
  type DefaultValues,
} from "@hooks/heroes/useHeroForm";

interface Props {
  defaultData?: DefaultValues;
  isSubmitting?: boolean;
  onSubmit: SubmitHandler<{
    name: string;
    city: string;
}>
}

function HeroForm({ defaultData, isSubmitting, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    errors,
  } = useHeroForm(defaultData);

  return (
    <Grid
      container
      component="form"
      rowGap={{
        xs: 2,
        sm: 3,
      }}
      maxWidth={920}
      margin="auto"
      padding={2}
      onSubmit={handleSubmit(onSubmit)}>
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
    </Grid>
  )
}

export default HeroForm;
