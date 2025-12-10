import {
  Link,
  Stack,
  LinearProgress,
  Typography,
  EditFab,
} from "@barrels/view";
import useRelation from "@hooks/relations/useRelation";

function Relation() {
  const {
    loading,
    data,
  } = useRelation();

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <>
          <Stack
            direction="row"
            columnGap={{
              xs: 1,
              sm: 1.5,
            }}
            alignItems="baseline"
            flexWrap="wrap"
            paddingX={{
              xs: 2,
              sm: 3,
              md: 4,
            }}
            paddingY={1}>
            <Typography
              variant="h4"
              component={Link}
              to={`/gods/${data.relation.god.id}`}
              fontWeight={600}
              fontSize={{
                xs: 32,
                md: 46,
              }}
              sx={{
                color: "inherit",
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                },
              }}>
              {data.relation.god.name}
            </Typography>
            <Typography
              variant="h4"
              component="strong"
              fontWeight={600}
              fontSize={{
                xs: 24,
                md: 32,
              }}>
              {data.relation.relation}
            </Typography>
            <Typography
              variant="h4"
              component="span"
              fontSize={{
                xs: 24,
                md: 32,
              }}>
              of
            </Typography>
            <Typography
              variant="h4"
              component={Link}
              to={`/heroes/${data.relation.hero.id}`}
              fontWeight={600}
              fontSize={{
                xs: 32,
                md: 46,
              }}
              sx={{
                color: "inherit",
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                },
              }}>
              {data.relation.hero.name}
            </Typography>
          </Stack>

          <EditFab link={`/relations/${data.relation.id}/edit`} />
        </>
      )}
    </>
  )
}

export default Relation;
