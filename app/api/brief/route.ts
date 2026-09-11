import { handleBrief } from '../../../server/brief-handler.mjs';

async function handle(request: Request) {
  const { env } = await import('cloudflare:workers');
  return handleBrief(request, env);
}
export const POST = handle;
export const OPTIONS = handle;
