import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import ConfirmationDialog from "@components/ui/Dialog";
import type { PropsOf } from "@emotion/react";

interface Props extends Pick<PropsOf<typeof Button>, "loading"> {
  fixed?: boolean;
  onClick: () => void;
};

function Delete({ loading, onClick, fixed = true }: Props) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleConfirm = () => {
    setShowConfirmation(false);
    onClick();
  };

  return (
    <>
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
        onClick={() => setShowConfirmation(true)}>
        <DeleteOutlineRounded />
      </Button>

      <ConfirmationDialog
        open={showConfirmation}
        title="Confirm Deletion"
        description="Are you sure you want to delete this item? This action cannot be undone."
        slotProps={{
          paper: {
            sx: {
              width: {
                sm: 480,
              },
            }
          }
        }}
        onConfirm={handleConfirm}
        onClose={() => setShowConfirmation(false)} />
    </>
  )
}

export default Delete;
