import Button from "@mui/material/Button";
import ConfirmationDialog from "@components/ui/Dialog";
import useDeleteHeroQuests from "@hooks/heroes/useDeleteHeroQuests";

function DeleteQuests() {
  const {
    isDeleting,
    setShowConfirmation,
    showConfirmation,
    handleConfirm,
  } = useDeleteHeroQuests()

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
        Remove All Quests
      </Button>

      <ConfirmationDialog
        open={showConfirmation}
        title="Confirm Deletion"
        description="Are you sure you want to delete all the quests of this hero? This action cannot be undone."
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

export default DeleteQuests;
