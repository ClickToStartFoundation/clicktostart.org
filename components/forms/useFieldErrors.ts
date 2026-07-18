"use client";

import { useCallback, useEffect, useState } from "react";
import type { FieldErrors } from "@/lib/validation";

type MaybeErrorState = { status: string; errors?: FieldErrors };

/**
 * Bridges server-action error state to a locally-clearable copy, so a field's
 * message disappears the moment the user starts fixing it — matching the
 * prototype's "clear on change" behaviour.
 */
export function useFieldErrors(state: MaybeErrorState) {
  const [errors, setErrors] = useState<FieldErrors>({});

  useEffect(() => {
    setErrors(state.status === "error" && state.errors ? state.errors : {});
  }, [state]);

  const clear = useCallback((name: string) => {
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  return { errors, clear };
}
