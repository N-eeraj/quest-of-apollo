import { useParams } from "react-router";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import QuestCard from "@components/Quests/List/Card";
import type { Hero } from "@/types";

const GET_HERO = gql`
  query Hero($id: ID!) {
    hero(id: $id) {
      id
      name
      city
      quests {
        id
        title
        status
      }
      relations {
        id
        god {
          name
        }
        relation
      }
    }
  }
`;

function Hero() {
  const {
    id,
  } = useParams<{ id: string }>();

  const {
    loading,
    data,
  } = useQuery<{ hero: Hero }>(GET_HERO, {
    variables: {
      id,
    },
  });

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
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
            component="h1">
            {data.hero.name}
          </Typography>

          <Typography
            component="span"
            display="flex"
            alignItems="center"
            flexWrap="wrap">
            From the city of&nbsp;
            <Typography
              component="strong"
              fontWeight={600}>
              {data.hero.city}
            </Typography>
          </Typography>

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
              {data.hero.relations.map(({ id, god, relation }) => (
                <Typography
                  key={id}
                  component="li">
                  {relation}: {god.name}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack rowGap={{
            sm: "2px",
          }}>
            <Typography
              variant="h5"
              component="h3">
              Quests
            </Typography>
            <Grid
              container
              component="ul"
              spacing={2}>
              {data.hero.quests.map((quest) => (
                <Grid
                  key={quest.id}
                  component="li"
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 4,
                  }}
                  sx={{
                    listStyle: "none",
                  }}>
                  <QuestCard {...quest} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      )}
    </>
  )
}

export default Hero;
