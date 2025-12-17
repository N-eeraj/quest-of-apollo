import { Fragment } from "react";
import {
  Grid,
  TextField,
  Button,
} from "@barrels/form"
import AddRounded from "@mui/icons-material/AddRounded";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import type {
  Merge,
  FieldError,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";

export interface Props {
  register: (name: `domains.${number}`, options?: RegisterOptions<{
    name: string;
    domains: string[];
  }, `domains.${number}`> | undefined) => UseFormRegisterReturn<`domains.${number}`>;
  domains: number;
  errors?:  Merge<FieldError, (FieldError | undefined)[]>;
  onAddDomain: () => void
  onRemoveDomain: (_index: number) => void
};

function Domains({ register, domains, errors, onAddDomain, onRemoveDomain }: Props) {
  return (
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
        {Array.from({ length: domains }).map((_, index) => (
          <Fragment key={index}>
            <TextField
              {...register(`domains.${index}`)}
              placeholder="Enter Domain"
              helperText={errors?.[index]?.message}
              error={!!errors?.[index]}
              fullWidth
              size="small"
              sx={{
                ...(domains === 1 && 
                  {
                    gridColumn: "1 / -1",
                  }
                )
              }} />
            {(domains > 1) && (
              <Button
                variant="text"
                color="error"
                sx={{
                  minWidth: "unset",
                }}
                onClick={() => onRemoveDomain(index)}>
                <DeleteOutlineRounded />
              </Button>
            )}
          </Fragment>
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
        onClick={onAddDomain}>
        <AddRounded />
      </Button>
    </Grid>
  )
}

export default Domains;
