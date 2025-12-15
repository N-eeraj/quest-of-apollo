import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  useForm,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { fromNameIdToTextValue } from "@/utils";
import type {
  God,
  Hero,
  Relation,
} from "@/types";

const relationFormSchema = z.object({
  heroId: z.string({
    error: "Hero is required"
  }),
  godId: z.string({
    error: "God is required"
  }),
  relation: z.string().min(2, {
    error: "Relation is too short",
  }),
});

export type RelationFormData = z.infer<typeof relationFormSchema>;
export type DefaultValues = {
  heroId: Hero["id"];
  godId: God["id"];
  relation: Relation["relation"];
};

const GET_SELECT_OPTIONS = gql`
  query SelectOptions {
    heroes {
      id
      name
    }
    gods {
      id
      name
    }
  }
`;

interface SelectOptions {
  heroes: Array<Pick<Hero, "id" | "name">>;
  gods: Array<Pick<God, "id" | "name">>;
};

export default function useRelationForm(defaultValues?: DefaultValues) {
  const {
    loading: loadingSelectOptions,
    data: selectionOptions,
  } = useQuery<SelectOptions>(GET_SELECT_OPTIONS);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RelationFormData>({
    resolver: zodResolver(relationFormSchema),
    defaultValues,
  });

  const mappedSelectOptions = {
    heroes: fromNameIdToTextValue(selectionOptions?.heroes),
    gods: fromNameIdToTextValue(selectionOptions?.gods),
  }

  return {
    register,
    handleSubmit,
    control,
    errors,
    loadingSelectOptions,
    selectionOptions: mappedSelectOptions,
  };
}
