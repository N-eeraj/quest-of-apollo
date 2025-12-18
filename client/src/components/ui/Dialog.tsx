import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import type { PropsOf } from '@emotion/react';

export interface Props extends PropsOf<typeof Dialog> {
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onClose: () => void;
  onConfirm: () => void;
};

function ConfirmationDialog({
  title,
  description,
  confirmText = "Continue",
  cancelText = "Cancel",
  onConfirm,
  onClose,
  ...props
}: Props) {
  return (
    <Dialog
      {...props}
      onClose={onClose}>
      <DialogTitle>
        {title}
      </DialogTitle>
      {!!description && (
        <DialogContent>
        <DialogContentText>
          {description}
        </DialogContentText>
      </DialogContent>
      )}
      <DialogActions>
        <Button
          sx={{
            color: "gray",
            textTransform: "capitalize",
          }}
          onClick={onClose}>
          {cancelText}
        </Button>
        <Button
          autoFocus
          sx={{
            textTransform: "capitalize",
          }}
          onClick={onConfirm}>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationDialog;
