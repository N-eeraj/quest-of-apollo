import {
  Grid,
  LinearProgress,
  CreateFab,
} from "@barrels/list";
import RelationCard from "@components/Relations/List/Card";
import useRelationList from "@hooks/relations/useRelationList";

function Relations() {
  const {
    loading,
    data,
  } = useRelationList();

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <Grid
          container
          component="ul"
          spacing={2}
          padding={3}
          paddingBottom={{
            xs: 10,
            sm: 12,
            md: 14,
          }}>
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
      <CreateFab link="/relations/create" />
    </>
  )
}

export default Relations;
