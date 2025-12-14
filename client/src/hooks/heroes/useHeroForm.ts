import {
  useForm,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { Hero } from "@/types";

const heroFormSchema = z.object({
  name: z.string().min(2, {
    error: "Name is too short",
  }),
  city: z.string().min(2, {
    error: "City name is too short",
  }),
});

export type HeroFormData = z.infer<typeof heroFormSchema>;
export type DefaultValues = Pick<Hero, "name" | "city">;

export default function useHeroForm(defaultValues?: DefaultValues) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HeroFormData>({
    resolver: zodResolver(heroFormSchema),
    defaultValues,
  });

  return {
    register,
    handleSubmit,
    errors,
  };
}
