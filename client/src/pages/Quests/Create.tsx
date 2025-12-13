import QuestForm from "@components/Quests/Form";
import useQuestCreate from "@hooks/quests/useQuestCreate";

function CreateQuest() {
  const {
    onSubmit,
  } = useQuestCreate();

  return (
    <>
      <QuestForm onSubmit={onSubmit} />
    </>
  )
}

export default CreateQuest;
