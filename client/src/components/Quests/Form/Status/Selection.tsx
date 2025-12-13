import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { STATUS_DISPLAY_MAP } from "@/constants";
import type { Quest } from "@/types";

function StatusSelection({ status }: Pick<Quest, "status">) {
  const selection = STATUS_DISPLAY_MAP.get(status)
  if (!selection) return

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      columnGap={0.5}>
      <Typography color={selection.color}>
        {selection.text}
      </Typography>
      <selection.Icon sx={{
        color: selection.color,
      }} />
    </Stack>
  )
}

export default StatusSelection;
