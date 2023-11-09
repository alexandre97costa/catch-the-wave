import { supabaseClient } from '$lib/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const { data } = await supabaseClient
    .from('profile')
    .select('first_name, last_name')
    .eq('id', params?.slug ?? 'a');

	return {
        user: data ?? []
      };
};