import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import LinearProgress from "@mui/material/LinearProgress";

const GET_HEROES = gql`
  query Heroes {
    heroes {
      name
      id
      city
    }
  }
`;

function Heroes() {
  const {
    loading,
    data,
  } = useQuery(GET_HEROES);

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data?.hero}
    </>
  )
}

export default Heroes;
