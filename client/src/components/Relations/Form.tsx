import {
  FormContainer,
  FormTextField,
  FormSelect,
  SubmitButton,
  type SubmitHandler,
} from "@barrels/form"
import useRelationForm, {
  type DefaultValues,
} from "@hooks/relations/useRelationForm";

export interface Props {
  defaultData?: DefaultValues;
  isSubmitting?: boolean;
  onSubmit: SubmitHandler<DefaultValues>;
};

function RelationForm({ defaultData, isSubmitting, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    control,
    errors,
    loadingSelectOptions,
    selectionOptions: {
      heroes,
      gods,
    },
  } = useRelationForm(defaultData);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormSelect
        control={control}
        label="Select hero"
        loading={loadingSelectOptions}
        options={heroes}
        name="heroId"
        errors={errors.heroId?.message} />

      <FormSelect
        control={control}
        label="Select god"
        loading={loadingSelectOptions}
        options={gods}
        name="godId"
        errors={errors.godId?.message} />

      <FormTextField
        {...register("relation")}
        placeholder="Enter relation"
        helperText={errors.relation?.message}
        error={!!errors.relation} />

      <SubmitButton isSubmitting={isSubmitting} />
    </FormContainer>
  )
}

export default RelationForm;
