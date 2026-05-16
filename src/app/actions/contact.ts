"use server";

import type { ContactState } from "@/lib/contact-state";

export async function contactSubscribe(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const email = String(formData.get("email") ?? "").trim();
  const nombre = String(formData.get("nombre") ?? "").trim();

  if (nombre.length < 2) {
    return { ok: false, message: "Dime tu nombre (mínimo 2 letras)." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Email inválido." };
  }

  // Aquí conectarías Resend/Loops/Mailchimp/etc.
  return { ok: true, message: "¡Recibido! (simulación) Te avisamos cuando haya fecha y drops." };
}
