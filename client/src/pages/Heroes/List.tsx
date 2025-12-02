import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { Link } from "react-router";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";
import type { Hero } from "@/types";

const GET_HEROES = gql`
  query Heroes {
    heroes {
      id
      name
      city
    }
  }
`;

function Heroes() {
  const {
    loading,
    data,
  } = useQuery<{heroes: Array<Pick<Hero, "id" | "name" | "city">> }>(GET_HEROES);

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      <Grid
        container
        component="ul"
        spacing={2}
        padding={3}>
        {data?.heroes.map(({ id, name, city }) => (
          <Grid
            key={id}
            component="li"
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            sx={{
              listStyle: "none",
            }}>
            <Link
              to={`/heroes/${id}`}
              style={{
                textDecoration: "none",
              }}>
              <Card
                variant="outlined"
                sx={({ palette, alpha }) => ({
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
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Heroes;
