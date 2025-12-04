import { useParams } from "react-router";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import LinearProgress from "@mui/material/LinearProgress";
import type { Hero } from "@/types";

const GET_HERO = gql`
  query Hero($id: ID!) {
    hero(id: $id) {
      id
      name
      city
      quests {
        id
        title
        status
      }
      relations {
        id
        god {
          name
        }
      }
    }
  }
`;

function Hero() {
  const {
    id,
  } = useParams<{ id: string }>()

  const {
    loading,
    data,
  } = useQuery<{ hero: Hero }>(GET_HERO, {
    variables: {
      id,
    },
  })

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default Hero;
