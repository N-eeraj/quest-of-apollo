import {
  useForm,
  type SubmitHandler,
} from "react-hook-form"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { Hero } from "@/types";

const heroFormSchema = z.object({
  name: z.string().min(2, {
    error: "Name is required",
  }),
  city: z.string().min(2, {
    error: "City is required",
  }),
});

type HeroFormData = z.infer<typeof heroFormSchema>;

function HeroForm(heroData: Partial<Hero>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HeroFormData>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: heroData,
  });

  const onSubmit: SubmitHandler<HeroFormData> = (data) => {
    console.log(data);
  };

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
