import {
  FormContainer,
  FormTextField,
  FormSelect,
  SubmitButton,
  type SubmitHandler,
} from "@barrels/form"
import StatusOption from "@components/Quests/Form/Status/Option";
import StatusSelection from "@components/Quests/Form/Status/Selection";
import useQuestForm, {
  statusItems,
  type DefaultValues,
} from "@hooks/quests/useQuestForm";
import type { Quest } from "@/types";

export interface Props {
  defaultData?: DefaultValues;
  isSubmitting?: boolean;
  onSubmit: SubmitHandler<DefaultValues>;
};

function QuestForm({ defaultData, isSubmitting, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    errors,
    control,
    loadingHeroes,
    heroes,
  } = useQuestForm(defaultData);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTextField
        {...register("title")}
        placeholder="Enter title"
        helperText={errors.title?.message}
        error={!!errors.title} />

      <FormSelect
        control={control}
        label="Select status"
        options={statusItems}
        name="status"
        Item={(option) => <StatusOption {...option} />}
        renderValue={(selection) => <StatusSelection status={selection as Quest["status"]} />}
        errors={errors.status?.message} />

      <FormSelect
        control={control}
        label="Select hero"
        loading={loadingHeroes}
        options={heroes}
        name="heroId"
        errors={errors.heroId?.message} />

      <SubmitButton isSubmitting={isSubmitting} />
    </FormContainer>
  )
}

export default QuestForm;
