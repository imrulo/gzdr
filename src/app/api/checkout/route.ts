import { NextResponse } from "next/server";
// import Stripe from "stripe";

/**
 * Checkout simulado.
 *
 * Para activar Stripe en modo test:
 * 1) `pnpm add stripe` (ya está en dependencias)
 * 2) Crea `.env.local` con `STRIPE_SECRET_KEY=sk_test_...`
 * 3) Descomenta el bloque inferior y devuelve `session.url`
 *
 * Documentación: https://stripe.com/docs/checkout/quickstart
 */
export async function POST() {
  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  //   apiVersion: "2025-02-24.acacia",
  // });
  //
  // const session = await stripe.checkout.sessions.create({
  //   mode: "payment",
  //   success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/style?paid=1`,
  //   cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/style?canceled=1`,
  //   line_items: [{ price: "price_...", quantity: 1 }],
  // });
  //
  // return NextResponse.json({ ok: true, url: session.url });

  return NextResponse.json({ ok: true, url: "/style?checkout=ok" });
}
