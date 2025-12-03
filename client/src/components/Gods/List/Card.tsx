import { Link } from "react-router";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {
  type God,
} from "@/types"

function GodCard({ id, name, domains }: Pick<God, "id" | "name" | "domains">) {
  return (
    <Link
      to={`/heroes/${id}`}
      style={{
        textDecoration: "none",
      }}>
      <Card
        variant="outlined"
        sx={({ palette, alpha }) => ({
          height: 1,
          padding: 2,
          borderColor: palette.primary.main,
          transition: "200ms",
          ":hover": {
            backgroundColor: alpha(palette.secondary.main, 0.25),
          },
        })}>
        <strong>
          {name}
        </strong>
        &nbsp;god of&nbsp;
        <Typography
          component="em"
          color="textSecondary">
          {domains.join(", ")}
        </Typography>
      </Card>
    </Link>
  )
}

export default GodCard
