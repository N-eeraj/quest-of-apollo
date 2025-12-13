import {
  useForm,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Status,
  type Quest,
} from "@/types";
import { STATUS_DISPLAY_MAP } from "@/constants";

const questFormSchema = z.object({
  title: z.string().min(2, {
    error: "Name is too short",
  }),
  status: z.enum(Status, {
    error: "Invalid Status"
  }),
  hero: z.string({
    error: "Hero is required"
  }),
});

export type QuestFormData = z.infer<typeof questFormSchema>;
export type DefaultValues = Pick<Quest, "title" | "status" > | { hero: Quest["hero"]["id"] };

export const statusItems = Object.values(Status)
  .map(status => ({
    ...STATUS_DISPLAY_MAP.get(status),
    value: status,
  }))

export default function useQuestForm(defaultValues?: DefaultValues) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestFormData>({
    resolver: zodResolver(questFormSchema),
    defaultValues,
  });

  return {
    register,
    handleSubmit,
    errors,
  }
}
