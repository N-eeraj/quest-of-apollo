import Grid from "@mui/material/Grid";
import QuestCard from "@components/Quests/List/Card";
import {
  type Quest,
} from "@/types";
import type { PropsOf } from "@emotion/react";

export interface Props {
  quests: Array<Pick<Quest, "id" | "title" | "status">>
  listProps?: Partial<PropsOf<typeof Grid<"ul">>>
}

function QuestsList({ quests, listProps }: Props) {
  return (
    <Grid
      {...listProps}
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
