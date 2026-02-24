"use client";

import { useActionState, useEffect, useRef } from "react";
import { type SubmitFormState, submitForm } from "@/app/(app)/actions";
import { cn } from "@/lib/utils";
import ContactButton from "./ContactButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  const [state, formAction] = useActionState(submitForm, null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const hasErrors = state?.errors && Object.keys(state.errors).length > 0;

  useEffect(() => {
    if (!hasErrors) return;
    const firstError = state?.errors;
    if (firstError?.name) nameRef.current?.focus();
    else if (firstError?.email) emailRef.current?.focus();
    else if (firstError?.message) messageRef.current?.focus();
  }, [state, hasErrors]);

  return (
    <form
      action={formAction}
      className="max-w-(--breakpoint-md) pt-16 sm:flex-2 sm:pl-8 sm:pt-0 lg:px-16"
    >
      {state?.message && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-4 rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {state.message}
        </div>
      )}
      <div className="flex flex-col gap-4 md:flex-row">
        <fieldset className="flex grow flex-col">
          <Label htmlFor="name" className="pb-1">
            Name:
          </Label>
          <Input
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            className={cn(
              "mt-2 rounded-md border border-foreground px-4 py-3 focus:bg-background",
              state?.errors?.name && "border-destructive",
            )}
            autoComplete="first_name"
            required
            placeholder="Matthias…"
            aria-invalid={!!state?.errors?.name}
            aria-describedby={state?.errors?.name ? "name-error" : undefined}
          />
          {state?.errors?.name && (
            <p id="name-error" className="mt-1 text-sm text-destructive">
              {state.errors.name}
            </p>
          )}
        </fieldset>
        <fieldset className="flex grow flex-col">
          <Label htmlFor="email" className="pb-1">
            Email:
          </Label>
          <Input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            className={cn(
              "mt-2 rounded-md border border-foreground px-4 py-3 focus:bg-background",
              state?.errors?.email && "border-destructive",
            )}
            autoComplete="email"
            required
            spellCheck={false}
            placeholder="hey@lanas.dev…"
            aria-invalid={!!state?.errors?.email}
            aria-describedby={state?.errors?.email ? "email-error" : undefined}
          />
          {state?.errors?.email && (
            <p id="email-error" className="mt-1 text-sm text-destructive">
              {state.errors.email}
            </p>
          )}
        </fieldset>
      </div>
      <fieldset className="flex flex-col pt-6">
        <Label htmlFor="message">
          Gibt es noch etwas, was Sie mitteilen wollen?
        </Label>
        <Textarea
          ref={messageRef}
          name="message"
          id="message"
          className={cn(
            "mt-2 rounded-md border border-foreground px-4 py-3 focus:bg-background",
            state?.errors?.message && "border-destructive",
          )}
          placeholder="Ihre Nachricht an mich…"
          aria-invalid={!!state?.errors?.message}
          aria-describedby={
            state?.errors?.message ? "message-error" : undefined
          }
        />
        {state?.errors?.message && (
          <p id="message-error" className="mt-1 text-sm text-destructive">
            {state.errors.message}
          </p>
        )}
      </fieldset>
      <ContactButton className="float-right sm:float-none" />
    </form>
  );
}
