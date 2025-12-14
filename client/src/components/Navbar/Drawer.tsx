import {
  type MouseEventHandler,
} from "react";
import {
  Link,
  useLocation,
} from "react-router";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  type NavItem,
} from "@/constants";

const drawerWidth = 240;

export interface Props {
  open: boolean;
  onDrawerToggle: MouseEventHandler;
  navItems: Array<NavItem>;
};

function SideDrawer({ open, navItems, onDrawerToggle }: Props) {
  const location = useLocation();

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: {
          xs: "block",
          sm: "none",
        },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}>
      <Box
        sx={{
          textAlign: "center",
        }}
        onClick={onDrawerToggle}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}>
          <Typography
            variant="h6"
            component="h2"
            sx={({ palette }) => ({
              display: "flex",
              alignItems: "center",
              columnGap: 1,
              minHeight: "60px",
              padding: 2,
              backgroundColor: palette.primary.main,
            })}>
            <Box
              width={40}
              height={40}
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
        <Divider />
        <List>
          {navItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={({ palette, alpha }) => ({
                position: "relative",
                color: location.pathname === item.link ? palette.secondary.main : "inherit",
                backgroundColor: location.pathname === item.link ? alpha(palette.secondary.main, 0.2) : "inherit",
                "::before": {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  content: "''",
                  display: location.pathname === item.link ? "block" : "none",
                  height: "100%",
                  width: 5,
                  backgroundColor: palette.secondary.main,
                },
              })}>
              <ListItemButton
                component={Link}
                to={item.link}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default SideDrawer;
