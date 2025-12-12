import {
  useForm,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { God } from "@/types";

const godFormSchema = z.object({
  name: z.string().min(2, {
    error: "Name is too short",
  }),
  domains: z.array(
    z.string().min(2, {
      error: "Domain name is too short",
    }),
  ).min(1, {
    error: "At least 1 domain is needed"
  }),
});

export type GodFormData = z.infer<typeof godFormSchema>;
export type DefaultValues = Pick<God, "name" | "domains">;

export default function useGodValidation(defaultValues?: DefaultValues) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<GodFormData>({
    resolver: zodResolver(godFormSchema),
    defaultValues,
  });

  return {
    register,
    handleSubmit,
    errors,
    setValue,
  }
}
