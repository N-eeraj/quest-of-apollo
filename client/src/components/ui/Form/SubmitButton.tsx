import {
  Grid,
  Button,
} from "@barrels/form/ui";

export interface Props {
  isSubmitting?: boolean;
};

function SubmitButton({  isSubmitting }: Props) {
  return (
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
  )
}

export default SubmitButton;
