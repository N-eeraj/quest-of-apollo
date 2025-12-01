import {
  Link,
} from "react-router";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import {
  type NavItem,
} from "@/constants";

function HomeCard({ link, title, text, styles }: NavItem) {
  return (
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
  )
}

export default HomeCard;
