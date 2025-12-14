import AddRoundedIcon from "@mui/icons-material/AddRounded";
import LinkFab from "@components/ui/Fab";

export interface Props {
  link: string;
};

function CreateFab({ link }: Props) {
  return (
    <LinkFab
      link={link}
      iconHoverSx={{
        transform: "rotate(90deg) scale(1.25)",
      }}>
      <AddRoundedIcon sx={{
        transition: "transform 200ms",
      }} />
    </LinkFab>
  )
}

export default CreateFab;
