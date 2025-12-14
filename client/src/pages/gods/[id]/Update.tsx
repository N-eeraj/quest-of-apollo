import LinearProgress from "@mui/material/LinearProgress";
import GodForm from "@components/Gods/Form";
import useGod from "@hooks/gods/useGod";
import useGodUpdate from "@hooks/gods/useGodUpdate";

function UpdateGod() {
  const {
    loading,
    data,
  } = useGod();

  const {
    loading: isSubmitting,
    onSubmit,
  } = useGodUpdate();

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <GodForm
          defaultData={data.god}
          isSubmitting={isSubmitting}
          onSubmit={formData => onSubmit({ ...formData, id: data.god.id })} />
      )}
    </>
  )
}

export default UpdateGod;
