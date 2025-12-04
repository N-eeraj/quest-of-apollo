import {
  type MouseEventHandler,
} from "react";
import {
  Link,
  useLocation,
} from "react-router";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  type NavItem,
} from "@/constants";

interface Props {
  navItems: Array<NavItem>
  onDrawerToggle: MouseEventHandler
}

function AppTopBar({ navItems, onDrawerToggle }: Props) {
  const location = useLocation()

  return (
    <AppBar
      component="nav"
      color="primary">
      <Toolbar sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Box
          alignItems="center"
          sx={{
            mr: 2,
            display: {
              xs: "flex",
              sm: "none",
            },
          }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography sx={{
              display: {
                sm: "none",
              },
            }}>
            Quest of Apollo
          </Typography>
        </Box>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
              columnGap: 1,
            }}>
            <Box
              width={42}
              height={42}
              padding={1}
              borderRadius="50%"
              sx={{
                backgroundColor: "white",
              }}>
              <img
                src="https://apollo-server-landing-page.cdn.apollographql.com/_latest/assets/favicon.png"
                alt="Quest of Apollo"
                width="100%"
                height="100%" />
            </Box>
            <Typography color="white">
              Quest of Apollo
            </Typography>
          </Typography>
        </Link>
        <Box sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}>
          {navItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}>
              <Button sx={{
                position: "relative",
                color: "#fff",
                textTransform: "none",
                "::before": {
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  content: "''",
                  display: "block",
                  height: 2,
                  width: "100%",
                  backgroundColor: "white",
                  transform: location.pathname === item.link ? "scaleX(1)" : "scaleX(0)",
                  transitionDuration: "200ms",
                  transformOrigin: "left",
                },
              }}>
                {item.title}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AppTopBar;
