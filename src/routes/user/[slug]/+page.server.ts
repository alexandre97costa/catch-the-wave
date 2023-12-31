import { supabaseClient } from '$lib/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {


  // get own id
  const { session } = await parent();

  params.slug = params?.slug ?? session?.user.id

  const { data } = await supabaseClient
    .from('profile')
    .select('first_name, last_name')
    .eq('id', params.slug);

  return {
    user: data ?? []
  };
};