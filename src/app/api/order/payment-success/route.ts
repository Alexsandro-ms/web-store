import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export const POST = async (request: Request) => {
  const signature = request.headers.get("stripe-signature");

  if (!signature) return NextResponse.error();

  const text = await request.text();
  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET_KEY,
  );

  if (event.type === "checkout.session.completed") {
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ["line_items"],
      },
    );

    const lineItems = sessionWithLineItems.line_items?.data;

    console.log("Log Completo: ", sessionWithLineItems);
    console.log("Log Do LineItems: ", sessionWithLineItems.line_items);
    console.log(
      "Log Do LineItems Data: ",
      sessionWithLineItems.line_items?.data,
    );
  }

  return NextResponse.json({ received: true });
};
