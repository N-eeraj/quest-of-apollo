import QuestForm from "@components/Quests/Form";
import useQuestCreate from "@hooks/quests/useQuestCreate";

function CreateQuest() {
  const {
    loading: isSubmitting,
    onSubmit,
  } = useQuestCreate();

  return (
    <>
      <QuestForm
        isSubmitting={isSubmitting}
        onSubmit={onSubmit} />
    </>
  )
}

export default CreateQuest;
