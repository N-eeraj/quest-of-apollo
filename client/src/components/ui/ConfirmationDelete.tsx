import Button from "@mui/material/Button";
import ConfirmationDialog from "@components/ui/Dialog";
import type useDeleteConfirmation from "@/hooks/useDeleteConfirmation";

interface Props extends ReturnType<typeof useDeleteConfirmation> {
  buttonText: string;
  description: string;
};

function ConfirmationDelete({
  buttonText,
  description,
  isDeleting,
  showConfirmation,
  handleConfirm,
  setShowConfirmation,
}: Props) {
  return (
    <>
      <Button
        loading={isDeleting}
        color="error"
        variant="contained"
        sx={{
          textTransform: "none",
        }}
        onClick={() => setShowConfirmation(true)}>
        {buttonText}
      </Button>

      <ConfirmationDialog
        open={showConfirmation}
        title="Confirm Deletion"
        description={description}
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

export default ConfirmationDelete;
