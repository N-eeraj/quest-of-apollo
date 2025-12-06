import Grid from "@mui/material/Grid";
import QuestCard from "@components/Quests/List/Card";
import {
  type Quest,
} from "@/types";

export interface Props {
  quests: Array<Pick<Quest, "id" | "title" | "status">>
}

function QuestsList({ quests }: Props) {
  return (
    <Grid
      container
      component="ul"
      spacing={2}
      padding={3}>
      {quests.map((quest) => (
        <Grid
          key={quest.id}
          component="li"
          size={{
            xs: 12,
            sm: 6,
            md: 4,
          }}
          sx={{
            listStyle: "none",
          }}>
          <QuestCard {...quest} />
        </Grid>
      ))}
    </Grid>
  )
}

export default QuestsList
