import {
  Controller,
  FormControl,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  LinearProgress,
} from "@barrels/form/ui";
import {
  type SelectProps,
} from "@mui/material";
import type { FC } from "react";
import type { Control } from "react-hook-form";

interface Option {
  value: string | number;
  text: string;
}

export interface Props {
  control: Control<any>;
  name: string;
  label: string;
  loading?: boolean;
  options: Array<Option>;
  errors?: string;
  Item?: FC<Option & any>;
  renderValue?: SelectProps["renderValue"];
};

function FormSelect({ control, name, label, loading, options, errors, Item, renderValue }: Props) {
  return (
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
          {label}
        </InputLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label={label}
              disabled={loading}
              fullWidth
              size="small"
              value={field.value ?? ""}
              renderValue={renderValue}>
              {options?.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}>
                  {Item ? <Item {...option} /> : option.text}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {loading && (
          <LinearProgress />
        )}
        {errors && (
          <FormHelperText error>
            {errors}
          </FormHelperText>
        )}
      </FormControl>
    </Grid>
  )
}

export default FormSelect;
