import { Outlet } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  )
}

export default DefaultLayout;
