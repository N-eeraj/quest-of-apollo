import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import type { Hero } from "@/types";
import HeroCard from "@/components/Heros/List/Card";

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
        {data?.heroes.map((hero) => (
          <Grid
            key={hero.id}
            component="li"
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            sx={{
              listStyle: "none",
            }}>
            <HeroCard {...hero} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Heroes;
