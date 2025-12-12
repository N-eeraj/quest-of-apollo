import {
  Grid,
  TextField,
  Button,
  type SubmitHandler,
} from "@barrels/form/ui"
import useGodForm, {
  type DefaultValues,
} from "@hooks/gods/useGodForm";
import AddRounded from "@mui/icons-material/AddRounded";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";

interface Props {
  defaultData?: DefaultValues;
  onSubmit: SubmitHandler<DefaultValues>;
}

function GodForm({ defaultData, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    errors,
    domains,
    addDomain,
    removeDomain,
  } = useGodForm(defaultData);

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
        display="grid"
        rowGap={2}
        columnGap={1}
        gridTemplateColumns="1fr 40px"
        size={{
          xs: 12,
          sm: 6,
        }}
        paddingX={{
          sm: 1,
        }}>
          {domains.map((_, index) => (
            <>
              <TextField
                placeholder="Enter Domain"
                helperText={errors.domains?.[index]?.message}
                error={!!errors.domains?.[index]}
                fullWidth
                size="small"
                sx={{
                  ...(domains.length === 1 && 
                    {
                      gridColumn: "1 / -1",
                    }
                  )
                }}
                {...register(`domains.${index}`)}
              />
              {(domains.length > 1) && (
                <Button
                  variant="text"
                  color="error"
                  onClick={() => removeDomain(index)}>
                  <DeleteOutlineRounded />
                </Button>
              )}
            </>
          ))}
        <Button
          variant="contained"
          size="small"
          color="secondary"
          sx={{
            gridColumn: "2 / -1",
          }}
          onClick={addDomain}>
          <AddRounded />
        </Button>
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

export default GodForm;
