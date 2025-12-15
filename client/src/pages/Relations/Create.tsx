import RelationForm from "@components/Relations/Form";
import useRelationCreate from "@hooks/relations/useRelationCreate";

function CreateRelation() {
  const {
    loading: isSubmitting,
    onSubmit,
  } = useRelationCreate();

  return (
    <>
      <RelationForm
        isSubmitting={isSubmitting}
        onSubmit={onSubmit} />
    </>
  )
}

export default CreateRelation;
