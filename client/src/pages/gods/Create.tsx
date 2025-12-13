import GodForm from "@components/Gods/Form";
import useGodCreate from "@hooks/gods/useGodCreate";

function CreateGod() {
  const {
    onSubmit,
  } = useGodCreate();

  return (
    <>
      <GodForm onSubmit={onSubmit} />
    </>
  )
}

export default CreateGod;
