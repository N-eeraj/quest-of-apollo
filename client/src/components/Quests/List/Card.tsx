import { Link } from "react-router";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import HikingRoundedIcon from "@mui/icons-material/HikingRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import {
  type Quest,
  Status,
} from "@/types"

function QuestCard({ id, title, status }: Pick<Quest, "id" | "title" | "status">) {

  const questStatus = (() => {
    switch(status) {
      case Status.COMPLETED:
        return {
          text: "Completed",
          Icon: CheckCircleRoundedIcon,
          color: "#3a3",
        } as const;
      case Status.IN_PROGRESS:
        return {
          text: "In Progress",
          Icon: HikingRoundedIcon,
          color: "#39f",
        } as const;
      case Status.PLANNED:
        return {
          text: "Planned",
          Icon: AssignmentRoundedIcon,
          color: "#e83",
        } as const;
    }
  })()

  return (
    <Link
      to={`/quests/${id}`}
      style={{
        textDecoration: "none",
      }}>
      <Card
        variant="outlined"
        sx={({ alpha, darken }) => ({
          height: 1,
          padding: 2,
          borderColor: darken(questStatus.color, 0.2),
          transition: "200ms",
          ":hover": {
            backgroundColor: alpha(questStatus.color, 0.2),
          },
        })}>
        <strong>
          {title}
        </strong>
        <Tooltip title={questStatus.text}>
          <IconButton sx={{
              color: questStatus.color,
            }}>
            <questStatus.Icon />
          </IconButton>
        </Tooltip>
      </Card>
    </Link>
  )
}

export default QuestCard
