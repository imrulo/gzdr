"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ContactState } from "@/lib/contact-state";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="fuchsia" className="w-full sm:w-auto" disabled={pending}>
      {pending ? "Enviando…" : "Unirme al boletín"}
    </Button>
  );
}

export function ContactForm({
  action,
  initialState,
}: {
  action: (prev: ContactState, formData: FormData) => Promise<ContactState>;
  initialState: ContactState;
}) {
  const [state, formAction] = useActionState(action, initialState);

  return (
    <form action={formAction} className="rounded-2xl border border-gzdr-border bg-gzdr-surface/35 p-6">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="nombre">Nombre</Label>
          <Input id="nombre" name="nombre" autoComplete="name" placeholder="Tu nombre" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="tú@dominio.com" required />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <SubmitButton />
        {state.message ? (
          <div className={`text-sm ${state.ok ? "text-gzdr-lime" : "text-gzdr-fire"}`}>{state.message}</div>
        ) : null}
      </div>

      <p className="mt-4 text-xs text-white/45">
        Al enviar, aceptas recibir comunicación comercial sobre eventos y productos GZDR. Puedes darte de baja cuando
        quieras.
      </p>
    </form>
  );
}
