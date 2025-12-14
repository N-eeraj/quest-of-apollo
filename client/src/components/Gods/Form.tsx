import {
  Grid,
  TextField,
  FormTextField,
  Button,
  SubmitButton,
  type SubmitHandler,
} from "@barrels/form/ui"
import useGodForm, {
  type DefaultValues,
} from "@hooks/gods/useGodForm";
import AddRounded from "@mui/icons-material/AddRounded";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";

interface Props {
  defaultData?: DefaultValues;
  isSubmitting?: boolean;
  onSubmit: SubmitHandler<DefaultValues>;
}

function GodForm({ defaultData, isSubmitting, onSubmit }: Props) {
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
      <FormTextField
        {...register("name")}
        placeholder="Enter name"
        helperText={errors.name?.message}
        error={!!errors.name} />

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
                {...register(`domains.${index}`)}
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
                }} />
              {(domains.length > 1) && (
                <Button
                  variant="text"
                  color="error"
                  sx={{
                    minWidth: "unset",
                  }}
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
            gridColumn: "1 / -1",
            minWidth: "unset",
            marginLeft: "auto",
          }}
          onClick={addDomain}>
          <AddRounded />
        </Button>
      </Grid>

      <SubmitButton isSubmitting={isSubmitting} />
    </Grid>
  )
}

export default GodForm;
