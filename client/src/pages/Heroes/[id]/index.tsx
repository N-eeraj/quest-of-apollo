import {
  Link,
  useParams,
} from "react-router";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import QuestsList from "@components/Quests/List";
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
          id
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

          <Stack rowGap={{
            sm: "2px",
          }}>
            <Typography
              variant="h5"
              component="h3">
              Quests
            </Typography>
            <QuestsList quests={data.hero.quests} />
          </Stack>
        </Stack>
      )}
    </>
  )
}

export default Hero;
