import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import {
  type Quest,
} from "@/types";
import QuestCard from "@components/Quests/List/Card";

const GET_QUESTS = gql`
  query Quests {
    quests {
      id
      title
      status
    }
  }
`;

function Quests() {
  const {
    loading,
    data,
  } = useQuery<{quests: Array<Pick<Quest, "id" | "title" | "status">> }>(GET_QUESTS);

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <Grid
          container
          component="ul"
          spacing={2}
          padding={3}>
          {data.quests.map((quest) => (
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
      )}
    </>
  )
}

export default Quests;
