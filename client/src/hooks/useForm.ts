import { useState } from "react"
import { useMutation } from "@apollo/client/react";
import { useNavigate } from "react-router";
import type { SubmitHandler } from "react-hook-form";
import type { DocumentNode } from "@apollo/client";

export default function useForm<FromData extends Record<string, unknown>>(
  mutation: DocumentNode,
  mutationKey: string,
  resourcePath: string,
) {
  const [loading, setLoading] = useState(false);
  const [mutate] = useMutation(mutation);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FromData> = async (data) => {
    setLoading(true);
    const result = await mutate({
      variables: data,
    });
    setLoading(false);
    navigate(`${resourcePath}/${result.data[mutationKey].id}`);
  };

  return {
    loading,
    onSubmit,
  };
}
