import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Shared input styling, mirroring the design's `fieldStyle`. */
export function fieldClasses(hasError?: boolean): string {
  return cn(
    "w-full rounded-xl border-[1.5px] bg-canvas px-4 py-[14px] font-display text-[15px] text-ink outline-none transition-colors focus:border-accent",
    hasError ? "border-error" : "border-line",
  );
}

export function TextInput({
  error,
  className,
  ...props
}: { error?: boolean } & InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClasses(error), className)} aria-invalid={error} {...props} />;
}

export function TextArea({
  error,
  className,
  ...props
}: { error?: boolean } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldClasses(error), "min-h-[70px] resize-y", className)}
      aria-invalid={error}
      {...props}
    />
  );
}

export function FieldError({ children, id }: { children?: string; id?: string }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-1.5 text-[12.5px] text-error">
      {children}
    </p>
  );
}
