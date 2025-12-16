import {
  Link,
  Stack,
  LinearProgress,
  Typography,
  EditFab,
} from "@barrels/view";
import Box from "@mui/material/Box";
import useGod from "@hooks/gods/useGod";

function God() {
  const {
    loading,
    data,
  } = useGod();

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <>
          <Stack
            rowGap={{
              xs: 1,
              sm: 1.5,
            }}
            paddingX={{
              xs: 2,
              sm: 3,
              md: 4,
            }}
            paddingY={1}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight={700}>
              {data.god.name}
            </Typography>

            <Stack rowGap={{
              xs: 0.5,
            }}>
              <Typography
                variant="h5"
                component="h3">
                God of:-
              </Typography>
              <Box
                component="ul"
                sx={{
                  paddingLeft: {
                    xs: 3,
                    sm: 4,
                  },
                }}>
                {data.god.domains.map((domain, index) => (
                  <Typography
                    key={index}
                    component="li"
                    fontWeight={600}>
                    {domain}
                  </Typography>
                ))}
              </Box>
            </Stack>

            {!!data.god.relations.length && (
              <Stack rowGap={{
                sm: "2px",
              }}>
                <Typography
                  variant="h5"
                  component="h3">
                  Relations
                </Typography>
                <Stack
                  component="ul"
                  sx={{
                    listStyle: "none",
                  }}>
                  {data.god.relations.map(({ id, hero, relation }) => (
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
            )}
          </Stack>

          <EditFab link={`/gods/${data.god.id}/edit`} />
        </>
      )}
    </>
  )
}

export default God;
