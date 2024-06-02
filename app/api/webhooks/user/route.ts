import { Webhook } from 'svix'
import { headers } from 'next/headers'
import {prisma} from '@/lib/utils'
import { WebhookEvent } from '@clerk/nextjs/server'

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    })
  }

  const payload = await req.json()
  const body = JSON.stringify(payload);
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400
    })
  }

  const { id} = evt.data;
  const eventType = evt.type;

  if (eventType === 'user.created') {
    const {created_at, email_addresses, primary_email_address_id} = evt.data
    const emailAddress = email_addresses?.find((email) => {
      return email.id === primary_email_address_id
    })
    if (id)
      if (emailAddress)
    await prisma.user.create({
      data: {
        clerkUserId: id,
        createdAt: new Date(created_at),
        email: emailAddress?.email_address,
      }
    })
  } else if (eventType === 'user.deleted') {
    if (id)
        await prisma.user.delete(
    {
      where: {
        clerkUserId: id,
      }
    })
  }

  return new Response('', { status: 200 })
}