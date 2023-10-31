import { env } from '$env/dynamic/private';

export const load = async ({ locals: { getSession } }) => {
	return {
	  session: await getSession(),
	  analyticsId: env.VERCEL_ANALYTICS_ID
	}
  }