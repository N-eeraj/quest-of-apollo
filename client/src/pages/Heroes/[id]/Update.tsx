import LinearProgress from "@mui/material/LinearProgress";
import HeroForm from "@components/Heroes/Form";
import useHero from "@hooks/heroes/useHero";

function UpdateHero() {
  const {
    loading,
    data,
  } = useHero();
  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && <HeroForm {...data.hero} />}
    </>
  )
}

export default UpdateHero;
