"use client";

import { useFormStatus } from "react-dom";
import { Button, type ButtonVariant } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/** Submit button that reflects the pending state of its enclosing <form>. */
export function SubmitButton({
  children,
  pendingLabel,
  variant = "accent",
  className,
}: {
  children: React.ReactNode;
  pendingLabel?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant={variant}
      aria-disabled={pending}
      className={cn(className, pending && "pointer-events-none opacity-70")}
    >
      {pending ? (pendingLabel ?? children) : children}
    </Button>
  );
}
