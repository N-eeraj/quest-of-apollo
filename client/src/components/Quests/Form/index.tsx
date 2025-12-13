import {
  Grid,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  type SubmitHandler,
} from "@barrels/form/ui"
import StatusSelection from "@components/Quests/Form/Status/Selection";
import useQuestForm, {
  statusItems,
  type DefaultValues,
} from "@hooks/quests/useQuestForm";
import type { Quest } from "@/types";

interface Props {
  defaultData?: DefaultValues;
  onSubmit: SubmitHandler<DefaultValues>;
}

function QuestForm({ defaultData, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    errors,
  } = useQuestForm(defaultData);

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
          placeholder="Enter title"
          helperText={errors.title?.message}
          error={!!errors.title}
          fullWidth
          size="small"
          {...register("title")}
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
        <FormControl fullWidth>
          <InputLabel size="small">
            Select status
          </InputLabel>
          <Select
            label="Select status"
            error={!!errors.status}
            fullWidth
            size="small"
            renderValue={(selection) => <StatusSelection status={selection as Quest["status"]} />}
            {...register("status")}
          >
            {statusItems.map(({ value, text, Icon, color }) => (
              <MenuItem
                key={value}
                value={value}
                sx={{
                  display: "flex",
                  columnGap: 0.5,
                }}>
                {Icon && (
                  <Icon
                    fontSize="small"
                    sx={{
                      color,
                    }} />
                )}
                <span>
                  {text}
                </span>
              </MenuItem>
            ))}
          </Select>
          {errors.status?.message && (
            <FormHelperText error>
              {errors.status.message}
            </FormHelperText>
          )}
        </FormControl>
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

export default QuestForm;
