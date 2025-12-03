import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import type { God } from "@/types";
import GodCard from "@components/Gods/List/Card";

const GET_GODS = gql`
  query Gods {
    gods {
      id
      name
      domains
    }
  }
`;

function Gods() {
  const {
    loading,
    data,
  } = useQuery<{gods: Array<Pick<God, "id" | "name" | "domains">> }>(GET_GODS);

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      <Grid
        container
        component="ul"
        spacing={2}
        padding={3}>
        {data?.gods.map((god) => (
          <Grid
            key={god.id}
            component="li"
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            sx={{
              listStyle: "none",
            }}>
            <GodCard {...god} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Gods;
