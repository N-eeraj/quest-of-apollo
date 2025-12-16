import Button from "@mui/material/Button";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import type { PropsOf } from "@emotion/react";

interface Props extends Pick<PropsOf<typeof Button>, "loading" | "onClick"> {
  fixed?: boolean;
};

function Delete({ loading, onClick, fixed = true }: Props) {
  return (
    <Button
      variant="text"
      color="error"
      loading={loading}
      sx={{
        ...(fixed && {
          position: "absolute",
          top: {
            xs: 72,
            sm: 80,
          },
          right: {
            xs: 4,
            sm: 12,
          },
        }),
        minWidth: 0,
        borderRadius: "50%",
      }}
      onClick={onClick}>
      <DeleteOutlineRounded />
    </Button>
  )
}

export default Delete;
