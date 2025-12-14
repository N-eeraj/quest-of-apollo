import LinearProgress from "@mui/material/LinearProgress";
import QuestForm from "@components/Quests/Form";
import useQuest from "@hooks/quests/useQuest";
import useQuestUpdate from "@hooks/quests/useQuestUpdate";
import type { PropsOf } from "@emotion/react";

function UpdateQuest() {
  const {
    loading,
    data,
  } = useQuest();

  const {
    loading: isSubmitting,
    onSubmit,
  } = useQuestUpdate();

  const getDefaultValues = (): PropsOf<typeof QuestForm>["defaultData"] => {
    if (data) {
      const {
        title,
        status,
        hero,
      } = data.quest

      return {
        title,
        status,
        heroId: hero.id,
      }
    };
  }

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <QuestForm
          defaultData={getDefaultValues()}
          isSubmitting={isSubmitting}
          onSubmit={formData => onSubmit({ ...formData, id: data.quest.id })} />
      )}
    </>
  );
}

export default UpdateQuest;
