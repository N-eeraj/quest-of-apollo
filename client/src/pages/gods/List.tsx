import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import GodCard from "@components/Gods/List/Card";
import CreateFab from "@components/Fab/Create";
import useGodsList from "@hooks/gods/useGodsList";

function Gods() {
  const {
    loading,
    data,
  } = useGodsList();

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
          {data.gods.map((god) => (
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
      )}
      <CreateFab link="/gods/create" />
    </>
  )
}

export default Gods;
