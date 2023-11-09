import { supabaseClient } from '$lib/supabase';
import type { PageServerLoad } from './$types';
import { getServerSession } from "@supabase/auth-helpers-sveltekit";

export const load: PageServerLoad = async ({ params, parent }) => {
  const { session } = await parent();
  // console.log(session);
  const { data } = await supabaseClient
    .from('profile')
    .select('first_name, last_name')
    .eq('id', session?.user.id ?? '');

  return {
    user: data ?? []
  };
};