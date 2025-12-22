import { Link } from "react-router";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ConfirmationDelete from "@components/ui/ConfirmationDelete";
import useDeleteGodRelations from "@hooks/gods/useDeleteGodRelations";
import type { God } from "@/types";

interface Props {
  relations: God["relations"];
  onDelete: () => void;
};

function GodsRelations({ relations, onDelete }: Props) {
  const deleteConfirmation = useDeleteGodRelations(onDelete);
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

        <ConfirmationDelete
          buttonText="Remove All Relations"
          description="Are you sure you want to delete all the relations of this god? This action cannot be undone."
          {...deleteConfirmation} />
      </Stack>
      <Stack
        component="ul"
        sx={{
          listStyle: "none",
        }}>
        {relations.map(({ id, hero, relation }) => (
          <Typography
            key={id}
            component="li">
            {relation} of&nbsp;
            <Typography
              component={Link}
              to={`/heroes/${hero.id}`}
              sx={{
                textDecoration: "none",
                fontWeight: 600,
                color: "inherit",
                ":hover": {
                  textDecoration: "underline",
                },
              }}>
              {hero.name}
            </Typography>
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}

export default GodsRelations;
