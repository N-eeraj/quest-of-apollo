import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DeleteQuests from "@components/Heroes/Quests/Delete";
import QuestsList from "@components/Quests/List";
import type { Quest } from "@/types";

interface Props {
  quests: Array<Quest>;
};

function HeroQuests({ quests }: Props) {
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
          <DeleteQuests />
        </Stack>
        <QuestsList quests={quests} />
      </Stack>
    </>
  )
}

export default HeroQuests;
