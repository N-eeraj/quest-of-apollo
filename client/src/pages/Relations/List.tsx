import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import type { Relation } from "@/types";
import RelationCard from "@components/Relations/List/Card";

const GET_RELATIONS = gql`
  query Relations {
    relations {
      id
      hero {
        name
      }
      god {
        name
      }
      relation
    }
  }
`;

function Relations() {
  const {
    loading,
    data,
  } = useQuery<{relations: Array<Relation> }>(GET_RELATIONS);

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <Grid
          container
          component="ul"
          spacing={2}
          padding={3}>
          {data.relations.map((relation) => (
            <Grid
              key={relation.id}
              component="li"
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              sx={{
                listStyle: "none",
              }}>
              <RelationCard {...relation} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Relations;
