import EditRoundedIcon from "@mui/icons-material/EditRounded";
import LinkFab from "@components/Fab";

interface Props {
  link: string;
}

function EditFab({ link }: Props) {
  return (
    <LinkFab
      link={link}
      iconHoverSx={{
        transform: "rotate(-20deg)",
      }}>
      <EditRoundedIcon sx={{
        transition: "transform 200ms",
      }} />
    </LinkFab>
  )
}

export default EditFab;
