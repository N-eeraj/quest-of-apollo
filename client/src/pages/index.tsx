import { Link } from "react-router";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";

const navItems = [
  {
    link: "/heroes",
    title: "Heroes",
    text: "Discover legendary warriors, their origins, deeds, and destinies across Greek myth.",
    styles: {
      background: "#4B2E83",
      accent: "#D4AF37",
      foreground: "#F2E9D8",
    },
  },
  {
    link: "/quests",
    title: "Quests",
    text: "Explore famous journeys, trials, and adventures that shaped the ancient world.",
    styles: {
      background: "#2D3A67",
      accent: "#A78BFA",
      foreground: "#E8DAFF",
    },
  },
  {
    link: "/gods",
    title: "Gods",
    text: "Learn about the Olympians, their powers, domains, rivalries, and divine myths.",
    styles: {
      background: "#6A3FBF",
      accent: "#FFD700",
      foreground: "#FFF4D6",
    },
  },
  {
    link: "/relations",
    title: "Relations",
    text: "Trace the complex family ties, alliances, and conflicts connecting gods and mortals.",
    styles: {
      background: "#7B4A74",
      accent: "#CBA6F7",
      foreground: "#F8ECFF",
    },
  },
];

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
      {navItems.map(({ title, text, link, styles }, index) => (
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
          <Link
            to={link}
            style={{
              textDecoration: "none",
              height: "100%",
            }}>
            <Card
              variant="outlined"
              elevation={0}
              sx={{
                position: "relative",
                height: 1,
                minHeight: {
                  sm: 200,
                },
                padding: 4,
                backgroundColor: styles.background,
                "& > svg": {
                  scale: 0.5,
                  opacity: 0,
                  transform: 'translate(-100%, 100%)',
                },
                "&:hover > svg": {
                  scale: 1,
                  opacity: 0.25,
                  transform: 'translate(0)',
                },
              }}>
              <NorthEastRoundedIcon
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  fontSize: 72,
                  color: styles.accent,
                  transition: "300ms",
                  transformOrigin: "bottom-left",
                }} />
              <Typography
                variant="h5"
                component="h3"
                color={styles.accent}>
                {title}
              </Typography>
              <Typography
                component="p"
                color={styles.foreground}>
                {text}
              </Typography>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default Home
