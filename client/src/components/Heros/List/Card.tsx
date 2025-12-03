import { Link } from "react-router";
import Card from "@mui/material/Card";
import {
  type Hero,
} from "@/types"

function HeroCard({ id, name, city }: Pick<Hero, "id" | "name" | "city">) {
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
        &nbsp;of&nbsp;
        <em>
          {city}
        </em>
      </Card>
    </Link>
  )
}

export default HeroCard
