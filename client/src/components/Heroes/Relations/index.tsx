import { Link } from "react-router";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DeleteRelations from "@components/Heroes/Relations/Delete";
import type { Hero } from "@/types";

interface Props {
  relations: Hero["relations"];
  onDelete: () => void;
};

function HeroRelations({ relations, onDelete }: Props) {
  if (!relations.length) return;

  return (
    <Stack rowGap={{
      sm: "2px",
    }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Typography
          variant="h5"
          component="h3">
          Relations
        </Typography>
        <DeleteRelations onDelete={onDelete} />
      </Stack>
      <Stack
        component="ul"
        sx={{
          listStyle: "none",
        }}>
        {relations.map(({ id, god, relation }) => (
          <Typography
            key={id}
            component="li">
            {relation}:&nbsp;
            <Typography
              component={Link}
              to={`/gods/${god.id}`}
              sx={{
                textDecoration: "none",
                fontWeight: 600,
                color: "inherit",
                ":hover": {
                  textDecoration: "underline",
                },
              }}>
              {god.name}
            </Typography>
          </Typography>
        ))}
      </Stack>
    </Stack>
  )
}

export default HeroRelations;
