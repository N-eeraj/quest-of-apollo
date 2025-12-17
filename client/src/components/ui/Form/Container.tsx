import {
  Grid,
  type SubmitHandler,
} from "@barrels/form"
import type { PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
  onSubmit: SubmitHandler<any>;
};

function FormContainer({ children, onSubmit }: Props) {
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
      onSubmit={onSubmit}>
      {children}
    </Grid>
  )
}

export default FormContainer;
