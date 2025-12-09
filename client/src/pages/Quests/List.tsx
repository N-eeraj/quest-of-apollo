import LinearProgress from "@mui/material/LinearProgress";
import QuestsList from "@components/Quests/List";
import CreateFab from "@components/Create/Fab";
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
        <QuestsList
          quests={data.quests}
          listProps={{
            sx: {
              paddingBottom: {
                xs: 10,
                sm: 12,
                md: 14,
              }
            }
          }} />
      )}
      <CreateFab link="/quests/create" />
    </>
  )
}

export default Quests;
