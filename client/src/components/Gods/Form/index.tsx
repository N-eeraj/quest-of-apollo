import {
  FormContainer,
  FormTextField,
  SubmitButton,
  type SubmitHandler,
} from "@barrels/form/ui"
import Domains from "@components/Gods/Form/Domains";
import useGodForm, {
  type DefaultValues,
} from "@hooks/gods/useGodForm";

export interface Props {
  defaultData?: DefaultValues;
  isSubmitting?: boolean;
  onSubmit: SubmitHandler<DefaultValues>;
};

function GodForm({ defaultData, isSubmitting, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    errors,
    domains,
    addDomain,
    removeDomain,
  } = useGodForm(defaultData);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTextField
        {...register("name")}
        placeholder="Enter name"
        helperText={errors.name?.message}
        error={!!errors.name} />

      <Domains
        domains={domains}
        register={register}
        errors={errors.domains}
        onAddDomain={addDomain}
        onRemoveDomain={removeDomain} />

      <SubmitButton isSubmitting={isSubmitting} />
    </FormContainer>
  )
}

export default GodForm;
