import { Link } from "react-router";
import Fab from "@mui/material/Fab";
import type { PropsWithChildren } from "react";
import type { SystemStyleObject } from "@mui/system";
import type { Theme } from "@emotion/react";

interface Props extends PropsWithChildren {
  link: string;
  iconHoverSx?: SystemStyleObject<Theme>
}

function LinkFab({ link, iconHoverSx = {}, children }: Props) {
  return (
    <Link to={link}>
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: {
            xs: 8,
            sm: 12,
            md: 16,
          },
          right: {
            xs: 8,
            sm: 12,
            md: 16,
          },
          ":hover > svg": iconHoverSx,
        }}>
        {children}
      </Fab>
    </Link>
  )
}

export default LinkFab;
