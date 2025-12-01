import Grid from "@mui/material/Grid";
import HomeCard from "@components/Home/Card";
import {
  navItems,
} from "@/constants";

function Home() {
  return (
    <Grid
      component="ul"
      container
      columnSpacing={3}
      rowSpacing={2}
      sx={{
        paddingX: {
          xs: 2,
          md: 4,
        },
        paddingY: 3,
      }}>
      {navItems.map((item, index) => (
        <Grid
          key={index}
          component="li"
          size={{
            xs: 12,
            sm: 6,
            lg: 3,
          }}
          sx={{
            listStyle: "none",
          }}>
          <HomeCard {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Home;
