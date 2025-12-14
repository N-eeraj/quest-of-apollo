import {
  Grid,
  TextField,
  Button,
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
      <Grid
        size={{
          xs: 12,
          sm: 6,
        }}
        paddingX={{
          sm: 1,
        }}>
        <TextField
          placeholder="Enter name"
          helperText={errors.name?.message}
          error={!!errors.name}
          fullWidth
          size="small"
          {...register("name")}
        />
      </Grid>
      <Grid
        size={{
          xs: 12,
          sm: 6,
        }}
        paddingX={{
          sm: 1,
        }}>
        <TextField
          placeholder="Enter city"
          helperText={errors.city?.message}
          error={!!errors.city}
          fullWidth
          size="small"
          {...register("city")}
        />
      </Grid>
      <Grid
        size={12}
        display="flex"
        paddingX={{
          sm: 1,
        }}>
        <Button
          type="submit"
          variant="contained"
          loading={isSubmitting}
          disableRipple
          disableElevation
          sx={{
            width: {
              xs: "100%",
              sm: "clamp(240px, 25%, 320px)",
            },
            marginLeft: "auto",
          }}>
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}

export default HeroForm;
