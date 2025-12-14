import HeroForm from "@components/Heroes/Form";
import useHeroCreate from "@hooks/heroes/useHeroCreate";

function CreateHero() {
  const {
    loading: isSubmitting,
    onSubmit,
  } = useHeroCreate();

  return (
    <>
      <HeroForm
        isSubmitting={isSubmitting}
        onSubmit={onSubmit} />
    </>
  )
}

export default CreateHero;
