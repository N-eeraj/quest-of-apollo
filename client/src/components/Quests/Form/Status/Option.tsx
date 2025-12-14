import Box from "@mui/material/Box";
import type { StatusDisplay } from "@/types";

function StatusOption({ Icon, color, text }: StatusDisplay) {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: 0.5,
      }}>
      {Icon && (
        <Icon
          fontSize="small"
          sx={{
            color,
          }} />
      )}
      <span>
        {text}
      </span>
    </Box>
  )
}

export default StatusOption;
