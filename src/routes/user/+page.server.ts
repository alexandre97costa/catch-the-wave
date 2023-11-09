import { supabaseClient } from '$lib/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {


  // get own id
  const { session } = await parent();

  const { data } = await supabaseClient
    .from('profile')
    .select('first_name, last_name')
    .eq('id', session?.user.id);

  return {
    user: data ?? []
  };
};