import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import HeroCard from "@components/Heroes/List/Card";
import CreateFab from "@components/Fab/Create";
import useHeroesList from "@hooks/heroes/useHeroesList";

function Heroes() {
  const {
    loading,
    data,
  } = useHeroesList();

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
          {data.heroes.map((hero) => (
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
      )}
      <CreateFab link="/heroes/create" />
    </>
  )
}

export default Heroes;
