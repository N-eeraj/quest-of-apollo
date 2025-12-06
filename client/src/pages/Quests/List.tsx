import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import LinearProgress from "@mui/material/LinearProgress";
import QuestsList from "@/components/Quests/List";
import {
  type Quest,
} from "@/types";

const GET_QUESTS = gql`
  query Quests {
    quests {
      id
      title
      status
    }
  }
`;

function Quests() {
  const {
    loading,
    data,
  } = useQuery<{quests: Array<Pick<Quest, "id" | "title" | "status">> }>(GET_QUESTS);

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
