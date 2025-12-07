import {
  Link,
  useParams,
} from "react-router";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { STATUS_DISPLAY_MAP } from "@/constants";
import type { Quest } from "@/types";

const GET_QUEST = gql`
  query Quest($id: ID!) {
    quest(id: $id) {
      title
      status
      hero {
        id
        name
      }
    }
  }
`;

function Quest() {
  const {
    id,
  } = useParams<{ id: string }>();

  const {
    loading,
    data,
  } = useQuery<{ quest: Quest }>(GET_QUEST, {
    variables: {
      id,
    },
  });

  const questStatus = STATUS_DISPLAY_MAP.get(data?.quest.status!);

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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap">
            <Typography
              variant="h4"
              component="h1">
              {data.quest.title}
            </Typography>
            {questStatus && (
              <Stack
                direction="row"
                alignItems="center"
                columnGap={1}
                sx={{
                  color: questStatus.color,
                }}>
                <Typography
                  variant="subtitle1"
                  component="strong"
                  fontWeight={600}>
                  {questStatus.text}
                </Typography>
                <questStatus.Icon />
              </Stack>
            )}
          </Stack>

          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: 18,
                sm: 24,
              }
            }}>
            Hero:&nbsp;
            <Typography
              component={Link}
              to={`/heroes/${data.quest.hero.id}`}
              sx={{
                textDecoration: "none",
                fontWeight: 600,
                color: "inherit",
                fontSize: "inherit",
                ":hover": {
                  textDecoration: "underline",
                },
              }}>
              {data.quest.hero.name}
            </Typography>
          </Typography>
        </Stack>
      )}
    </>
  )
}

export default Quest;
