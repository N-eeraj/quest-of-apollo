import Button from "@mui/material/Button";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import type { PropsOf } from "@emotion/react";

function Delete(props: PropsOf<typeof Button>) {
  return (
    <Button
      {...props}
      variant="text"
      color="error"
      sx={{
        position: "absolute",
        top: {
          xs: 72,
          sm: 80,
        },
        right: {
          xs: 4,
          sm: 12,
        },
        minWidth: 0,
        borderRadius: "50%",
      }}>
      <DeleteOutlineRounded />
    </Button>
  )
}

export default Delete;
