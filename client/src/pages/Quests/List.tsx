import LinearProgress from "@mui/material/LinearProgress";
import QuestsList from "@components/Quests/List";
import useQuestsList from "@hooks/quests/useQuestsList";

function Quests() {
  const {
    loading,
    data,
  } = useQuestsList();

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <QuestsList quests={data.quests} />
      )}
    </>
  )
}

export default Quests;
