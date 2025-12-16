import { Outlet } from "react-router";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Navbar from "@components/Navbar";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#58358f",
    },
    secondary: {
      main: "#3f21ba",
    },
  },
});

function DefaultLayout() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Box
          component="main"
          position="relative"
          paddingTop={{
            xs: 8,
            sm: 10,
          }}
          minHeight={"100vh"}>
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default DefaultLayout;
