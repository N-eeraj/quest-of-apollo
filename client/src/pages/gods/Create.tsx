import GodForm from "@components/Gods/Form";
import useGodCreate from "@hooks/gods/useGodCreate";

function CreateGod() {
  const {
    loading: isSubmitting,
    onSubmit,
  } = useGodCreate();

  return (
    <>
      <GodForm
        isSubmitting={isSubmitting}
        onSubmit={onSubmit} />
    </>
  )
}

export default CreateGod;
