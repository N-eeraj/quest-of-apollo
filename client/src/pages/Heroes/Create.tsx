import HeroForm from "@components/Heroes/Form";
import useHeroCreate from "@hooks/heroes/useHeroCreate";

function CreateHero() {
  const {
    onSubmit,
  } = useHeroCreate();

  return (
    <>
      <HeroForm onSubmit={onSubmit} />
    </>
  )
}

export default CreateHero;
