import { Link } from "react-router";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  link: string
}

function CreateFab({ link }: Props) {
  return (
    <Link to={link}>
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: {
            xs: 8,
            sm: 12,
            md: 16,
          },
          right: {
            xs: 8,
            sm: 12,
            md: 16,
          },
          ":hover > svg": {
            transform: "rotate(90deg) scale(1.25)",
          }
        }}>
        <AddIcon sx={{
          transition: "transform 200ms",
        }} />
      </Fab>
    </Link>
  )
}

export default CreateFab
