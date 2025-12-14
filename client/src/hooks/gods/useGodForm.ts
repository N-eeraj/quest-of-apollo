import { useState } from "react";
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

export default function useGodForm(defaultValues?: DefaultValues) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setValue,
  } = useForm<GodFormData>({
    resolver: zodResolver(godFormSchema),
    defaultValues,
  });

  const [domains, setDomains] = useState(1);
  const addDomain = () => {
    setDomains(prev => prev + 1);
  };
  const removeDomain = (index: number) => {
    setValue("domains", getValues("domains").filter((_, i) => index !== i));
    setDomains(prev => prev - 1);
  };

  return {
    register,
    handleSubmit,
    errors,
    domains,
    addDomain,
    removeDomain,
  };
}
