import LinearProgress from "@mui/material/LinearProgress";
import RelationForm from "@components/Relations/Form";
import useRelation from "@hooks/relations/useRelation";
import useRelationUpdate from "@hooks/relations/useRelationUpdate";
import type { PropsOf } from "@emotion/react";

function UpdateRelation() {
  const {
    loading,
    data,
  } = useRelation();

  const {
    loading: isSubmitting,
    onSubmit,
  } = useRelationUpdate();

  const getDefaultValues = (): PropsOf<typeof RelationForm>["defaultData"] => {
    if (data) {
      const {
        hero,
        god,
        relation,
      } = data.relation

      return {
        heroId: hero.id,
        godId: god.id,
        relation,
      }
    };
  };

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <RelationForm
          defaultData={getDefaultValues()}
          isSubmitting={isSubmitting}
          onSubmit={formData => onSubmit({ ...formData, id: data.relation.id })} />
      )}
    </>
  )
}

export default UpdateRelation;
