import LinearProgress from "@mui/material/LinearProgress";
import HeroForm from "@components/Heroes/Form";
import useHero from "@hooks/heroes/useHero";
import useHeroUpdate from "@hooks/heroes/useHeroUpdate";

function UpdateHero() {
  const {
    loading,
    data,
  } = useHero();

  const {
    onSubmit,
  } = useHeroUpdate();

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <HeroForm
          defaultData={data.hero}
          onSubmit={formData => onSubmit({ ...formData, id: data.hero.id })} />
      )}
    </>
  )
}

export default UpdateHero;
