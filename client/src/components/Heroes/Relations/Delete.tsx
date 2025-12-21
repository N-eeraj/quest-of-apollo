import Button from "@mui/material/Button";
import ConfirmationDialog from "@components/ui/Dialog";
import useDeleteHeroRelations from "@hooks/heroes/useDeleteHeroRelations";

interface Props {
  onDelete: () => void;
};

function DeleteRelations({ onDelete }: Props) {
  const {
    isDeleting,
    setShowConfirmation,
    showConfirmation,
    handleConfirm,
  } = useDeleteHeroRelations(onDelete)

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
        Remove All Relations
      </Button>

      <ConfirmationDialog
        open={showConfirmation}
        title="Confirm Deletion"
        description="Are you sure you want to delete all the relations of this hero? This action cannot be undone."
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

export default DeleteRelations;
