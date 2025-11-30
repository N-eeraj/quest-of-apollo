import { useState } from "react";

import AppTopBar from "@components/Navbar/AppBar";
import SideDrawer from "@components/Navbar/Drawer";

const navItems = [
  {
    link: "/heroes",
    text: "Heroes",
  },
  {
    link: "/quests",
    text: "Quests",
  },
  {
    link: "/gods",
    text: "Gods",
  },
  {
    link: "/relations",
    text: "Relations",
  },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppTopBar
        navItems={navItems}
        onDrawerToggle={handleDrawerToggle} />

      <SideDrawer
        open={drawerOpen}
        navItems={navItems}
        onDrawerToggle={handleDrawerToggle} />
    </>
  )
}

export default Navbar
