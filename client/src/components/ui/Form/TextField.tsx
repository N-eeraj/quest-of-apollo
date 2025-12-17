import {
  Grid,
  TextField,
} from "@barrels/form";
import type { TextFieldProps } from "@mui/material";

function FormTextField(props: TextFieldProps) {
  return (
    <Grid
      size={{
        xs: 12,
        sm: 6,
      }}
      paddingX={{
        sm: 1,
      }}>
      <TextField
        {...props}
        fullWidth
        size="small"
      />
    </Grid>
  )
}

export default FormTextField;
