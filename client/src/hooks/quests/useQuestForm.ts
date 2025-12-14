import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  useForm,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Status,
  type Quest,
  type Hero,
} from "@/types";
import { STATUS_DISPLAY_MAP } from "@/constants";

const questFormSchema = z.object({
  title: z.string().min(2, {
    error: "Name is too short",
  }),
  status: z.enum(Status, {
    error: "Invalid Status"
  }),
  heroId: z.string({
    error: "Hero is required"
  }),
});

const GET_HERO_LIST = gql`
  query Heroes {
    heroes {
      id
      name
    }
  }
`;

export type QuestFormData = z.infer<typeof questFormSchema>;
export type DefaultValues = Pick<Quest, "title" | "status" > & { heroId: Quest["hero"]["id"] };

export const statusItems = Object.values(Status)
  .map(status => ({
    ...STATUS_DISPLAY_MAP.get(status)!,
    value: status,
  }))

export default function useQuestForm(defaultValues?: DefaultValues) {
  const {
    loading: loadingHeroes,
    data: heroes,
  } = useQuery<{heroes: Array<Pick<Hero, "id" | "name">> }>(GET_HERO_LIST);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<QuestFormData>({
    resolver: zodResolver(questFormSchema),
    defaultValues,
  });

  return {
    register,
    handleSubmit,
    errors,
    control,
    loadingHeroes,
    heroes: (heroes?.heroes ?? [])
      .map(({ id, name }) => ({
        value: id,
        text: name,
      })),
  }
}
