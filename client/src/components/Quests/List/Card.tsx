import { Link } from "react-router";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { STATUS_DISPLAY_MAP } from "@/constants";
import {
  type Quest,
} from "@/types";

function QuestCard({ id, title, status }: Pick<Quest, "id" | "title" | "status">) {
  const questStatus = STATUS_DISPLAY_MAP.get(status)!;

  return (
    <Link
      to={`/quests/${id}`}
      style={{
        textDecoration: "none",
      }}>
      <Card
        variant="outlined"
        sx={({ alpha, darken }) => ({
          display: "flex",
          flexDirection: "column",
          height: 1,
          padding: 2,
          borderColor: darken(questStatus.color, 0.2),
          transition: "200ms",
          ":hover": {
            backgroundColor: alpha(questStatus.color, 0.2),
            "button": {
              backgroundColor: questStatus.color,
              color: "white",
            },
          },
        })}>
        <Typography
          component="strong"
          fontSize={18}
          display="block"
          fontWeight={600}>
          {title}
        </Typography>
        <Tooltip title={questStatus.text}>
          <IconButton
            sx={{
              color: questStatus.color,
              marginTop: "auto",
              marginLeft: "auto",
              transition: "200ms",
            }}>
            <questStatus.Icon />
          </IconButton>
        </Tooltip>
      </Card>
    </Link>
  )
}

export default QuestCard;
