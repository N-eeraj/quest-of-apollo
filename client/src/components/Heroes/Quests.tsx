import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ConfirmationDelete from "@components/ui/ConfirmationDelete";
import useDeleteHeroQuests from "@hooks/heroes/useDeleteHeroQuests";
import QuestsList from "@components/Quests/List";
import type { Quest } from "@/types";

interface Props {
  quests: Array<Quest>;
  onDelete: () => void;
};

function HeroQuests({ quests, onDelete }: Props) {
  const deleteConfirmation = useDeleteHeroQuests(onDelete);
  if (!quests.length) return;

  return (
    <>
      <Stack
        rowGap={{
          sm: "2px",
        }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Typography
            variant="h5"
            component="h3">
            Quests
          </Typography>

          <ConfirmationDelete
            buttonText="Remove All Quests"
            description="Are you sure you want to delete all the quests of this hero? This action cannot be undone."
            {...deleteConfirmation} />
        </Stack>
        <QuestsList quests={quests} />
      </Stack>
    </>
  )
}

export default HeroQuests;
