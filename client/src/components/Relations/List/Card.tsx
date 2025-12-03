import { Link } from "react-router";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {
  type Relation,
} from "@/types"

function RelationCard({ id, hero, god, relation }: Relation) {
  return (
    <Link
      to={`/relations/${id}`}
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
        <Typography
          component="strong"
          color="secondary"
          fontWeight={600}>
          {god.name}
        </Typography>
        <Typography
          component="em"
          color="textSecondary">
          &nbsp;{relation} of&nbsp;
        </Typography>
        <Typography
          component="strong"
          color="primary"
          fontWeight={600}>
          {hero.name}
        </Typography>
      </Card>
    </Link>
  )
}

export default RelationCard
